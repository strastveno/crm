import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Admin = ({ prilike, klijenti }) => {
    const meseci = {};

    prilike.forEach(prilika => {
        const mesec = new Date(prilika.created_at).getMonth();
        meseci[mesec] = (meseci[mesec] || 0) + 1;
    });
   
    const data = Object.keys(meseci).map(mesec => ({
        mesec: new Date(0, mesec).toLocaleString('default', { month: 'long' }),
        brojPrilika: meseci[mesec]
    }));
  

    return (
        <div className="admin-container">
            <h2>Statistika prodajnih prilika</h2>
            <div className="info-boxes">
                <div className="info-box">
                    <span>Ukupno klijenata:</span>
                    <strong>{klijenti.length}</strong>
                </div>
                <div className="info-box">
                    <span>Ukupno prodajnih prilika:</span>
                    <strong>{prilike.length}</strong>
                </div>
            </div>
            <BarChart
                width={800}
                height={400}
                data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="mesec" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="brojPrilika" fill="#8884d8" />
            </BarChart>
        </div>
    );
}

export default Admin;
