import {Hero, About, Services} from '../index';
import styles from './Main.module.css';

const Main = () => {

    return (
        <main className={styles.container}>
          <Hero />
          <About />
          <Services />
        </main>
    )
}

export default Main;