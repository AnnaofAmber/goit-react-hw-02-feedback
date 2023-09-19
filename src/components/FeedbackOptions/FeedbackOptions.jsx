export const FeedbackOptions = ({options, onLeaveFeedback})=>{
return(
    <>
    { options.map((option, index) => (
        <button key={option} type="button" onClick={onLeaveFeedback}>{option}</button>
    ))
    }
    </>
)

}