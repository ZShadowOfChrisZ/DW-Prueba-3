import PetStoreLogo from '../../archivos/img/PetStoreLogo.png';

const Navbar = () => {
    return(
        <header>
            <nav className='navbar navbar-light bg-light'>
                <a className="navbar-brand m-auto" href="/">
                    <img src={PetStoreLogo} width="100" height="50" alt="Logo de PetStore" />
                </a>
            </nav>
        </header>
    )
}

export default Navbar;