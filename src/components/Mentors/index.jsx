import React from 'react';
import './Mentors.sass';
import Filters from '../Filter';
import MentorsCard from '../MentorsCard';
import { useEffect, useState } from 'react';

const Mentors = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [niche, setNiche] = useState('');
  const [format, setFormat] = useState('');
  const [condition, setCondition] = useState('');
  const [experience, setExperience] = useState('');
  const [checked, setChecked] = useState(true);
  function oncheckNiche(checked, value) {
    setChecked(!checked);
    console.log(checked, 'галочка', value);
  }
  useEffect(() => {
    setIsLoading(true);

    fetch('https://64097c6dd16b1f3ed6d3c489.mockapi.io/mentors')
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [niche]);

  console.log(niche, 'иша');

  return (
    <section className="mentors">
      <h2 class="mentors__header ">
        Наставники <span> лидеров терры</span>
      </h2>
      <div class="mentors__wrapper">
        <aside class="mentors__content">
          <Filters value={niche} oncheckNiche={(checked, value) => oncheckNiche(checked, value)} />
        </aside>
        <div class="mentors__slider">
          <MentorsCard items={items} />
        </div>
      </div>
    </section>
  );
};
export default Mentors;
