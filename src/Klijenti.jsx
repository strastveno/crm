import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Klijenti({ klijenti }) {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredKlijenti = klijenti.filter(klijent => 
        klijent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        klijent.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        klijent.phone.includes(searchTerm) ||
        klijent.address.toLowerCase().includes(searchTerm.toLowerCase())
    );

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
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Klijenti;
