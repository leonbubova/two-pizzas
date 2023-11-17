import styles from "./Idea.module.css";
import { useGetIdeas } from "../../hooks/useGetIdeas";

const Idea = ({ idea: { title, content, upvotes, comments } }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>{title}</h2>
      <div className={styles.body}>{content}</div>
      <div className={styles.footer}>
        <div className={styles.footerLeft}>
          <div className={styles.icon}></div>
          <div className={styles.username}>username</div>
          <div>&bull; 12 comments</div>
          <div>&bull; {upvotes} likes</div>
        </div>
        <div className={styles.footerRight}>+1</div>
      </div>
    </div>
  );
};
export default Idea;
