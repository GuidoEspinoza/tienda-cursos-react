import Container from 'react-bootstrap/Container'
import imageCheems from '../assets/img/Cheems.png'

const ContentHome = () => {
    return (
        <Container fluid="md" className='containerContent mt-5'>
            <h2>¡Saludos, Developer!</h2>
            <h3>Bienvenido a mis cursos</h3>
            <img className='imageHome' src={imageCheems} alt="" />
        </Container>
    )
}

export default ContentHome