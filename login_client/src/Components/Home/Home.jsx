import React from 'react'
import Cookies from 'universal-cookie';

const cookies = new Cookies();
function Home() {

     const handel_logout = (e) => {
          cookies.remove('user_name');
          cookies.remove('mail');
          cookies.remove('userId');
          window.location.reload();
     }
     return (
          <>
               <div>{cookies.get("user_name")}</div>
               <button onClick={handel_logout}>Logout</button>
          </>
     )
}

export default Home