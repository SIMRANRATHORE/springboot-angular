package org.springbootangular.controllers;

import java.util.List;

import org.springbootangular.entities.User;
import org.springbootangular.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value = "/api")
public class UserController {

	@Autowired
	private UserService userService;

	@RequestMapping("/users")
	public List<User> getAllUser() {
		return userService.getAllUser();
	}

	@RequestMapping("/user-id/{id}")
	public User getUser(@PathVariable String id) {
		return userService.getUser(id);
	}

	@RequestMapping(method = RequestMethod.POST, value = "/add-user")
	public User addUser(@RequestBody User user) {
		return userService.addUser(user);
	}

	@RequestMapping(method = RequestMethod.PUT, value = "/update-user/{id}")
	public User updateUser(@RequestBody User user, @PathVariable String id) {
	return	userService.updateUser(user, id);
	}

	@RequestMapping(method = RequestMethod.DELETE, value = "/delete-user/{id}")
	public void deleteUser(@PathVariable String id) {
		userService.deleteUser(id);
	}

}
