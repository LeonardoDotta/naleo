import {Link} from 'react-router-dom'

import Container from './Container'

import styles from './Navbar.module.css'
import logo from '../../img/img.jpg'

function Navbar() {
  return (
  <nav className={styles.navbar}>
    <Container> 
    <Link to="/">
      <img  style={{height: '80px'}} src={logo} alt="NALEO" />
    </Link>
    <ul className={styles.list}>
      <li className={styles.item}> <Link to="/">Home</Link></li>
      <li className={styles.item}> <Link to="/convidados">Convidados</Link></li>
      <li className={styles.item}> <Link to="/presentes">Presentes</Link></li>
      <li className={styles.item}> <Link to="/sobre nós">SobreNós</Link></li>
      <li className={styles.item}> <Link to="/newproject">Novo projeto</Link></li>
    </ul>
    </Container>
  </nav>
)
}

export default Navbar