import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import styles from './Footer.module.css'
function Footer() {
    return(

        <footer className={styles.footer}>
            <ul className={styles.social_list}>
            <li>
                <FaFacebook />
                </li>
            <li>
                <FaLinkedin />
                </li>
            <li>
                <FaInstagram />
                </li>
            </ul>
            <p className={styles.copy_right}><span >SatrCine</span> &copy; 2022</p>
        </footer>
    )
}
export default Footer