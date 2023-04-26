import React, { useEffect, useState } from 'react';

import './Mentors.sass';
import image1 from './assets/1.png';

import image2 from './assets/2.jpg';

import image3 from './assets/3.jpg';

const Mentors = () => {
  const [items, setItems] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [nisha, setNisha] = useState([]);
  const [format, setFormat] = useState([]);
  const [competencies, setCompetencies] = useState([]);
  const [condition, setCondition] = useState([]);
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    fetch('https://64097c6dd16b1f3ed6d3c489.mockapi.io/mentors')
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
      });

    var filtered = items.filter(function (item) {
      let isEqual = false;
      console.log(item);
    });
  }, [isLoading]);

  return (
    <section className="mentors">
      <h2 class="mentors__header ">
        Наставники <span> лидеров терры</span>
      </h2>
      <div class="mentors__wrapper">
        <aside class="mentors__content">
          <section className="filter">
            фильтр
            <ul className="filter__list">
              <p>Ниша</p>
              <li className="filter__item">
                <input
                  type="checkbox"
                  id="marketpl"
                  onChange={(i) => {
                    i.target.checked ? nisha.push('Маркетплейсы') : nisha.pop('Маркетплейсы');
                    setNisha(nisha);
                    setIsLoading(!isLoading);
                  }}
                />

                <label for="marketpl">Маркетплейсы</label>
              </li>
              <li className="filter__item">
                <input
                  type="checkbox"
                  id="marketing"
                  onChange={(i) => {
                    i.target.checked ? nisha.push('Маркетинг') : nisha.pop('Маркетинг');
                    setNisha(nisha);
                    setIsLoading(!isLoading);
                  }}
                />
                <label for="marketing">Маркетинг</label>
              </li>
              <li className="filter__item">
                <input
                  type="checkbox"
                  id="school"
                  onChange={(i) => {
                    i.target.checked ? nisha.push('Онлайн-школы') : nisha.pop('Онлайн-школы');
                    setNisha(nisha);
                    setIsLoading(!isLoading);
                  }}
                />
                <label for="school">Онлайн-школы</label>
              </li>
              <li className="filter__item">
                <input
                  type="checkbox"
                  id="sale"
                  onChange={(i) => {
                    i.target.checked ? nisha.push('Продажи') : nisha.pop('Продажи');
                    setNisha(nisha);
                    setIsLoading(!isLoading);
                  }}
                />
                <label for="sale">Продажи</label>
              </li>
              <li className="filter__item">
                <input
                  type="checkbox"
                  id="production"
                  onChange={(i) => {
                    i.target.checked ? nisha.push('Производство') : nisha.pop('Производство');
                    setNisha(nisha);
                    setIsLoading(!isLoading);
                  }}
                />
                <label for="production">Производство</label>
              </li>
              <li className="filter__item">
                <input
                  type="checkbox"
                  id="finance"
                  onChange={(i) => {
                    i.target.checked
                      ? nisha.push('Финансы и инвестиции')
                      : nisha.pop('Финансы и инвестиции');
                    setNisha(nisha);
                    setIsLoading(!isLoading);
                  }}
                />
                <label for="finance">Финансы и инвестиции</label>
              </li>
            </ul>
            <ul className="filter__list">
              Опыт
              <li className="filter__item">
                <input
                  type="checkbox"
                  id="attestat"
                  onChange={(i) => {
                    i.target.checked ? (experience = 'Аттестованный наставник') : (experience = '');
                    setIsLoading(!isLoading);
                  }}
                />
                <label for="attestat">Аттестованный наставник</label>
              </li>
            </ul>
            <ul className="filter__list">
              Формат
              <li className="filter__item">
                <input
                  type="checkbox"
                  id="online"
                  onChange={(i) => {
                    i.target.checked ? format.push('Онлайн') : format.pop('Онлайн');
                    setFormat(format);
                    setIsLoading(!isLoading);
                  }}
                />
                <label for="online">Онлайн</label>
              </li>
              <li className="filter__item">
                <input
                  type="checkbox"
                  id="offline"
                  onChange={(i) => {
                    i.target.checked ? format.push('Офлайн') : format.pop('Офлайн');
                    setFormat(format);
                    setIsLoading(!isLoading);
                  }}
                />
                <label for="offline">Офлайн</label>
              </li>
              <li className="filter__item">
                <input
                  type="checkbox"
                  id="onnoff"
                  onChange={(i) => {
                    i.target.checked ? format.push('Онлайн/офлайн') : format.pop('Онлайн/офлайн');
                    setFormat(format);
                    setIsLoading(!isLoading);
                  }}
                />
                <label for="onoff">Онлайн/офлайн</label>
              </li>
            </ul>
            <ul className="filter__list">
              Компетенции
              <li className="filter__item">
                <input
                  type="checkbox"
                  id="sistem"
                  onChange={(i) => {
                    i.target.checked
                      ? competencies.push('Построение системного бизнеса')
                      : competencies.pop('Построение системного бизнеса');
                    setCompetencies(competencies);
                    setIsLoading(!isLoading);
                  }}
                />
                <label for="sistem">Построение системного бизнеса</label>
              </li>
              <li className="filter__item">
                <input
                  type="checkbox"
                  id="sales"
                  onChange={(i) => {
                    i.target.checked ? competencies.push('Продажи') : competencies.pop('Продажи');
                    setCompetencies(competencies);

                    setIsLoading(!isLoading);
                  }}
                />
                <label for="sales">Продажи</label>
              </li>
              <li className="filter__item">
                <input
                  type="checkbox"
                  id="invest"
                  onChange={(i) => {
                    i.target.checked
                      ? competencies.push('Инвестиции')
                      : competencies.pop('Инвестиции');
                    setCompetencies(competencies);
                    setIsLoading(!isLoading);
                  }}
                />
                <label for="invest">Инвестиции</label>
              </li>
              <li className="filter__item">
                <input
                  type="checkbox"
                  id="analitic"
                  onChange={(i) => {
                    i.target.checked
                      ? competencies.push('Аналитика и учет данных')
                      : competencies.pop('Аналитика и учет данных');
                    setCompetencies(competencies);

                    setIsLoading(!isLoading);
                  }}
                />
                <label for="analitic">Аналитика и учет данных</label>
              </li>
              <li className="filter__item">
                <input
                  type="checkbox"
                  id="discussion"
                  onChange={(i) => {
                    i.target.checked
                      ? competencies.push('Переговоры')
                      : competencies.pop('Переговоры');
                    setCompetencies(competencies);

                    setIsLoading(!isLoading);
                  }}
                />
                <label for="discussion">Переговоры</label>
              </li>
            </ul>
            <ul className="filter__list">
              Условия
              <li className="filter__item">
                <input
                  type="checkbox"
                  id="all"
                  onChange={(i) => {
                    i.target.checked ? condition.push('Беру всех') : condition.pop('Беру всех');
                    setCondition(condition);

                    setIsLoading(!isLoading);
                  }}
                />
                <label for="all">Беру всех</label>
              </li>
              <li className="filter__item">
                <input
                  type="checkbox"
                  id="beginner"
                  onChange={(i) => {
                    i.target.checked
                      ? condition.push('Только новичков')
                      : condition.pop('Только новичков');
                    setIsLoading(!isLoading);
                  }}
                />
                <label for="beginner">Только новичков</label>
              </li>
              <li className="filter__item">
                <input
                  type="checkbox"
                  id="business"
                  onChange={(i) => {
                    i.target.checked
                      ? condition.push('Только с бизнесом')
                      : condition.pop('Только с бизнесом');
                    setIsLoading(!isLoading);
                  }}
                />
                <label for="business">Только с бизнесом</label>
              </li>
              <li className="filter__item">
                <input
                  type="checkbox"
                  id="special"
                  onChange={(i) => {
                    i.target.checked
                      ? condition.push('Особые условия')
                      : condition.pop('Особые условия');
                    setIsLoading(!isLoading);
                  }}
                />
                <label for="special">Особые условия</label>
              </li>
            </ul>
          </section>
        </aside>
        <div class="mentors__slider">
          <div>
            <div className="mentorsCard">
              {items.map((card, index) => (
                <div class="mentorsCard__item">
                  <img src={image1} />

                  <p className="mentorsCard__title">{card.name}</p>
                  <p className="mentorsCard__desc1"> ГКУ - ученик основателя клуба Терра</p>
                  <p className="mentorsCard__desc2">{card.competencies}</p>
                  <p className="mentorsCard__desc3">{card.experience}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Mentors;
