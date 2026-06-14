import { useState } from 'react';

function Meteo() {
    const [citta, setCitta] = useState("");
    const [dati, setDati] = useState(null);

    function cercaMeteo() {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + citta + "&appid=3d5a71db6d0fa704548af6edcac82cc7&units=metric&lang=it")
        .then(function(r) { return r.json(); })
        .then(function(dati) {
            setDati(dati);
        });
    }

    return (
        <div>
            <input
            value={citta}
            onChange={(e) => setCitta(e.target.value)}
            placeholder="Scrivi una città"
            />
            <button onClick={cercaMeteo}>Cerca</button>

            {dati && (
                <div>
                    <p>Temperatura: {dati.main.temp}°C</p>
                    <p>Meteo: {dati.weather[0].description}</p>
                    <p>Umidità: {dati.main.humidity}%</p>
                </div>
            )}
        </div>
    );
}

export default Meteo;