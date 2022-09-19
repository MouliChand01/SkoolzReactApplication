import React from "react";
import FacebookLogin from 'react-facebook-login';
import './facecom.css'
import SearchComp from "./SearchComp";

const Fbcomp = () => {
    const responseFacebook = (response) => {
        console.log(response);
    }
    return (
        <div>
            <h1>facebookBtn login</h1>
            <FacebookLogin
                textButton="sign in with FaceBook"
                appId="358363052516538"
                autoLoad={true}
                callback={responseFacebook}
            />
            <hr /><hr />
            <h1>Google API autocomplete</h1>
            <SearchComp/>
        </div>
    )
}
export default Fbcomp