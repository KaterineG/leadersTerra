import styles from './HeroLeaders.module.sass';

export const HeroLeaders = () => {
  return (
    <section className={styles.hero} id="Hero">
      <div className={styles.container}>
        <div className={styles.hero__wrapper}>
          <h1 className={styles.hero__header}>Лидеры терры</h1>
          <button className={styles.hero__button}>вступить в лидеры</button>
          <div className={styles.hero__about}>
            <ul className={styles.hero__info}>
              <li className={styles.hero__listitem}>
                <span>300</span>
                <br />
                млн. в год средняя
                <br /> выручка наставников
              </li>
              <li className={styles.hero__listitem}>
                <span>15000</span> <br />
                участников
              </li>
              <li className={styles.hero__listitem}>
                <span>300</span>
                <br />
                бизнес-наставников
              </li>
              <li className={styles.hero__listitem}>
                <span>594</span>
                <br />
                бизнес-мероприятий
                <br /> в год
              </li>
            </ul>
          </div>
          <div className={styles.hero__action}>
            <ul className={styles.hero__list}>
              <li>
                <button className={styles.hero__btn}>школа бизнес-управления</button>
              </li>
              <li>
                <button className={styles.hero__btn}>журнал</button>
              </li>

              <li>
                <button className={styles.hero__btn}>наставничество</button>
              </li>

              <li>
                <button className={styles.hero__btn}>офлайн школы</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroLeaders;
