import { Navbar, Sidebar } from "../../componentes/indexComponentes";

const Tienda = () => {
    document.title = 'PetStore ● Tienda';
    return(
        <>
        <Navbar />
        <Sidebar />
        <div className="container">
            <h1>Tienda</h1>
        </div>
        </>
    )
}

export default Tienda;