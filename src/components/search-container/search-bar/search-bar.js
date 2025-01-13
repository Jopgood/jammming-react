import styles from "./SearchBar.module.css";

export default function SearchBar({ onChange, value }) {
  return (
    <input
      value={value}
      type="text"
      onChange={(e) => onChange(e.target.value)}
      className={styles["search-bar"]}
    />
  );
}
