import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.text}>C</span>G
      </h1>
    </div>
  );
};

export default Logo;
