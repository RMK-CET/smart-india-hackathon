import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
const details = {
     user_name: '',
     first_name: '',
     second_name: '',
     password: '',
     mail: '',
     number: '',
     confirm_password: '',
}
function Login() {
     const [Sign_up, setSign_up] = useState(false);
     const [confirm_correct, set_confirm_correct] = useState(true);
     const [Form, setForm] = useState(details);
     const [unique, set_unique] = useState(-1);
     const [invalid, set_invalid] = useState(0);
     const toggle_mode = () => {
          setSign_up((prevSign_up) => !prevSign_up);
     }
     const submit = async (e) => {
          e.preventDefault();
          if (Sign_up && Form.password !== Form.confirm_password) {
               set_confirm_correct(false);
          }
          else {
               const User = { user_name: Form.user_name, password: Form.password }
               const URL = 'http://localhost:1253/auth/';
               let sign_up_data = "1";
               if (Sign_up) {
                    sign_up_data = await axios.post(`${URL}sign_up`, {
                         ...Form, full_name: Form.first_name + "-" + Form.second_name,
                    });
                    set_unique(sign_up_data.data);
               }
               // console.log(unique, sign_up_data);
               if (sign_up_data === "1" || sign_up_data.data === 0) {
                    // console.log("entered");
                    await axios.post(`${URL}login`, {
                         ...User,
                    }).then(data => {
                         // console.log(data);
                         if (data.data === "") {
                              set_invalid(1);
                         }
                         else {
                              // console.log(data.data.password + " " + "invalid");
                              if (data.data.password === "invalid") {
                                   set_invalid(2);
                              }
                              else {
                                   cookies.set('user_name', data.data.user_name);
                                   cookies.set('mail', data.data.mail);
                                   cookies.set('userId', data.data.personal_id);
                                   window.location.reload();
                              }
                         }
                         // console.log(invalid);
                    });
               }
          }
     };
     const updateChange = (e) => {
          setForm({ ...Form, [e.target.name]: e.target.value });
     }
     const update_password_Change = (e) => {
          updateChange(e);
          set_confirm_correct(true);
          if (invalid === 2)
               set_invalid(0);
          // console.log(cp_correct);
     }
     const update_user_name_Change = (e) => {
          updateChange(e);
          set_invalid(0);
          if (unique === 1)
               set_unique(-1);
     }
     const update_mail_Change = (e) => {
          updateChange(e);
          if (unique === 2)
               set_unique(-1);
     }
     const update_number_Change = (e) => {
          updateChange(e);
          if (unique === 3)
               set_unique(-1);
     }
     return (
          <div>
               {/* {cookies.get('user_name')} */}
               <form method='post' onSubmit={submit}>
                    <label htmlFor="user_name">User Name</label>
                    <input type="text" name="user_name" id="user_name" onChange={update_user_name_Change} required />
                    <br />
                    {(invalid === 1 && <p>No User Exist</p>)}
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" onChange={update_password_Change} required />
                    <br />
                    {(invalid === 2 && <p>Invalid Password</p>)}
                    {Sign_up && (
                         <>
                         </>
                    )}
                    <button type="submit">{Sign_up ? "Sign up" : "Login"}</button>
                    <br />
                    <p onClick={toggle_mode}>
                         {Sign_up ? "Already Have  a Account Login" : "Dont Have a Account Sign up"}</p>
               </form>
          </div>
     )
}

export default Login