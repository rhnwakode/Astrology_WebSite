import React from 'react';
import style from './Card.module.scss';
const Card = ({ items }) => {
  return (
    <div className={style.card_wrapper}>
      <img src={items.img_link} />
      <p className={style.service_heading}>{items.service_heading}</p>
      <p className={style.service_description}>{items.service_description}</p>
      <button onClick={items.service_button_action}>
        {items.service_button_name}
      </button>
    </div>
  );
};

export default Card;
