package org.springbootangular.services;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.springbootangular.entities.User;
import org.springbootangular.repositories.UserRepsitory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
public class UserService {

	@Autowired
	private UserRepsitory userRepsitory;

	public List<User> getAllUser() {
		List<User> users = new ArrayList<>(Arrays.asList());
		userRepsitory.findAll().forEach(users::add);

		return users;
	}

	public User getUser(String id) {
		return userRepsitory.findById(id).get();
	}

	public User addUser(User user) {
		return userRepsitory.save(user);
	}

	public User updateUser(User user, String id) {
		Optional<User> optionlUser = userRepsitory.findById(id);

		if (!optionlUser.isPresent()) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "User id not exists");
		}

		User exUser = optionlUser.get();
		exUser.setFname(user.getFname());
		exUser.setLname(user.getLname());
		return userRepsitory.save(exUser);
	}

	public void deleteUser(String id) {
		userRepsitory.deleteById(id);
	}

}
