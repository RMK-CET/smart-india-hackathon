import React, { useState } from 'react'
import Cookies from 'universal-cookie';


import Login from "./Auth/Login"
import Home from "./Home/Home";


const cookies = new Cookies();
function Index() {
     const auth = cookies.get("userId");
     if (!auth) return <Login />
     return (
          <Home />
     )
}

export default Index