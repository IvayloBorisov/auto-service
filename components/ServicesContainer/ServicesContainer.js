import {ServiceComponent} from '../index';
import {servicesImage} from '../../helper/servicesImages';
import styles from './ServicesContainer.module.css';


const Services = () => {

    return(
        <section id="services" className={styles.container}>
            <h2 className={styles.title}>Услуги</h2>
            {servicesImage.map(image => <ServiceComponent key={image.id} {...image} />)}
        </section>
    )
}

export default Services;