import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Klijenti({ klijenti, setKlijenti }) {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredKlijenti = klijenti.filter(klijent => 
        klijent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        klijent.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        klijent.phone.includes(searchTerm) ||
        klijent.address.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleDelete = async (id) => {
        try {
            const authToken = sessionStorage.getItem('auth_token');
            await axios.delete(`http://127.0.0.1:8000/api/klijents/${id}`, {
                headers: {
                    'Authorization': `Bearer ${authToken}`
                }
            });
            setKlijenti(prevKlijenti => prevKlijenti.filter(klijent => klijent.id !== id));
        } catch (error) {
            console.error("Greška prilikom brisanja klijenta:", error);
        }
    }
 
    return (
        <div className="klijenti-container">
             <div className="actions-container">
                <Link to="/dodaj" className="dodaj-btn">Dodaj</Link>
            </div>
            <div className="search-container">
                <input 
                    type="text" 
                    placeholder="Pretraži klijente..." 
                    value={searchTerm} 
                    onChange={e => setSearchTerm(e.target.value)} 
                />
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Ime</th>
                        <th>Email</th>
                        <th>Telefon</th>
                        <th>Adresa</th>
                        <th>Akcije</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredKlijenti.map(klijent => (
                        <tr key={klijent.id}>
                            <td>{klijent.id}</td>
                            <td>{klijent.name}</td>
                            <td>{klijent.email}</td>
                            <td>{klijent.phone}</td>
                            <td>{klijent.address}</td>
                            <td>
                                <button onClick={() => handleDelete(klijent.id)}>Obriši</button>
                               
                            </td>
                             
                           
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Klijenti;
