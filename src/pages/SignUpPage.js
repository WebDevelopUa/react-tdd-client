import React, {useState} from 'react';
import axios from "axios";
import Container from 'react-bootstrap/Container';
import {Button, Form} from 'react-bootstrap';

function SignUpPage() {
    const [info, setInfo] = useState('');
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
        setInfo('Sending ...');

        try {
            // const response = await axios.post(
            //     "/api/1.0/users",
            //     // "http://127.0.0.1:3000/api/1.0/users",
            //     // "http://localhost:3000/api/1.0/users",
            //     // "http://localhost:3030/api/1.0/users",
            //     // "http://127.0.0.1:3030/api/1.0/users",
            //     {
            //         username, email, password
            //     }
            // );
            // const result = response;

            const params = {
                headers: {
                    Accept: 'application/json', 'Content-Type': 'application/json',
                }, method: 'POST', body: JSON.stringify({
                    username, email, password,
                })
            }
            const response = await fetch(
                "/api/1.0/users",
                // "http://127.0.0.1:3000/api/1.0/users",
                params,);
            const result = await response.json();

            console.log('Submitted:', JSON.stringify(result));
            setInfo(`Submitted:, ${JSON.stringify(result)}`);

            return result;
        } catch (e) {
            setInfo(`Error`)
            console.error('e');
            return 'error';
        }

    }

    return <>
        <Container className="p-3">
            <Container className="bg-light p-1 rounded-3 col-lg-6 col-md-8">

                <Form className="card">

                    <div className="card-header">
                        <h1 className="header mb-3">Sign Up</h1>
                    </div>

                    <div className="card-body">
                        <Form.Group className="mb-3 mx-auto col-11 col-sm-10">
                            <Form.Label htmlFor="username">Username </Form.Label>
                            <Form.Control id="username"
                                          placeholder="username"
                                          onChange={onChange}/>
                        </Form.Group>

                        <Form.Group className="mb-3 mx-auto col-11 col-sm-10">
                            <Form.Label htmlFor="email">Email </Form.Label><br/>
                            <Form.Control id="email"
                                          placeholder="email"
                                          onChange={onChange}/>
                        </Form.Group>

                        <Form.Group className="mb-3 mx-auto col-11 col-sm-10">
                            <Form.Label htmlFor="password">Password </Form.Label><br/>
                            <Form.Control id="password"
                                          placeholder="password"
                                          type="password"
                                          onChange={onChange}/>
                        </Form.Group>

                        <Form.Group className="mb-4 mx-auto col-11 col-sm-10">
                            <Form.Label htmlFor="confirmPassword">Confirm Password </Form.Label><br/>
                            <Form.Control id="confirmPassword"
                                          placeholder="confirm password"
                                          type="password"
                                          onChange={onChange}/>
                        </Form.Group>

                        <Form.Group className="mb-4">
                            <Form.Text className="text-muted">
                                {info}
                            </Form.Text>
                        </Form.Group>
                    </div>

                    <div className="card-footer">
                        <Button variant="primary"
                                type="submit"
                                disabled={isButtonDisabled}
                                onClick={onFormSubmit}>
                            Sign Up
                        </Button>
                    </div>

                </Form>
            </Container>
        </Container>
    </>
}

export default SignUpPage;
