import React, {useState} from 'react';

export const LoginForm = ({setRole}) => {
    const administrator = {
        username: 'admin',
        password: 'admin'
    }
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const selectRole = () => {
        if (username === administrator.username && password === administrator.password) {
            setRole('admin');
        }else {
            setRole('visitor');
        }
    }
    

    return (
        <div>
            <form action="">
                <label>Username: 
                <input name='username' type="text" onChange={(e) => setUsername(e.target.value)}/>
                </label>
                <label>Password: 
                <input name='password' type="password" onChange={(e) => setPassword(e.target.value)}/>
                </label>
            </form>
            <button onClick={selectRole}>
                Login
            </button>
        </div>
    )
}
