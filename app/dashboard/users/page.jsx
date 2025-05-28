import styles from "../../ui/dashboard/users/users.module.css";
import Search from "../../ui/dashboard/search/search";
import Link from "next/link";
import Pagination from "../../ui/dashboard/pagination/pagination";

const UsersPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for user..." />
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created at</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styles.user}>
              <img
                src="/1.gif"
                alt="user image"
                width={40}
                height={40}
                className={styles.userImage}
              />
              <span>UkI hunter</span>
            </td>
            <td>uki@gmail.com</td>
            <td>13.01.2025</td>
            <td>Admin</td>
            <td>Active</td>
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

export default UsersPage;
