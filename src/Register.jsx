import React, { useState } from 'react';
import axios from 'axios';
import {   useNavigate } from 'react-router-dom'; 

const RegisterComponent = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/register', { name, email, password });
            console.log(response);
            if (response.status === 201) {
                navigate('/login');  
            } else {
                console.error("Error prilikom registracije:", response.data);
            }
        } catch (error) {
            console.error("Greška prilikom registracije:", error);
        }
    };

    return (
        <div className="register-container">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Ime"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Registracija</button>
            </form>
        </div>
    );
}

export default RegisterComponent;
