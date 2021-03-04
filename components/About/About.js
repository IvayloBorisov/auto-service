import styles from "./About.module.css";

const About = () => {
  return (
    <div id="about" className={styles.container}>
        {/* <p className={styles.contact}>0878883914</p> */}
      <h1 className={styles["title-container"]}>
        Автосервиз
        <p className={styles.title}>
          <span className={styles.text}>CUSTOM</span>GARAGE
        </p>
      </h1>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <p>
            Основен акцент в дейността на автосервизa е качественото и бързо
            обслужване. Сервизът работи с широк сегмент от масла, акумулатори и
            резервни части с едни от най-добрите цени на българския пазар.
          </p>

          <h3>Основните ни предимства са:</h3>
          <ul className={styles['list-container']}>
            <li>коректност</li>
            <li>бързина и сигурност</li>
            <li>персонално отношение</li>
            <li>добра организация</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
