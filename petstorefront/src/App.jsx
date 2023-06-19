import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Contacto, Inicio, Nosotros, Organizaciones, Tienda } from './paginas/indexPagina';

const App = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" Component={Inicio}></Route>
                <Route path="/nosotros" Component={Nosotros}></Route>
                <Route path="/tienda" Component={Tienda}></Route>
                <Route path="/organizaciones" Component={Organizaciones}></Route>
                <Route path="/contacto" Component={Contacto}></Route>
            </Routes>
        </Router>
    )
}

export default App;