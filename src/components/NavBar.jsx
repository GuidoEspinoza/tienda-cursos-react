import CartWidget from "./CartWidget"

const NavBar = () => {
    return (
        <div className="navbar">
            <CartWidget />
            <h3>Cursos Guido Espinoza</h3>
            <div className="menuNavBar">
                <a href="/">Home</a>
                <a href="/">HTML</a>
                <a href="/">CSS</a>
                <a href="/">JavaScript</a>
                <a href="/">React</a>
                <a href="/">Git</a>
            </div>
        </div>
    )
}

export default NavBar