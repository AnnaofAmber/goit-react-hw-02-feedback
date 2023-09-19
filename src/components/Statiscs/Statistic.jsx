export const Statistics = ({good, neutral, bad, total, positivePercentage}) =>{
return(
    <div>
    <section>
    <h2>Please leave feedback </h2>
    <button>Good</button>
    <button>Neutral</button>
    <button>Bad</button>
    </section>
    <section>
        <h2>Statistics</h2>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive feedback: {positivePercentage}%</p>
    </section>
    </div>
)
}