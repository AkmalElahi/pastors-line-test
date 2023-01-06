import styles from "./Button.module.scss";

const Button = ({text, onClick, type}) => <button onClick={onClick} className={`${styles.mainButton} ${styles[type]}`}>{text}</button>;

export default Button;
