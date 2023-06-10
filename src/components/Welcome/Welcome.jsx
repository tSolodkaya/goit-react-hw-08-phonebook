import css from './Welcome.module.css';

const Welcome = ({ text }) => {
  return (
    <div className={css.hero}>
      <h1 classNAme={css.welcomeText}>{text}</h1>
    </div>
  );
};

export default Welcome;
