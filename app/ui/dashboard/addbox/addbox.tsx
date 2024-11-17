import styles from "./addbox.module.css";

export default function AddBox() {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <span className={styles.plus}>+</span>
      </div>
      <h2 className={styles.title}>No components created yet</h2>
      <p className={styles.subtitle}>
        Simply create your first component. <br />
        Just click on the button
      </p>
      <button className={styles.button}>
        <span className={styles.buttonIcon}>+</span> Add component
      </button>
    </div>
  );
}
