import { useState } from "react";
import { navLinks } from "../../helper/navigation";
import { ListItem } from "../index";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [className, setClassName] = useState(false);

  const handleClick = () => {
    setClassName(!className);
  };

  return (
    <div className={styles.container}>
      <button
        onClick={handleClick}
        className={`${styles.hamburger} ${
          styles[className ? "visible" : null]
        }`}
      >
        <div className={styles.bar}></div>
      </button>
      <nav>
        <ul
          className={`${styles["links-container"]} ${
            styles[className ? "visible" : null]
          }`}
        >
          {navLinks.map((link) => (
            <ListItem key={link.id} {...link} />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
