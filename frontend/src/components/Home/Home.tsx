import React from 'react';
import style from './Home.module.scss';
import Form from '../Form/Form';
const Home = () => {
  return (
    <main className={style.home}>
      <section className={style.hero}>HERO SECTION</section>
      <section className={style.hero_info}>
        <h3>HERO INFO SECTION</h3>
        <img src="./assets/astro_logo.jpg" style={{ width: '40%' }} />
        <Form />
        <div>
          <h4>Heading1</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            cupiditate error facere fugit consequuntur laboriosam explicabo
            omnis consequatur ut exercitationem?
          </p>
        </div>
        <div>
          <h4>Heading2</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            cupiditate error facere fugit consequuntur laboriosam explicabo
            omnis consequatur ut exercitationem?
          </p>
        </div>
        <div>
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
