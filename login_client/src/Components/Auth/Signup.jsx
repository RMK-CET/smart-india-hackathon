import React from 'react'

function Signup() {
     return (
          <>
               <label htmlFor="first_name">First Name</label>
               <input type="text" name="first_name" id="first_name" onChange={updateChange} required />
               <br />
               <label htmlFor="second_name">Second Name</label>
               <input type="text" name="second_name" id="second_name" onChange={updateChange} required />
               <br />
               <label htmlFor="confirm_password">Confirm Password</label>
               <input type="password" name="confirm_password" id="confirm_password" onChange={update_password_Change} required />
               <br />
               {(!confirm_correct && <p>Password does not match</p>)}
               <label htmlFor="mail">mail</label>
               <input type="email" name="mail" id="mail" onChange={update_mail_Change} required />
               <br />
               {(unique === 2 && <p>Mail Id is already Used</p>)}
               <label htmlFor="number">Phone Number</label>
               <input type="text" name="number" id="number" onChange={update_number_Change} required />
               <br />
               {(unique === 3 && <p>Number is Already in use</p>)}

          </>
     )
}

export default Signup