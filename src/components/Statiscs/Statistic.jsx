import css from './Statisctics.module.css'

export const Statistics = ({good, neutral, bad, total, positivePercentage}) =>{
return(
    <div className={css.statistics}>
        <p className={css.statisticEl}>Good: <span className={css.feedback}>{good}</span></p>
        <p className={css.statisticEl}>Neutral: <span className={css.feedback}>{neutral}</span> </p>
        <p className={css.statisticEl}>Bad: <span className={css.feedback}>{bad}</span> </p>
        <p className={css.statisticEl}>Total: <span className={css.feedback}>{total}</span> </p>
        <p className={css.statisticEl}>Positive feedback: <span className={css.feedback}>{positivePercentage}%</span> </p>
    </div>
)
}