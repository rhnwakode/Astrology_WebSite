import React from 'react';
import style from './Services.module.scss';
import Card from './Card';
import Modal from '../Modal/Modal';
import Form from '../Form/Form';
const demo = () => {
  alert('demo fn');
};

const items = [
  {
    id: 1,
    img_link: './assets/astro_logo.jpg',
    service_heading: 'Kundali',
    service_description:
      'A Vaastu consultant can help you create a home or workplace that is in alignment with your goals and aspirations',
    service_button_name: 'CHECK NOW',
    service_button_action: demo,
  },
  {
    id: 2,
    img_link: './assets/astro_logo.jpg',
    service_heading: 'service 1',
    service_description:
      'A Vaastu consultant can help you create a home or workplace that is in alignment with your goals and aspirations',
    service_button_name: 'BOOK NOW',
    service_button_action: demo,
  },
  {
    id: 3,
    img_link: './assets/astro_logo.jpg',
    service_heading: 'service 1',
    service_description:
      'A Vaastu consultant can help you create a home or workplace that is in alignment with your goals and aspirations',
    service_button_name: 'BOOK NOW',
    service_button_action: demo,
  },
  {
    id: 4,
    img_link: './assets/astro_logo.jpg',
    service_heading: 'service 1',
    service_description:
      'A Vaastu consultant can help you create a home or workplace that is in alignment with your goals and aspirations',
    service_button_name: 'BOOK NOW',
    service_button_action: demo,
  },
];

const Services = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const close = () => {
    console.log('set oprn callsed');
    setIsOpen(false);
  };
  const open = () => {
    setIsOpen(true);
  };
  console.log(isOpen);
  return (
    <div className={style.services}>
      <h3>Services</h3>
      <div className={style.card_container}>
        {items.map((item) => (
          <Card key={item.id} items={item} open={open} />
        ))}
      </div>
      {isOpen ? (
        <Modal setClose={close}>
          <Form />
        </Modal>
      ) : null}
    </div>
  );
};

export default Services;
