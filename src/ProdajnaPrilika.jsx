import React, { useState, useEffect } from 'react';

function ProdajnaPrilika({ prilike }) {
    const [filteredPrilike, setFilteredPrilike] = useState([]);

    useEffect(() => {
        const prodavacId = sessionStorage.getItem('id');

        const filtriranePrilike = prilike.filter(prilika => prilika.prodavac_id === Number(prodavacId));
        setFilteredPrilike(filtriranePrilike);
    }, [prilike]);

    return (
        <div className="prodajna-prilika-container">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Napomena</th>
                        <th>Očekivani Iznos</th>
                        <th>Status</th>
                        <th>Ime Klijenta</th>
                        <th>Email Klijenta</th>
                        <th>Adresa Klijenta</th>
                    </tr>
                </thead>
                <tbody>
                    { filteredPrilike && filteredPrilike.map(prilika => (
                        <tr key={prilika.id}>
                            <td>{prilika.id}</td>
                            <td>{prilika.napomena}</td>
                            <td>{prilika.ocekivaniIznos}</td>
                            <td>{prilika.status}</td>
                            <td>{prilika.client.name}</td>
                            <td>{prilika.client.email}</td>
                            <td>{prilika.client.address}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ProdajnaPrilika;
