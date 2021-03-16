import dynamic from 'next/dynamic';
import styles from './Footer.module.css';

const MapComponent = dynamic(() => import("../MapComponent/MapComponent"));

const Footer = () => {

    return (
        <footer className={styles.container}>
            <MapComponent />
        </footer>
    )
}

export default Footer;