import styles from "./HeroBlock.module.css";

const HeroBlock = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heroHeader}>
        If two pizzas are not enough, your team is too big.
      </h1>
      <p className={styles.heroText}>
        Do you have a <b>startup idea</b> that you cant build yourself? Post it
        here and find <b>coders, designers or co-founders</b> that you can share
        your pizza with and build it.
      </p>
      <button className={[styles.menuSpacer, styles.menuButton].join(" ")}>
        Share your idea
      </button>
    </div>
  );
};
export default HeroBlock;
