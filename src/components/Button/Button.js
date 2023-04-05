import React from 'react';
import styles from './Button.module.css'

const Button = ({name, type}) => {
    return (
        <button className={`${styles[type]}`} >
            {name}
        </button>
    )   
}

export default Button;