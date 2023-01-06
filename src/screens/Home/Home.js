import { useCallback } from "react";
import { useHistory } from "react-router-dom";

import Button from "../../components/Button/Button";

import styles from "./Home.module.scss";

const Home = () => {
  const history = useHistory();

  const handleClickA = useCallback(() => {
    history.push("/modalA");
  }, [history]);

  const handleClickB = useCallback(() => {
    history.push("/modalB");
  }, [history]);

  return (
    <div className={styles.main}>
      <Button type="btn-a" onClick={handleClickA} text="Button A" />
      <Button type="btn-b" onClick={handleClickB} text="Button B" />
    </div>
  );
};

export default Home;
