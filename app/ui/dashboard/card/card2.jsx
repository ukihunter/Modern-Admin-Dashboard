import styles from "./card.module.css";
import { MdOutlineNaturePeople } from "react-icons/md";

const Card = () => {
  return (
    <div className={styles.container}>
      <MdOutlineNaturePeople />
      <div className={styles.texts}>
        <span className={styles.title}>Total Orders</span>
        <span className={styles.number}>10</span>
        <span className={styles.detils}>
          <span>
            <span className={styles.positive}>12%</span>more than last month
          </span>
        </span>
      </div>
    </div>
  );
};

export default Card;
