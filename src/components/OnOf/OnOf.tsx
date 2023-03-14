import React, {useState} from 'react';
import styles from './OnOf.module.css'

type OnOffPropsType = {
    onOfState: boolean
    setOnOfState: (state: boolean) => void
}

const OnOf: React.FC<OnOffPropsType> = ({onOfState, setOnOfState}) => {

    return (
        <div className={styles.wrapper}>
            <div onClick={() => {setOnOfState(true)}}
                 className={`${styles.btn} ${onOfState && styles.on}`}>
                On</div>
            <div onClick={() => {setOnOfState(false)}}
                 className={`${styles.btn} ${!onOfState && styles.off}`}>
                Off</div>
            <div className={`${styles.lamp} ${onOfState ? styles.on : styles.off}`}></div>
        </div>
    );
};

export default OnOf;