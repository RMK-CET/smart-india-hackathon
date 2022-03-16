package com.Gapi.login.Model;

import javax.persistence.*;

@Entity
@Table(name = "user_details")
public class User {
     @Id
     // @Column(name = "user_name")
     private String user_name;
     private String mail;
     private String full_name;
     private String number;
     private String password;

     public User() {
     }

     public String getUser_name() {
          return user_name;
     }

     public String getPassword() {
          return password;
     }

     public void setPassword(String password) {
          this.password = password;
     }

     public String getFull_name() {
          return full_name;
     }

     public void setFull_name(String full_name) {
          this.full_name = full_name;
     }

     public String getMail() {
          return mail;
     }

     public void setMail(String mail) {
          this.mail = mail;
     }

     public String getNumber() {
          return number;
     }

     public void setNumber(String number) {
          this.number = number;
     }

     @Override
     public String toString() {
          return "UserName :" + getUser_name() + "\npassword :" + getPassword()
                    + "\nFullName :" + getFull_name() + "\nmail :" + getMail() + "\nnumber :" + getNumber();
     }
}
