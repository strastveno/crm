import React, { useState } from 'react';
import axios from 'axios';

function DodajPP({prodajnePrilike, setProdajnePrilike}) {
    const [formData, setFormData] = useState({
        status: '',
        client_id: '',
        prodavac_id: sessionStorage.getItem('id'), 
        napomena: '',
        ocekivaniIznos: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const authToken = sessionStorage.getItem('auth_token');
        axios.post('http://127.0.0.1:8000/api/prodajne-prilike', formData, {
            headers: {
                'Authorization': `Bearer ${authToken}`
            }
        })
        .then(response => {
            alert('Uspesno dodato', response.data);
            setProdajnePrilike([...prodajnePrilike, response.data]);
        })
        .catch(error => {
            alert('Greška prilikom dodavanja', error);
        });
    };

    return (
        <div className="dodaj-pp-container">
            <h2>Dodaj Prodajnu Priliku</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Status:</label>
                    <input
                        type="text"
                        name="status"
                        value={formData.status}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Client ID:</label>
                    <input
                        type="text"
                        name="client_id"
                        value={formData.client_id}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Napomena:</label>
                    <input
                        type="text"
                        name="napomena"
                        value={formData.napomena}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Očekivani Iznos:</label>
                    <input
                        type="number"
                        name="ocekivaniIznos"
                        value={formData.ocekivaniIznos}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button type="submit">Dodaj</button>
            </form>
        </div>
    );
}

export default DodajPP;
