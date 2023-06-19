import { Navbar, Sidebar } from "../../componentes/indexComponentes";

const Contacto = () => {
    document.title = 'PetStore ● Contacto';
    return(
        <>
        <Navbar />
        <Sidebar />
        <div className="container">
            <h1>Contacto</h1>
        </div>
        </>
    )
}

export default Contacto;