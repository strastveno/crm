// Dodaj.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Dodaj({ setKlijenti }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const authToken = sessionStorage.getItem('auth_token');
            
            const response = await axios.post('http://127.0.0.1:8000/api/klijents', {
                name, email, phone, address
            }, {
                headers: {
                    'Authorization': `Bearer ${authToken}`
                }
            });

         
            setKlijenti(prevKlijenti => [...prevKlijenti, response.data]);

         
            navigate('/klijenti');

        } catch (error) {
            console.error("Greška prilikom dodavanja klijenta:", error);
        }
    }

    return (
        <div>
            <h2>Dodaj klijenta</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Ime:</label>
                    <input type="text" value={name} onChange={e => setName(e.target.value)} required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label>Telefon:</label>
                    <input type="text" value={phone} onChange={e => setPhone(e.target.value)} required />
                </div>
                <div>
                    <label>Adresa:</label>
                    <textarea value={address} onChange={e => setAddress(e.target.value)} required></textarea>
                </div>
                <div>
                    <button type="submit">Dodaj</button>
                </div>
            </form>
        </div>
    );
}

export default Dodaj;
