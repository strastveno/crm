import React, { useState, useEffect } from 'react';
 

function Klijenti({klijenti}) {
    
    return (
        <div className="klijenti-container">
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
                    {klijenti.map(klijent => (
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
