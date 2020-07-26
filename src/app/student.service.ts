import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl = 'http://localhost:8080/api';  
  
  constructor(private http:HttpClient) { }  
  
  getStudentList(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'/users');  
  }  
  
  createStudent(student: object): Observable<object> {  
    return this.http.post(`${this.baseUrl}`+'/add-user', student);  
  }  
  
  deleteStudent(id: String): Observable<any> {  
    return this.http.delete(`${this.baseUrl}/delete-user/${id}`, { responseType: 'text' });  
  }  
  
  getStudent(id: String): Observable<Object> {  
    return this.http.get(`${this.baseUrl}/user-id/${id}`);  
  }  
  
  updateStudent(Student)  {  
    console.log(Student);
    return this.http.put(`${this.baseUrl}/update-user/${Student.student_id}`,Student);  
    
  }  
}
