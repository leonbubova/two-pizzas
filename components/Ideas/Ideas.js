import styles from "./Ideas.module.css";
import Idea from "./Idea";

const Ideas = () => {
  return (
    <div className={styles.container}>
      <Idea />
      <Idea />
      <Idea />
    </div>
  );
};
export default Ideas;
