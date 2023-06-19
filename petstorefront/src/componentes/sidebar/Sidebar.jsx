import React, {useState, useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';
import PetStoreLogo from '../../archivos/img/PetStoreLogo.png';
import './Sidebar.css';

const Sidebar = () => {
    const pagina = useLocation();
    const [cerrado, setCerrado] = useState(false);
    const [activo, setActivo] = useState('/');
    useEffect(() => {
        setActivo(pagina.pathname);
    }, [pagina]);
    return(
        <aside className={cerrado ? 'movimiento' : ''}>
            <button className="btn fondoPurpura text-light absoluto btnSidebar" onClick={() => {setCerrado(!cerrado)}}><i id="iconoSidebar" className={'fas fa-bars'}></i></button>
            <div className="text-center bg-light headerSidebar">
                <img src={PetStoreLogo} width="90" height="45" alt="Logo de PetStore Sidebar" />
            </div>
            <div class="bodySidebar bg-light">
                <ul class="text-center pl-0">
                    <li><Link to={'/'} className={activo === '/' ? 'textoActivo' : ''}>Inicio</Link></li>
                    <li><Link to={'/nosotros'} className={activo === '/nosotros' ? 'textoActivo' : ''}>Nosotros</Link></li>
                    <li><Link to={'/tienda'} className={activo === '/tienda' ? 'textoActivo' : ''}>Tienda</Link></li>
                    <li><Link to={'/organizaciones'} className={activo === '/organizaciones' ? 'textoActivo' : ''}>Organizaciones</Link></li>
                    <li><Link to={'/contacto'} className={activo === '/contacto' ? 'textoActivo' : ''}>Contacto</Link></li>
                </ul>
            </div>
        </aside>
    )
}

export default Sidebar;