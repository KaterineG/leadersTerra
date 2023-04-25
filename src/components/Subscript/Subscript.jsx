import React from 'react';
import styles from './Subscript.module.sass';
import { Link } from 'react-router-dom';

const Subscript = () => {
  return (
    <section className={styles.sub}>
      <div className={styles.sub__wrapper}>
        <ul className={styles.sub__list}>
          <li>
            <Link className={[styles.sub__link, styles.pict1]}></Link>
          </li>
          <li>
            <Link className={styles.sub__link}></Link>
          </li>
          <li>
            <Link className={styles.sub__link}></Link>
          </li>
          <li>
            <Link className={styles.sub__link}></Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Subscript;
