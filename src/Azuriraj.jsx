import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function Azuriraj({ prilike }) {
    let navigate=useNavigate();
    const { id } = useParams();
    const [prilika, setPrilika] = useState(null);
    const [formData, setFormData] = useState({
        napomena: '',
        ocekivaniIznos: '',
        status: '',
 
    });

    useEffect(() => {
        const currentPrilika = prilike.find(p => p.id === Number(id));
        setPrilika(currentPrilika);
        setFormData({
            napomena: currentPrilika?.napomena,
            ocekivaniIznos: currentPrilika?.ocekivaniIznos,
            status: currentPrilika?.status,
    
        });
    }, [prilike, id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const authToken = sessionStorage.getItem('authToken');
        
        axios.put(`http://127.0.0.1:8000/api/prodajne-prilike/${id}`, formData, {
            headers: {
                'Authorization': `Bearer ${authToken}`
            }
        })
        .then(response => {
            console.log("Prilika je ažurirana:", response.data);
            navigate('/admin')
        })
        .catch(error => {
            console.error("Greška prilikom ažuriranja:", error);
        });
    };

    if (!prilika) return <p>Učitavanje...</p>;

    return (
        <div className="azuriraj-container">
            <form onSubmit={handleSubmit}>
                {/* Napomena input */}
                <div>
                    <label>Napomena:</label>
                    <input 
                        type="text"
                        value={formData.napomena}
                        onChange={e => setFormData({ ...formData, napomena: e.target.value })}
                    />
                </div>
                {/* Očekivani iznos input */}
                <div>
                    <label>Očekivani iznos:</label>
                    <input 
                        type="number"
                        value={formData.ocekivaniIznos}
                        onChange={e => setFormData({ ...formData, ocekivaniIznos: e.target.value })}
                    />
                </div>
                {/* Status input */}
                <div>
                    <label>Status:</label>
                    <input 
                        type="text"
                        value={formData.status}
                        onChange={e => setFormData({ ...formData, status: e.target.value })}
                    />
                </div>
                {/* ... ostali inputi ... */}
                <button type="submit">Ažuriraj</button>
            </form>
        </div>
    );
}

export default Azuriraj;
