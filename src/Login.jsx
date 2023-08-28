import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
 
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/login', { email, password });

            if (response.status === 200) {
                // Čuvanje tokena i podataka o korisniku (ako je potrebno)
                // localStorage.setItem('user', JSON.stringify(response.data));
                
                navigate('/klijenti');
            } else {
                console.error("Error prilikom prijave:", response.data);
            }
        } catch (error) {
            console.error("Greška prilikom prijave:", error);
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
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
                <button type="submit">Prijava</button>
            </form>
        </div>
    );
}

export default Login;
