import styles from "./order.module.css";

const Order = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Orders</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Product</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <img
                  src="./profile.png"
                  alt="product"
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                uki hunter
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Pending
              </span>
            </td>
            <td>iphone 11 pro</td>
            <td>400$</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Order;
