package org.springbootangular.repositories;


import org.springbootangular.entities.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepsitory extends CrudRepository<User, String> {
	
	

}
