import CartContext from "../context/CartContext"
import { useContext, useEffect, useState } from "react"
import { Col, Row, Button, Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { db } from "../firebase/config"

const Cart = () => {

    const { cart, removeItem, resumen, setCart } = useContext(CartContext)
    const [resumenFinal, setResumenFinal] = useState([])
    const [estado, setEstado] = useState(false)
    const [nameUser, setNameUser] = useState()
    const [lastName, setLastName] = useState()
    const [numberPhone, setNumberPhone] = useState()
    const [email, setEmail] = useState()

    const getName = (e) => {
        // console.log(e.target.value)
        setNameUser(e.target.value)
    }
    const getLastName = (e) => {
        // console.log(e.target.value)
        setLastName(e.target.value)
    }
    const getNumberPhone = (e) => {
        // console.log(e.target.value)
        setNumberPhone(e.target.value)
    }
    const getEmail = (e) => {
        // console.log(e.target.value)
        setEmail(e.target.value)
    }

    const terminarCompra = () => {
        let [{ id, price, image, description, }] = resumen;
        const resumenFin = [{ id, price, image, description, nameUser, lastName, numberPhone, email }]
        setResumenFinal(resumenFin)
        setEstado(true)
        setCart([])
    }

    const subirData = async (e) => {
        if (estado == true) {
            try {
                await addDoc(collection(db, 'compra'), {
                    ...resumenFinal
                })
            } catch (e) {
                console.log(e)
            }
        } else {
            console.log(resumenFinal)
        }
    }

    useEffect(() => {
        subirData()
    }, [estado])

    // console.log(cart, 'Cart')

    return (
        <>
            <Container fluid className="containerCart">
                <Row className="rowCheckout">
                    <Col className="colItemsCheckout">
                        {
                            cart.length === 0 ?
                                <div>
                                    No hay productos en tu carrito
                                    <Link to={`/cursos`}>Ir a comprar</Link>
                                </div>
                                :
                                cart.map((item) => (
                                    <>
                                        <Row className="rowCheckoutItems">
                                            <Col className="columnItemCart">
                                                <Row className="rowItemCart" key={item.id}>
                                                    <Col><img className="imageProductCart" src={item.image} alt='' /></Col>
                                                    <Col><h2 className="itemDescriptionCheckout">{item.description}</h2></Col>
                                                    <Col>Precio: {item.price}</Col>
                                                    <Col>Cantidad: {item.quantity}</Col>
                                                    <Col><Button onClick={() => removeItem(item.id)}>Eliminar</Button></Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </>
                                ))
                        }
                    </Col>
                    <Col className="columnUserDetail">
                        <Row className="userDetail">
                            <label for="Name">Nombre</label>
                            <input type="text" id="Name" value={nameUser} onChange={getName} placeholder="Ingresa tu nombre" />
                            <label for="Lastname">Apellido</label>
                            <input type="text" id="Lastname" value={lastName} onChange={getLastName} placeholder="Ingresa tu Apellido" />
                            <label for="PhoneNumber">Teléfono</label>
                            <input type="tel" id="PhoneNumber" value={numberPhone} onChange={getNumberPhone} placeholder="Ingresa tu número telefónico" />
                            <label for="Email">Email</label>
                            <input type="email" id="Email" value={email} onChange={getEmail} placeholder="Ingresa tu Email" />
                        </Row>
                        <Row className="rowEndCheckout">
                            <Col className="colBtnCheckout">
                                <Button onClick={terminarCompra}>Finalizar compra</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Cart