import styles from "./form.module.css";
import SearchBar from "../search-container/search-bar/search-bar";
import SearchButton from "../search-container/search-button/search-button";

export default function Form({ value, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <SearchBar value={value} onChange={onChange} />
      <SearchButton />
    </form>
  );
}
