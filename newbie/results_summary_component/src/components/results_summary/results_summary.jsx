import styles from './results_summary.module.css';
import reactionImg from '../../assets/images/icon-reaction.svg';
import memoryImg from '../../assets/images/icon-memory.svg';
import verbalImg from '../../assets/images/icon-verbal.svg';
import visualImg from '../../assets/images/icon-visual.svg';

const Highlight = ({scores}) => {
    const average = array => Math.floor(array.reduce((a,b) => a+b)/array.length);
    return (
    <div className={styles["focus-container"]}>
        <p><strong>Your Result</strong></p>
        <div className={styles.circle}>
            <p><strong>{average(scores)}</strong></p> 
            <p>of 100</p>
        </div>
        <p className={styles.great}>Great</p>
        <p className={styles.message}>Your performance exceed 65% of the people conducting the test here!</p>
    </div>
    )
}

const Breakdown = ({data_array}) => {

    const img_map = {
        "Reaction": reactionImg,
        "Memory": memoryImg,
        "Visual": visualImg,
        "Verbal": verbalImg
    };
    
    const Item = ({category_object}) => {
        return (
            <div className={`${styles.item} ${styles[category_object.category]}`}>
                <span><img src={img_map[category_object.category]}></img>{category_object.category}</span>
                <span><span className={styles.score}>{category_object.score}</span><span className={styles.hundred}>  / 100</span></span>
            </div >
        )
    }

    return (
        <div className={styles["breakdown-container"]}>
            <p>Summary</p>
            {data_array.map(element => {
                return (
                    <Item key={element.category} category_object={element} />
                )
            })}
            <div className={styles.continue}>Continue</div>
        </div>
    )
}

export const ResultsSummaryComponent = ({data_array}) => {
    const scores = data_array.map((element) => element["score"]);
    return (
    <div className={styles["component-container"]}>
        <Highlight scores={scores}/>
        <Breakdown data_array={data_array} />
    </div>
    )
}