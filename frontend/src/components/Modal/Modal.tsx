import React, { FC, ReactNode } from 'react';
import { RiCloseLine } from 'react-icons/ri';
import styles from './Modal.module.scss';

interface ModalProps {
  setClose: (value: boolean) => void;
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({ setClose, children }) => {
  return (
    <>
      <div className={styles.backdrop} onClick={() => setClose(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Kundali Form</h5>
          </div>
          <button className={styles.closeBtn} onClick={() => setClose(false)}>
            <RiCloseLine style={{ marginBottom: '-3px' }} />
          </button>
          <div className={styles.modalContent}>{children}</div>
        </div>
      </div>
    </>
  );
};

export default Modal;
