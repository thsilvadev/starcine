import { NavLink } from 'react-router-dom';

import Container from './Container'

import styles from './Navbar.module.css'
import logoo from '../../img/logoo.png'


function Navbar() {
    return(
    <nav className={styles.navbar}>
    <Container>
    
<NavLink to="/"><img src={logoo} alt="cinestar"/></NavLink>
<ul className={styles.list}>
<li className={styles.item}><NavLink to='/'>Home</NavLink> </li>
<li className={styles.item}><NavLink to='/sessoes'>Sessoes</NavLink></li>
<li className={styles.item}><NavLink to='/contato'>Empresa</NavLink></li>
<li className={styles.item}><NavLink to='/novoprojeto'>Novo Projeto</NavLink></li>
</ul>
  
  
  
  
  </Container>
</nav>
    )
}
export default Navbar