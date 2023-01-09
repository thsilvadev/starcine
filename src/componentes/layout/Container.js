import styles from './Container.module.css'


function Containeer(props) {
    return (
<div className={`${styles.containeer} ${styles[props.customClass]}`} >{props.children}</div>
    )
}
export default Containeer