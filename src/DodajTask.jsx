import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function DodajTask({ users }) {
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [userId, setUserId] = useState('');
    const navigate= useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();

        const authToken = sessionStorage.getItem('auth_token');
        const config = {
            headers: {
                'Authorization': `Bearer ${authToken}`
            }
        }; 
        const payload = {
            description,
            due_date: dueDate,
            user_id: userId
        };

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/tasks', payload, config);
            console.log(response.data);
            navigate('/admin')
        } catch (error) {
            console.error('Greška prilikom dodavanja taska:', error);
        }
    };

    return (
        <div className="dodaj-task-container">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="user">Korisnik:</label>
                    <select id="user" value={userId} onChange={(e) => setUserId(e.target.value)}>
                        {users.map(user => (
                            <option key={user.id} value={user.id}>{user.name}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label htmlFor="description">Opis:</label>
                    <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
                </div>

                <div>
                    <label htmlFor="dueDate">Rok:</label>
                    <input type="date" id="dueDate" value={dueDate} onChange={(e) => setDueDate(e.target.value)} required />
                </div>

                <button type="submit">Dodaj Task</button>
            </form>
        </div>
    );
}

export default DodajTask;
