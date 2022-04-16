import React, {useState} from 'react';
import axios from "axios";

function SignUpPage() {
    const [isButtonDisabled, setButtonDisabled] = useState(true);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    function onChange(e) {
        const {id, value} = e.target;
        switch (id) {
            case 'username':
                setUsername(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                setButtonDisabled(value !== confirmPassword);
                break;
            case 'confirmPassword':
                setConfirmPassword(value);
                setButtonDisabled(value !== password);
                break;
            default:
                console.log(`default: ${id} : ${value}`);
        }
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
               onChange={onChange}/>
        <br/> <br/>
        <label htmlFor="email">Email </label><br/>
        <input id="email"
               placeholder="email"
               onChange={onChange}/>
        <br/> <br/>
        <label htmlFor="password">Password </label><br/>
        <input id="password"
               placeholder="password"
               type="password"
               onChange={onChange}/>
        <br/> <br/>
        <label htmlFor="confirmPassword">Confirm Password </label><br/>
        <input id="confirmPassword"
               placeholder="confirm password"
               type="password"
               onChange={onChange}/>
        <br/> <br/>
        <button disabled={isButtonDisabled}
                onClick={onFormSubmit}>
            Sign Up
        </button>
    </form>
}

export default SignUpPage;
