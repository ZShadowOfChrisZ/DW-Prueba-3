import { Navbar, Sidebar, Carrusel } from "../../componentes/indexComponentes";

const Inicio = () => {
    document.title = 'PetStore ● Inicio';
    return(
        <>
        <Navbar />
        <Sidebar />
        <Carrusel />
        </>
    )
}

export default Inicio;