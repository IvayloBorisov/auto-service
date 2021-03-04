import Image from 'next/image';
import styles from './ServiceComponent.module.css';

const ServiceComponent = ({title, src, description}) => {

    return (
        <div className={styles.container}>
            <Image src={src} width={250} height={250} />
            <div className={styles.content}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ServiceComponent;