import React from 'react';
import style from './Services.module.scss';
import Card from './Card';

const demo = () => {
  alert('demo fn');
};

const items = [
  {
    img_link: './assets/astro_logo.jpg',
    service_heading: 'service 1',
    service_description:
      'A Vaastu consultant can help you create a home or workplace that is in alignment with your goals and aspirations',
    service_button_name: 'BOOK NOW',
    service_button_action: demo,
  },
  {
    img_link: './assets/astro_logo.jpg',
    service_heading: 'service 1',
    service_description:
      'A Vaastu consultant can help you create a home or workplace that is in alignment with your goals and aspirations',
    service_button_name: 'BOOK NOW',
    service_button_action: demo,
  },
  {
    img_link: './assets/astro_logo.jpg',
    service_heading: 'service 1',
    service_description:
      'A Vaastu consultant can help you create a home or workplace that is in alignment with your goals and aspirations',
    service_button_name: 'BOOK NOW',
    service_button_action: demo,
  },
  {
    img_link: './assets/astro_logo.jpg',
    service_heading: 'service 1',
    service_description:
      'A Vaastu consultant can help you create a home or workplace that is in alignment with your goals and aspirations',
    service_button_name: 'BOOK NOW',
    service_button_action: demo,
  },
];

const Services = () => {
  return (
    <div className={style.services}>
      <h3>Services</h3>
      <div className={style.card_container}>
        {items.map((item) => (
          <Card items={item} />
        ))}
      </div>
    </div>
  );
};

export default Services;
