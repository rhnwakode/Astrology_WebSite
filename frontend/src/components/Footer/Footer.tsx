import React from 'react';
import style from './Footer.module.scss';
const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footer_content_info}>
        <h3>Contact Us</h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        eius non eaque cumque officia dignissimos maxime sapiente dolorem,
        pariatur porro saepe cupiditate explicabo reprehenderit a, aliquid est
        repellat quis iure!
      </div>
      <address className={style.footer_content_address}>
        <h3 style={{ fontStyle: 'normal' }}>Address</h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis nobis
        nemo error quo blanditiis quaerat exercitationem ipsa corrupti voluptate
        ullam distinctio laborum, autem quos reprehenderit eligendi quibusdam.
        Deserunt, quaerat numquam.
      </address>
    </footer>
  );
};

export default Footer;
