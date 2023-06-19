import { Navbar, Sidebar } from "../../componentes/indexComponentes";

const Inicio = () => {
    document.title = 'PetStore ● Inicio';
    return(
        <>
        <Navbar />
        <Sidebar />
        <div className="container">
            <h1>Inicio</h1>
        </div>
        </>
    )
}

export default Inicio;