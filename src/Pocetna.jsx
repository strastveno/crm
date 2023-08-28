import axios from 'axios';
import React, { useEffect, useState } from 'react'; 

const Pocetna = () => {
    const [images, setImages] = useState([]);
    const ACCESS_KEY = 'AYoD1RB6ATmNpK69MpZK7lqW5fFyqTUtrHFhEZW7o1k';  
    
    useEffect(() => {
      const fetchImages = async () => {
        try {
          const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: {
              query: 'office',
              per_page: 3,
            },
            headers: {
              Authorization: `Client-ID ${ACCESS_KEY}`,
            },
          });
  
          setImages(response.data.results);
        } catch (error) {
          console.error("Greška prilikom dohvaćanja slika:", error);
        }
      };
  
      fetchImages();
    }, []); 
    return (
        <div className="crm-container">
            <h1>Šta je CRM?</h1>
            <p>
                CRM (Customer Relationship Management) predstavlja pristup upravljanju odnosima sa vašim kupcima. To je strategija koja se koristi za bolje razumijevanje, privlačenje i zadržavanje kupaca kroz analiziranje i ispravno upravljanje informacijama i interakcijama sa njima.
            </p>
            <h2>Čemu služi CRM?</h2>
            <ul>
                <li>Upravljanje kontaktima i interakcijama s klijentima.</li>
                <li>Automatizacija prodaje, marketinga i usluge korisnicima.</li>
                <li>Segmentacija klijenata i ciljanje određenih tržišnih segmenata.</li>
                <li>Analiziranje prodajnih podataka i praćenje performansi.</li>
                <li>Poboljšanje komunikacije unutar tima.</li>
            </ul>
            <p>
                CRM rešenja olakšavaju firmama praćenje i upravljanje interakcijama s klijentima, omogućavajući efikasniju i personalizovaniju komunikaciju.
            </p>
            <div className="gallery">
                {images.map(image => (
                    <div key={image.id} className="image-container">
                        <img src={image.urls.small} alt={image.description || 'Office Image'} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Pocetna;
