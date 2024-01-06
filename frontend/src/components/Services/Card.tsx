import React, { FC } from 'react';
import style from './Card.module.scss';

interface Item {
  id: number;
  img_link: string;
  service_heading: string;
  service_description: string;
  service_button_name: string;
  service_button_action?: () => void;
}

interface CardProps {
  items: Item;
  open: () => void;
}

const Card: FC<CardProps> = ({ items, open }) => {
  return (
    <div className={style.card_wrapper}>
      <img src={items.img_link} />
      <p className={style.service_heading}>{items.service_heading}</p>
      <p className={style.service_description}>{items.service_description}</p>
      <button onClick={open}>{items.service_button_name}</button>
    </div>
  );
};

export default Card;
