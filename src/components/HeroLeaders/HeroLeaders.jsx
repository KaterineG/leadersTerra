import './HeroLeaders.sass';

export const HeroLeaders = () => {
  return (
    <section className="Hero" id="Hero">
      <div className="container">
        <div className="hero__wrapper">
          <h1 className="hero__header">Лидеры терры</h1>
          <button className="hero__button">вступить в лидеры</button>
          <div className="hero__action">
            <ul>
              <li>
                <button className="hero__btn">школа бизнес-управления</button>
              </li>
              <li>
                <button className="hero__btn">журнал</button>
              </li>

              <li>
                <button className="hero__btn">наставничество</button>
              </li>

              <li>
                <button className="hero__btn">офлайн школы</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroLeaders;
