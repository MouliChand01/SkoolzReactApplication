import React from "react";
import FacebookLogin from 'react-facebook-login';

const Fbcomp =()=>{
   const responseFacebook =(response)=>{
    console.log(response);
   }
    return(
        <div>
           <h1>facebookBtn login</h1>
           <hr/>
           <FacebookLogin
            appId="358363052516538"
            autoLoad={true}
            fields="name,email,picture"
            scope="public_profile,user_friends"
            callback={responseFacebook}
            icon="fa-facebook"/>

        </div>
    )
}
export default Fbcomp