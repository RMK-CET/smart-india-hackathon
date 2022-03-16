package com.Gapi.login.controller;

import com.Gapi.login.Model.User;
import com.Gapi.login.Repositorie.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/auth")
public class Login {
	@Autowired
	public UserRepository rep;

	@RequestMapping(method = RequestMethod.POST, value = "/login")
	public User login(@RequestBody User details) {
		// System.out.println("User Is Logging in as\n" + details);
		// Todo: Valid using Details.class
		List<User> res_list = rep.findByUser_name(details.getUser_name());
		if (res_list.size() != 1)
			return null;
		User result = res_list.get(0);
		// System.out.println(result + "\n\n\n" + details);
		if (!result.getPassword().equals(details.getPassword())) {
			result.setPassword("invalid");
		} else
			result.setPassword("");
		return result;
	}

	@RequestMapping(method = RequestMethod.POST, value = "/sign_up")
	public int signup(@RequestBody User details) {
		/*
		 * 0-> all
		 * 1-> user_name
		 * 2-> mail
		 * 3-> phone_number
		 * Unique
		 */
		// System.out.println(rep.ExistByName(details.getUser_name()) + " " +
		// rep.ExistByMail(details.getMail()) + " "
		// + rep.ExistByNumber(details.getNumber()) + " " + details.getUser_name());
		// System.out.println("----");
		if (rep.ExistByName(details.getUser_name())) {
			// System.out.println("User Name Already Exist");
			return 1;
		}
		if (rep.ExistByMail(details.getMail())) {
			// System.out.println(" emailAlready Exist");
			return 2;
		}
		if (rep.ExistByNumber(details.getNumber())) {
			// System.out.println("number Already Exist");
			return 3;
		}
		// System.out.println("Updated");
		rep.save(details);
		return 0;
	}

	@GetMapping("/login")
	public String home2() {
		// System.out.println("get");
		return "index from the prest controller";
	}
}
