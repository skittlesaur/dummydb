import styles from './popUp.module.css';
import {useEffect, useRef} from "react";

const PopUp = ({setVisibility, props, externalHide}) => {
    const wrapper = useRef();

    useEffect(() => {
        if (externalHide)
            handleExit()
    }, [externalHide])

    const delay = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }


    const handleExit = () => {
        wrapper.current.classList.remove(styles['fade-in'])
        delay(300).then(() => setVisibility({visible: false}));
    }

    useEffect(() => {
        delay(100).then(() => wrapper.current.classList.add(styles['fade-in']))
    }, [])

    return (
        <div ref={wrapper} onClick={handleExit} className={styles['wrapper']}>
            <div onClick={(e) => e.stopPropagation()} className={styles['content']}>{props}</div>
        </div>
    );
}

export default PopUp;