import { Button } from '@material-ui/core';
import React from 'react';
import "./Login.css"

function Login() {
    return (
        <div className="login">
            <div className="login_logo">
                <img
                  src="file:///Users/admin/Desktop/imessage-clone-yt/src/imessage-logo.png" alt=""
                />
                <h1>iMessage</h1>
            </div>

            <Button>Sign In</Button>
        </div>
    );
}

export default Login
