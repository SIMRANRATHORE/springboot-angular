import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentService } from '../student.service';  
import { Student } from '../student';  
//import { Observable,Subject, from } from "rxjs";
import { BsModalService, BsModalRef, ModalDirective } from 'ngx-bootstrap/modal';
import {FormControl,FormGroup,Validators} from '@angular/forms';  


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  @ViewChild('studentModal') public studentModal: ModalDirective ;
  

  constructor(private studentservice:StudentService) { } 
  studentsArray: Student[] = [];   

  modalRef: BsModalRef;
  students: any[]=[];  
   
  deleteMessage=false;  
  studentlist:any;  
  isupdated = false;  

  ngOnInit(): void {
    this.isupdated=false;  
    this.studentservice.getStudentList().subscribe(data =>{  
      this.students =data;  
    
      })  
  }

  
  deleteStudent(id: String) {  
    this.studentservice.deleteStudent(id)  
      .subscribe(  
        data => {  
          console.log(data);  
          this.deleteMessage=true;  
          this.studentservice.getStudentList().subscribe(data =>{  
            this.students =data  
            })  
        },  
        error => console.log(error));  
  }  

  updateStudent(data){  
    this.students = data;
    

  }  

  studentupdateform=new FormGroup({  
    student_id:new FormControl(),  
    fname:new FormControl(),  
    lname:new FormControl()
  });  

  actionModal(student?){
    this.studentupdateform.reset();
    this.studentupdateform.controls.student_id.setValue(student.id);
			this.studentupdateform.controls.fname.setValue(student.fname);
			this.studentupdateform.controls.lname.setValue(student.lname);
			this.studentModal.show();
  }
  closeModal(){
		this.studentModal.hide();
	}

  
  updateStu(){  
       
   this.studentservice.updateStudent(this.studentupdateform.value).subscribe(  
    () => {       
      this.isupdated=true;  
      this.studentservice.getStudentList().subscribe((data:any)=>{  
        this.studentupdateform.reset();
        this.closeModal();
        this.students =data
        })  
    },  
    error => console.log(error));  
  }  

  get StudentId(){  
    return this.studentupdateform.get('student_id');  
  }  

  get StudentFirst(){  
    return this.studentupdateform.get('student_fname');  
  }  
  get StudentLast(){  
    return this.studentupdateform.get('student_lname');  
  }  
  changeisUpdate(){  
    this.isupdated=false;  
  }  

}
