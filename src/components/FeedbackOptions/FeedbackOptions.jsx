import css from './FeedbackOptions.module.css'

export const FeedbackOptions = ({options, onLeaveFeedback})=>{
return(
    <div className={css.options}>
    { options.map((option, index) => (
        <button className={css.btn} key={option} type="button" onClick={onLeaveFeedback}>{option}</button>
    ))
    }
    </div>
)

}