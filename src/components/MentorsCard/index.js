import React, { useEffect } from 'react'

import image1 from '../Mentors/assets/1.png';
import image2 from '../Mentors/assets/2.jpg';
import image3 from '../Mentors/assets/3.jpg';

import './MentorsCard.sass';



const MentorsCard = ({ items }) => {
  if (items.length != 0) {

    return (
      <div>
        <div className="mentorsCard">
          <div class="mentorsCard__item"><img src={image1} />
            <p className="mentorsCard__title">{items[0].name}</p>
            <p className="mentorsCard__desc1" > ГКУ - ученик основателя клуба Терра</p>
            <p className="mentorsCard__desc2">{items[0].competencies.map((el, index) => <span>{el}</span>)}</p>
          </div>

          <div class="mentorsCard__item"><img src={image2} />
            <p className="mentorsCard__title">{items[1].name}</p>
            <p className="mentorsCard__desc1">ГКУ - ученик основателя клуба Терра</p>
            <p className="mentorsCard__desc2">{items[1].competencies.map((el, index) => <span>{el}</span>)}</p>
            <p className="mentorsCard__desc3">{items[1].experience}</p>
          </div>

          <div class="mentorsCard__item"><img src={image3} />
            <p className="mentorsCard__title">{items[2].name}</p>
            <p className="mentorsCard__desc1">ГКУ - ученик основателя клуба Терра</p>
            <p className="mentorsCard__desc2">{items[3].competencies.map((el, index) => <span>{el}</span>)}</p>
            <p className="mentorsCard__desc3">{items[3].experience}</p>
          </div>


          <div class="mentorsCard__item"><img src={image1} />
            <p className="mentorsCard__title">{items[3].name}</p>
            <p className="mentorsCard__desc1">ГКУ - ученик основателя клуба Терра</p>
            <p className="mentorsCard__desc2">{items[3].competencies.map((el, index) => <span>{el}</span>)}</p>
            <p className="mentorsCard__desc3">{items[3].experience}</p>
          </div>


          <div class="mentorsCard__item"><img src={image2} />
            <p className="mentorsCard__title">{items[4].name}</p>
            <p className="mentorsCard__desc1">ГКУ - ученик основателя клуба Терра</p>
            <p className="mentorsCard__desc2">{items[4].competencies.map((el, index) => <span>{el}</span>)}</p>
            <p className="mentorsCard__desc3">{items[4].experience}</p>
          </div>


          <div class="mentorsCard__item"><img src={image3} />
            <p className="mentorsCard__title">{items[5].name}</p>
            <p className="mentorsCard__desc1">ГКУ - ученик основателя клуба Терра</p>
            <p className="mentorsCard__desc2">{items[5].competencies.map((el, index) => <span>{el}</span>)}</p>
            <p className="mentorsCard__desc3">{items[5].experience}</p>
          </div>

        </div>

      </div >

    )
  } else return <>Нет данных</>
}

export default MentorsCard;