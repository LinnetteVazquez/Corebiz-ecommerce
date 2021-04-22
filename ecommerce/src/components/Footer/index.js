// import React from 'react';
import './index.css'

function Footer() {
    return <footer className="footer">
    <div className="ubicacion">
        <h2>Ubicación</h2>
        <p>Avenida Andromeda 2000, Bioco 6 e 8</p>
        <p>Alphavile SP</p>
        <p>brasil@corebiz.ag</p>
        <p>+ 55 11 3090 1039</p>
    </div>
    <div className="contact">
       <button><i class="fas fa-envelope"></i>CONTÁCTANOS</button>
       <button><i class="fas fa-headset"></i>HABLA CON UN CONSULTOR</button>
    </div>
    <div className="Corebiz">
        <div>
            <p>Desarrollado por</p>
            <p className="name-logo">Corebiz.</p>
        </div>
        <div>
           <p>Powerex by</p> 
           <p className="vtex">Vtex</p>
        </div>
    </div>
    </footer>

}

export default Footer;