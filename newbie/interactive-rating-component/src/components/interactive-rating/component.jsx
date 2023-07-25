import { useState } from 'react';
import styles from './style.module.css';
import starSVG from '../../assets/images/icon-star.svg';
import thankyou from '../../assets/images/illustration-thank-you.svg';

const Option = ({value, selected_score, onOptionClick}) => {
    return (
        <button className={`${styles.option} ${value === selected_score ? styles.selected : ''}`} onClick={onOptionClick}>{value}</button>
    )
}

const Thankyou = ({score, visible}) => {
    return (
        <div className={`${styles.thankyou} ${!visible ? styles.invisible : ''}` }>
            <img src={thankyou}></img>
            <p className={styles.returnMessage}>You selected {score} out of 5</p>
            <div className={styles.heading}>Thank you!</div>
            <p className={styles.ratingBody}>
                We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!
            </p>
        </div>
    )
}

export const InteractiveRating = () => {

    const [score, setScore] = useState(0);
    const [submitted, setSubmitted] = useState(false);
    
    const handleClick = (i) => {
        setScore(i)
    }

    const submitOnclick = () => {
        setSubmitted(true)
    }

    return (
        <div className={styles.container}>
            <div className={submitted ? styles.invisible : ''}>
                <div className={styles.starsvg}>
                    <img src={starSVG}></img>
                </div>
                <p className={styles.heading}>How did we do?</p>
                <p className={styles.ratingBody}>
                Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering! 
                </p>
                <div className={styles.ratingsBar}>
                    {[...Array(5).keys()].map((value) => {
                        value = value + 1;
                        return (
                            <Option key={value}
                            selected_score={score}
                            value={value}
                            onOptionClick={() => handleClick(value)} />
                        )
                    })}
                </div>
                <button className={styles.submit} onClick={submitOnclick}>SUBMIT</button>
            </div>
            <Thankyou score={score} visible={submitted} />
        </div>
    )
}