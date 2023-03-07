import React from 'react';
import styles from './OnOf.module.css'

type OnOffPropsType = {
    on: boolean
}

const OnOf: React.FC<OnOffPropsType> = (props) => {
    return (
        <div className={styles.wrapper}>
            <div className={`${styles.btn} ${props.on && styles.on}`}>On</div>
            <div className={`${styles.btn} ${!props.on && styles.off}`}>Off</div>
            <div className={`${styles.lamp} ${props.on ? styles.on : styles.off}`}></div>
        </div>
    );
};

export default OnOf;