import React from 'react';
import { useState } from 'react';
import './filter.sass';

const Filter = ({ value, oncheckNiche(checked, value) }) => {
  return (
    <section className="filter">
      фильтр
      <ul className="filter__list">
        <p>Ниша</p>
        <li className="filter__item">
          <input
            type="checkbox"
            id="marketpl"
            onChange={() => oncheckNiche(checked, 'Маркетплейсы')}
          />
          <label for="marketpl">Маркетплейсы</label>
        </li>
        <li className="filter__item">
          <input type="checkbox" id="marketing" />
          <label for="marketing">Маркетинг</label>
        </li>
        <li className="filter__item">
          <input type="checkbox" id="school" />
          <label for="school">Онлайн-школы</label>
        </li>
        <li className="filter__item">
          <input type="checkbox" id="sale" />
          <label for="sale">Продажи</label>
        </li>
        <li className="filter__item">
          <input type="checkbox" id="production" />
          <label for="production">Производство</label>
        </li>
        <li className="filter__item">
          <input type="checkbox" id="finance" />
          <label for="finance">Финансы и инвестиции</label>
        </li>
      </ul>
      <ul className="filter__list">
        Опыт
        <li className="filter__item">
          <input type="checkbox" id="attestat" />
          <label for="attestat">Аттестованный наставник</label>
        </li>
      </ul>
      <ul className="filter__list">
        Формат
        <li className="filter__item">
          <input type="checkbox" id="online" />
          <label for="online">Онлайн</label>
        </li>
        <li className="filter__item">
          <input type="checkbox" id="offline" />
          <label for="offline">Офлайн</label>
        </li>
        <li className="filter__item">
          <input type="checkbox" id="onnoff" />
          <label for="onoff">Онлайн/офлайн</label>
        </li>
      </ul>
      <ul className="filter__list">
        Компетенции
        <li className="filter__item">
          <input type="checkbox" id="sistem" />
          <label for="sistem">Построение системного бизнеса</label>
        </li>
        <li className="filter__item">
          <input type="checkbox" id="sales" />
          <label for="sales">Продажи</label>
        </li>
        <li className="filter__item">
          <input type="checkbox" id="invest" />
          <label for="invest">Инвестиции</label>
        </li>
        <li className="filter__item">
          <input type="checkbox" id="analitic" />
          <label for="analitic">Аналитика и учет данных</label>
        </li>
        <li className="filter__item">
          <input type="checkbox" id="discussion" />
          <label for="discussion">Переговоры</label>
        </li>
      </ul>
      <ul className="filter__list">
        Условия
        <li className="filter__item">
          <input type="checkbox" id="all" />
          <label for="all">Беру всех</label>
        </li>
        <li className="filter__item">
          <input type="checkbox" id="beginner" />
          <label for="beginner">Только новичков</label>
        </li>
        <li className="filter__item">
          <input type="checkbox" id="business" />
          <label for="business">Только с бизнесом</label>
        </li>
        <li className="filter__item">
          <input type="checkbox" id="special" />
          <label for="special">Особые условия</label>
        </li>
      </ul>
    </section>
  );
};

export default Filter;
