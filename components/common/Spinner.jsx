import styles from "../../styles/Spinner.module.scss";

const Spinner = () => {
  return (
    <div className={styles["Spinner"]}>
      <div className={styles["spinner-dot"]} />
      <div className={styles["spinner-dot"]} />
      <div className={styles["spinner-dot"]} />
    </div>
  );
};

export default Spinner;
