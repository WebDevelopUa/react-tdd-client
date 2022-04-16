import React, {useState} from 'react';
import axios from "axios";

function SignUpPage() {
    const [isButtonDisabled, setButtonDisabled] = useState(true);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');



    function onChangeUsername(e) {
        setUsername(e.target.value);
    }

    function onChangeEmail(e) {
        setEmail(e.target.value);
    }

    function onChangePassword(e) {
        setPassword(e.target.value);
        setButtonDisabled(e.target.value !== confirmPassword);
    }

    function onChangeConfirmPassword(e) {
        setConfirmPassword(e.target.value);
        setButtonDisabled(e.target.value !== password);
    }

    async function onFormSubmit(e) {
        e.preventDefault();
        await axios.post(
            // "http://localhost:3000/api/1.0/users",
            // "http://localhost:3030/api/1.0/users",
            "/api/1.0/users",
            {
                username, email, password
            }
        )
         console.log('Submitted!');
    }

    return <form>
        <h1>Sign Up</h1>
        <label htmlFor="username">Username </label><br/>
        <input id="username"
               placeholder="username"
               onChange={onChangeUsername}/>

        <br/>
        <br/>

        <label htmlFor="email">Email </label><br/>
        <input id="email"
               placeholder="email"
               onChange={onChangeEmail}/>

        <br/>
        <br/>

        <label htmlFor="password">Password </label><br/>
        <input id="password"
               placeholder="password"
               type="password"
               onChange={onChangePassword}/>

        <br/>
        <br/>

        <label htmlFor="confirmPassword">Confirm Password </label><br/>
        <input id="confirmPassword"
               placeholder="confirm password"
               type="password"
               onChange={onChangeConfirmPassword}/>

        <br/>
        <br/>

        <button disabled={isButtonDisabled}
                onClick={onFormSubmit}>
            Sign Up
        </button>

    </form>
}


export default SignUpPage;
