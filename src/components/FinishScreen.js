function FinishScreen({points, maxpoints, highscore, dispatch}) {
    const percentage = Number((points / maxpoints) * 100)

    let emoji
    if(percentage === 100) emoji = "🎖️"
    if(percentage >= 80 && percentage < 100) emoji = "🎉"
    if(percentage > 0 && percentage < 50) emoji = "🥹"
    if(percentage === 0) emoji = "🤦🏻‍♂️"

    return (
        <>
            <p className="result">
                <span> {emoji} </span>You scored <strong> {points} </strong> out of {maxpoints} ({Math.ceil(percentage)}%) 
            </p>
            <p className="highscore"> Highscore: {highscore} </p>
            <button className="btn btn-ui" onClick={() => dispatch({type: "restart"})}> Reset Quiz </button>
        </>
    )
}

export default FinishScreen
