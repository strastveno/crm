import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Navbar({token,setToken}) {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            const authToken = sessionStorage.getItem('auth_token');

            await axios.post('http://127.0.0.1:8000/api/logout', {}, {
                headers: {
                    'Authorization': `Bearer ${authToken}`
                }
            });
    
             
            sessionStorage.removeItem('auth_token');
            setToken(null);
            navigate('/');
        } catch (error) {
            console.error("Greška prilikom odjave:", error);
        }
    }

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Početna</Link>
                </li>
                { !token && 
                    <li>
                        <Link to="/login">Uloguj se</Link>
                    </li>
                }
                { !token &&
                    <li>
                        <Link to="/register">Registruj se</Link>
                    </li>
                }
                { token &&
                    <li>
                        <button onClick={handleLogout}>Odjavi se</button>
                    </li>
                }
            </ul>
        </nav>
    );
}

export default Navbar;
