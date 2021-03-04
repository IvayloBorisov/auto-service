import styles from './Header.module.css';
import {Logo, Navbar} from '../index';

const Header = () => {

    return (
        <header className={styles.container}>
            <div className={styles.wrapper}>
             <Logo />
             <Navbar />
            </div>
        </header>
    )
}

export default Header;