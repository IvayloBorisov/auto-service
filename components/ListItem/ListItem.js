import Link from "next/link";
import styles from "./ListItem.module.css";

const ListItem = ({ title, id, href }) => {
  const nextLink = (
    <Link href={href}>
      <a className={styles.anchor}>{title}</a>
    </Link>
  );

  return (
    <li className={styles.container}>
      {href ? (
        nextLink
      ) : (
        <a href={`#${id}`} className={styles.anchor}>
          {title}
        </a>
      )}
    </li>
  );
};

export default ListItem;
