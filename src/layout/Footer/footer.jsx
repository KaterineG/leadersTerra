import React from 'react';
import { Link } from 'react-router-dom';
import './footer.sass';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__wrapper">
          <div className="footer__content">
            <div className="footer__logo"></div>
            <div className="footer__text">
              Некоммерческий клуб предпринимателей, объединённых идеей достичь всеобщего
              благополучия.
            </div>
          </div>
          <div className="footer__contacts">
            <p className="footer__title">Партнерам</p>
            <ul className="footer__list">
              <li className="footer__item mark">
                <Link className="footer__link" to="mailto:info@club-terra.ru">
                  info@club-terra.ru
                </Link>
              </li>
              <li className="footer__item mark">
                115487, Россия, Москва, Пресненская наб. 12 Башня "Федерация"
              </li>
              <li className="footer__item mark">
                <a className="footer__link" href="http://club-terra.ru" target="blank">
                  club-terra.ru
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__nav">
            <p className="footer__title">Меню</p>
            <nav>
              <ul className="footer__list listgap">
                <li className="footer__item ">
                  <Link className="footer__link" to="/">
                    Главная
                  </Link>
                </li>
                <li className="footer__item ">
                  <Link className="footer__link" to="/#">
                    Путеводитель по Терре
                  </Link>
                </li>
                <li className="footer__item ">
                  <Link className="footer__link" to="/Mentors">
                    Наставники
                  </Link>
                </li>
                <li className="footer__item ">
                  <Link className="footer__link" to="/#Reviews">
                    Кейсы учеников
                  </Link>
                </li>
                <li className="footer__item ">
                  <Link className="footer__link" to="/Magazine">
                    Terra Journal
                  </Link>
                </li>
                <li className="footer__item ">
                  <Link className="footer__link" to="/#Shedule">
                    Мероприятия
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="footer__linklist">
            <ul className="linksgap">
              <li className="footer__item ">
                <Link className="footer__link" to="/">
                  Политика обработки&nbsp;персональных&nbsp;данных
                </Link>
              </li>
              <li className="footer__item ">
                <Link className="footer__link" to="/">
                  Соглашение о неразглашении&nbsp;информации
                </Link>
              </li>
              <li className="footer__item ">
                <Link className="footer__link" to="/">
                  Приказ о Политике ПД
                </Link>
              </li>
              <li className="footer__item ">
                <Link className="footer__link" to="/">
                  Отписаться от рассылок
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <span>© 2023 “TERRA – Некоммерческий клуб предпринимателей”</span>
      </div>
    </footer>
  );
}

export default Footer;
