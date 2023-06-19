import { Navbar, Sidebar } from "../../componentes/indexComponentes";

const Nosotros = () => {
    document.title = 'PetStore ● Nosotros';
    return(
        <>
        <Navbar />
        <Sidebar />
        <div className="container">
            <h1>Nosotros</h1>
        </div>
        </>
    )
}

export default Nosotros;