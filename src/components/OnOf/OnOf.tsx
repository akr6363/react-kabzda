import React, {useState} from 'react';
import styles from './OnOf.module.css'

// type OnOffPropsType = {
//     on: boolean
// }

const OnOf = () => {

    let [on, setOn] = useState<boolean>(true)

    const onClickHandler =(event: React.MouseEvent<HTMLDivElement>)=> {
        setOn(event.currentTarget.innerHTML === 'On' ? true : false)
    }

    return (
        <div className={styles.wrapper}>
            <div id='on' onClick={onClickHandler} className={`${styles.btn} ${on && styles.on}`}>On</div>
            <div id='off' onClick={onClickHandler} className={`${styles.btn} ${!on && styles.off}`}>Off</div>
            <div className={`${styles.lamp} ${on ? styles.on : styles.off}`}></div>
        </div>
    );
};

export default OnOf;