"use client";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";
import { FaSearch } from "react-icons/fa";
import { IoChatbubblesOutline } from "react-icons/io5";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { MdPublic } from "react-icons/md";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <div className={styles.title}>{pathname.split("/").pop()}</div>
      <div className={styles.menu}>
        <div className={styles.menu}>
          <div className={styles.search}>
            <FaSearch />
            <input
              type="text"
              placeholder="Search......."
              className={styles.input}
            />
          </div>
          <div className={styles.icons}>
            <IoChatbubblesOutline size={20} />
            <MdOutlineNotificationsActive size={20} />
            <MdPublic size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
