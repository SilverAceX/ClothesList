import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './LoginForm.css';

export const LoginForm = ({ setRole }) => {
    const administrator = {
        username: 'admin',
        password: 'admin'
    }
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const selectRole = () => {
        if (username === administrator.username && password === administrator.password) {
            setRole('admin');
        } else {
            setRole('visitor');
        }
    }


    return (
        <div className='login'>
            <Form >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" onChange={(e) => setUsername(e.target.value)} placeholder="Enter Username" />
                    <Form.Text className="text-muted">
                        For testing purposes: Admin credentials are (Username: admin Password: admin)
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                </Form.Group>
                <Button variant="primary" className='sbtn' onClick={selectRole}>
                    Log In
                </Button>
            </Form>
        </div>
    )
}
