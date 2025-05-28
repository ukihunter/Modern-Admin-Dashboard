import styles from "./search.module.css";
import { FaSearch } from "react-icons/fa";

const Search = ({ placeholder }) => {
  return (
    <div className={styles.container}>
      <FaSearch size={20} />
      <input type="text" placeholder={placeholder} className={styles.input} />
    </div>
  );
};

export default Search;
