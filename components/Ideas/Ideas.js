import styles from "./Ideas.module.css";
import Idea from "./Idea";
import { useGetIdeas } from "../../hooks/useGetIdeas";
import { useState, useEffect } from "react";

const Ideas = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/idea`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div className={styles.container}>
      {data &&
        data.map((idea) => {
          return <Idea key={idea.id} idea={idea} />;
        })}
    </div>
  );
};
export default Ideas;
