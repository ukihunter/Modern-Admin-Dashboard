import styles from "./card.module.css";
import { FaPeopleRoof } from "react-icons/fa6";

const Card = () => {
  return (
    <div className={styles.container}>
      <FaPeopleRoof size={24} />
      <div className={styles.texts}>
        <span className={styles.title}>Total Users</span>
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
