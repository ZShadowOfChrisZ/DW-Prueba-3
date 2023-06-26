import { Link } from 'react-router-dom';
import imagen1 from '../../archivos/img/carrusel/carrusel-1.jpg';
import imagen2 from '../../archivos/img/carrusel/carrusel-2.jpg';
import imagen3 from '../../archivos/img/carrusel/carrusel-3.jpg';
import imagen4 from '../../archivos/img/carrusel/carrusel-4.jpg';
import imagen5 from '../../archivos/img/carrusel/carrusel-5.jpg';
import './Carrusel.css';

const Carrusel = () => {
    return(
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <Link to={'/'}>
                        <img className="d-block w-100" src={imagen1} alt="First slide" />
                        <div className="textoCarrusel centrador h-100">
                            <h1 className='text-light'>Tienda de Mascotas</h1>
                        </div>
                    </Link>
                </div>
                <div className="carousel-item">
                    <Link to={'/nosotros'}>
                        <img className="d-block w-100" src={imagen2} alt="Second slide" />
                        <div className="textoCarrusel centrador h-100">
                            <h1 className='text-light'>Tienda de Mascotas</h1>
                        </div>
                    </Link>
                </div>
                <div className="carousel-item">
                    <Link to={'/tienda'}>
                        <img className="d-block w-100" src={imagen3} alt="Third slide" />
                        <div className="textoCarrusel centrador h-100">
                            <h1 className='text-light'>Tienda de Mascotas</h1>
                        </div>
                    </Link>
                </div>
                <div className="carousel-item">
                    <Link to={'/organizaciones'}>
                        <img className="d-block w-100" src={imagen4} alt="Third slide" />
                        <div className="textoCarrusel centrador h-100">
                            <h1 className='text-light'>Tienda de Mascotas</h1>
                        </div>
                    </Link>
                </div>
                <div className="carousel-item">
                    <Link to={'/contacto'}>
                        <img className="d-block w-100" src={imagen5} alt="Third slide" />
                        <div className="textoCarrusel centrador h-100">
                            <h1 className='text-light'>Tienda de Mascotas</h1>
                        </div>
                    </Link>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}

export default Carrusel