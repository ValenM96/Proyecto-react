import "./Navbar.css"
import CartWidget from "../CartWidget/CartWidget.jsx"

const Navbar = () => {
return (
    <nav className="navBar">
        <div className="navBar-Logo">
            <p>Futuro Logo</p>
        </div>
        <div className="navBar-Links">
            <ul>
                <li>
                    <a href="#">Inicio</a>
                </li>
                <li>
                    <a href="#">Productos</a>
                </li>
                <li>
                    <a href="#">Sobre Nosotros</a>
                </li>
                <li>
                    <a href="#">Contacto</a>
                </li>
            </ul>
        </div>
        <div>
            <CartWidget/>
        </div>
    </nav>
)
}

export default Navbar;