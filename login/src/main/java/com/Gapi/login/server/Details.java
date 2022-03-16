package com.Gapi.login.server;

import com.Gapi.login.Model.User;
import com.Gapi.login.Repositorie.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class Details {
     // * Return details to rect
     @Autowired
     public UserRepository rep;



     private String user_name;
     private String mail;
     private String personal_id;
     public Details() {
     }

     public Details(String a, String b, String c) {
          this.user_name = a;
          this.mail = b;
          this.personal_id = c;
     }

     public String getUser_name() {
          return user_name;
     }

     public String getMail() {
          return mail;
     }

     public String getPersonal_id() {
          return personal_id;
     }

     public Details validate(User details) {
          /*
           * ! if not valid return null
           * Validate and get the personal id
           * this.username=NULL; username Not match or password not match
           */
          user_name = details.getUser_name();
          personal_id = "3452356235";
          mail = "qwe@gamil.com";
          // System.out.println("------");
          return new Details(user_name, mail, personal_id);
     }
}
