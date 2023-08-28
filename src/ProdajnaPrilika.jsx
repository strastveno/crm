import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProdajnaPrilika({ prilike }) {
    const [filteredPrilike, setFilteredPrilike] = useState([]);
    const [conversionRates, setConversionRates] = useState({});

    useEffect(() => {
   
        axios.get('https://api.exchangerate-api.com/v4/latest/USD')
        .then(response => {
            setConversionRates(response.data.rates);
        })
        .catch(error => {
            console.error("Greška prilikom povlačenja kurseva:", error);
        });
    }, []);

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
                        <th>Očekivani Iznos (USD)</th>
                        <th>Očekivani Iznos (RSD)</th>
                        <th>Očekivani Iznos (EUR)</th>
                        <th>Status</th>
                        <th>Ime Klijenta</th>
                        <th>Email Klijenta</th>
                        <th>Adresa Klijenta</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredPrilike.map(prilika => (
                        <tr key={prilika.id}>
                            <td>{prilika.id}</td>
                            <td>{prilika.napomena}</td>
                            <td>{prilika.ocekivaniIznos}</td>
                            <td>{(prilika.ocekivaniIznos * conversionRates.RSD).toFixed(2)}</td>
                            <td>{(prilika.ocekivaniIznos * conversionRates.EUR).toFixed(2)}</td>
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
