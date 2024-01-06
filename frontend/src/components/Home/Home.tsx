import React from 'react';
import style from './Home.module.scss';
const Home = () => {
  return (
    <main className={style.home}>
      <div className={style.heading}>
        <h3 className={style.hero} style={{ textAlign: 'center' }}>
          Your Neighbourhood Astrologer
        </h3>
        <img src="./assets/palm.png" />
      </div>

      <section className={style.hero_info}>
        <div id={style.heroImg}>
          <img src="./assets/astro_logo-bg.png" />
        </div>
        {/* <Form /> */}
        <div className={style.content}>
          <h4>Heading1</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            cupiditate error facere fugit consequuntur laboriosam explicabo
            omnis consequatur ut exercitationem?
          </p>
        </div>
        <div className={style.content}>
          <h4>Heading2</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            cupiditate error facere fugit consequuntur laboriosam explicabo
            omnis consequatur ut exercitationem?
          </p>
        </div>
        <div className={style.content}>
          <h4>Heading3</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            cupiditate error facere fugit consequuntur laboriosam explicabo
            omnis consequatur ut exercitationem?
          </p>
        </div>
      </section>
    </main>
  );
};

export default Home;
