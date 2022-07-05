import styles from "./Idea.module.css";

const Idea = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Party Vote</h2>
      <div className={styles.body}>
        An app that would help you and a small group of friends research issues
        together before an election and then make plans to vote together. Once
        you vote, you got get a beer.
      </div>
      <div className={styles.footer}>
        <div className={styles.footerLeft}>
          <div className={styles.icon}></div>
          <div className={styles.username}>username</div>
          <div>&bull; 12 comments</div>
          <div>&bull; 25 likes</div>
        </div>
        <div className={styles.footerRight}>+1</div>
      </div>
    </div>
  );
};
export default Idea;
