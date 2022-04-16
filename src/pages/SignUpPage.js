import React, {useState} from 'react';

function SignUpPage() {
    const [isButtonDisabled, setButtonDisabled] = useState(true);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // setTimeout(() => setButtonDisabled(true), 5000);

    function onChangePassword(e) {
        setPassword(e.target.value);
        setButtonDisabled(e.target.value !== confirmPassword);
    }

    function onChangeConfirmPassword(e) {
        setConfirmPassword(e.target.value);
        setButtonDisabled(e.target.value !== password);
    }

    function onFormSubmit() {
        console.log('Submitted!');
    }

    return <>
        <h1>Sign Up</h1>
        <label htmlFor="username">Username</label>
        <input id="username" placeholder="username"/>

        <br/>

        <label htmlFor="email">Email</label>
        <input id="email" placeholder="email"/>

        <br/>

        <label htmlFor="password">Password</label>
        <input id="password"
               placeholder="password"
               type="password"
               onChange={onChangePassword}/>

        <br/>

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input id="confirmPassword"
               placeholder="confirm password"
               type="password"
               onChange={onChangeConfirmPassword}/>

        <br/>

        <button disabled={isButtonDisabled}
                onClick={onFormSubmit}>
            Sign Up
        </button>

    </>
}


export default SignUpPage;
