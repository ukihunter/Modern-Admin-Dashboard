import styles from "./sidebar.module.css";
import { LuLayoutDashboard } from "react-icons/lu";
import { HiOutlineUsers } from "react-icons/hi2";
import { MdProductionQuantityLimits } from "react-icons/md";
import { TbMoneybag } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { IoHelpCircleOutline } from "react-icons/io5";
import { MdOutlineLogout } from "react-icons/md";

import MenuLink from "./menuLink/menuLink"; // Corrected path

const menuItems = [
  {
    title: "pages",
    list: [
      {
        title: "Dasbaord",
        path: "/dashboard",
        icon: <LuLayoutDashboard />,
      },
      {
        title: "User",
        path: "/dashboard/users",
        icon: <HiOutlineUsers />,
      },
      {
        title: "Produt managemnt",
        path: "/dashboard/products",
        icon: <MdProductionQuantityLimits />,
      },
      {
        title: "Orders",
        path: "/dashboard/orders",
        icon: <TbMoneybag />,
      },
    ],
  },
  {
    title: "users",
    list: [
      {
        title: "settings",
        path: "/dashboard/settings",
        icon: <IoSettingsOutline />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <IoHelpCircleOutline />,
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.userpostion}>
        <div className={styles.user}>
          <img
            className={styles.userImage}
            src="/1.gif"
            alt=""
            width="50"
            height="50"
          />

          <div className={styles.userDetils}>
            <span className={styles.username}>UKI</span>
            <span className={styles.userTitle}>Admin</span>
          </div>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <button className={styles.logout}>
        <MdOutlineLogout />
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
