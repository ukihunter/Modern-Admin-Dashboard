import Card from "../ui/dashboard/card/card";
import Card2 from "../ui/dashboard/card/card2";
import Card1 from "../ui/dashboard/card/card1";
import Rightbar from "../ui/dashboard/rightbar/rightbar";
import Order from "../ui/dashboard/order/order";
import Chart from "../ui/dashboard/chart/chart";
import styles from "../ui/dashboard/dashboard.module.css";
const Dasboardpage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card />
          <Card1 />
          <Card2 />
        </div>
        <Order />
        <Chart />
      </div>
      <div className={styles.side}>
        <Rightbar />
      </div>
    </div>
  );
};

export default Dasboardpage;
