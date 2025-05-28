import styles from "./card.module.css";

import { FaPeoplePulling } from "react-icons/fa6";

const Card = () => {
  return (
    <div className={styles.container}>
      <FaPeoplePulling />
      <div className={styles.texts}>
        <span className={styles.title}>Total Products</span>
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
