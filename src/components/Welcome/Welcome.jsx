import css from './Welcome.module.css';

const Welcome = ({ text }) => {
  return (
    <section>
      <div className={css.hero}>
        <h1 className={css.welcomeText}>{text}</h1>
      </div>
    </section>
  );
};

export default Welcome;
