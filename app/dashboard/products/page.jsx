import Link from "next/link";
import styles from "../../ui/dashboard/produts/products.module.css";
import Search from "../../ui/dashboard/search/search";
import Pagination from "../../ui/dashboard/pagination/pagination";

const Productpage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for products..." />
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Role</td>
            <td>Created at</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styles.produts}>
              <img
                src="/produts/image.png"
                alt="user image"
                width={40}
                height={40}
                className={styles.prImage}
              />
              <span>I phone 11</span>
            </td>
            <td>this is a iphone </td>
            <td>400$</td>
            <td>2002.07.07</td>
            <td>03</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/">
                  <button className={`${styles.button} ${styles.viwe}`}>
                    View
                  </button>
                </Link>
                <button className={`${styles.button} ${styles.Delete}`}>
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default Productpage;
