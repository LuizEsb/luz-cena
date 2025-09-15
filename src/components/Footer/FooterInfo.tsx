import styles from "./Footer.module.css";

const FooterInfo = () => {
  return (
    <div className={styles.funcionamento}>
      <h4 className={styles.titulo}>Funcionamento</h4>
      <span>Segunda a Sexta - 16h àas 00h</span>
      <span>contato@luzecena.com</span>
      <span>0300 123 720</span>
    </div>
  );
};

export default FooterInfo;
