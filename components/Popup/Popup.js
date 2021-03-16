import { Popup } from "react-map-gl";
import styles from "./Popup.module.css";

const PopupComponent = () => {
  return (

    <Popup
      className={styles.popup}
      closeButton={false}
      latitude={42.637801}
      longitude={23.3870729}
    >
      <div className={styles.content}>
        <p>ул. „Жечо Гюмюшев“ 353, 1712 ж.к. Младост 3, София</p>
      </div>
    </Popup>
  );
};

export default PopupComponent;
