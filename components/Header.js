import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerLogo}>Two Pizzas.</div>
      <div className={styles.menu}>
        <div>What is Two Pizzas?</div>
        <button className={[styles.menuSpacer, styles.menuButton].join(" ")}>
          Share your idea
        </button>
      </div>
    </div>
  );
};
export default Header;
