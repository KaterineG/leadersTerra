import React from 'react';
import styles from './About.module.sass';

function About() {
  return (
    <section className={styles.about}>
      <h2 className={styles.about__header}>
        <span>Terra</span> делает
        <br /> миллионеров
      </h2>
      <div className={styles.content}>
        <ul className={styles.about__list}>
          <li className={styles.about__item}>
            <p className={styles.about__itemp}>
              Объединяем
              <br /> предпринимателей
            </p>
          </li>
          <li className={styles.about__item}>
            <p className={styles.about__itemp}>
              Меняем мир
              <br /> к лучшему
            </p>
          </li>
          <li className={styles.about__item}>
            <p className={styles.about__itemp}>
              Программа
              <br /> наставничества
            </p>
          </li>
          <li className={styles.about__item}>
            <p className={styles.about__itemp}>
              Ускорение развития
              <br /> бизнеса
            </p>
          </li>
        </ul>
        <div className={styles.about__action}>
          <button className={styles.about__btn}>Вступить в лидеры</button>
        </div>
      </div>
    </section>
  );
}

export default About;
