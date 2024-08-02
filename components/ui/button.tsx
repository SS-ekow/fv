import React from 'react';
import styles from './button.module.css';
  
interface ButtonProps {
  buttonText: string;
  variant?: 'small' | 'medium' | 'large';
}

export default function Button({buttonText, variant = 'small'}: ButtonProps){

  return(
    <button className={`${styles.btnSmall} ${variant === 'small' ? styles.primary : variant === 'medium' ? styles.medium : styles.large}`}>
      {buttonText}
    </button>
  )
};