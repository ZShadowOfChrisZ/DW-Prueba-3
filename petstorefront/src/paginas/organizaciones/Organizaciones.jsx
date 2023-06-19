import { Navbar, Sidebar } from "../../componentes/indexComponentes";

const Organizaciones = () => {
    document.title = 'PetStore ● Organizaciones';
    return(
        <>
        <Navbar />
        <Sidebar />
        <div className="container">
            <h1>Organizaciones</h1>
        </div>
        </>
    )
}

export default Organizaciones;