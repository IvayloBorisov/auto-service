import Image from 'next/image';
import {useState, useEffect} from 'react';
import {heroImage} from '../../helper/heroImage';
import styles from './Hero.module.css';

const Hero = () => {

    const [index, setIndex] = useState(0);
    const [imagePath, setImagePath] = useState(heroImage[index]);

    useEffect(() => {

        if(index === heroImage.length) {
            setIndex(0)
        }
        const interval = setInterval(() => {

          setIndex(index + 1)
          setImagePath(heroImage[index])
          
      }, 4000);

      return () => clearInterval(interval);

    }, [index]);

    return (
        <section className={styles.container} >
            <Image
             className={styles.image}
             src={`${imagePath}`}
             width={1000}
             height={800}
             objectFit="fill" 
             objectPosition="center"/>
        </section>
    )
}

export default Hero;