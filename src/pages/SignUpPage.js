const SignUpPage = () => <>
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
    />

    <br/>

    <label htmlFor="confirmPassword">Confirm Password</label>
    <input id="confirmPassword"
           placeholder="confirm password"
           type="password"
    />

    <br/>

    <button disabled>Sign Up</button>

</>


export default SignUpPage;
