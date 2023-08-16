export default function StartScreen({total, dispacth}) {
    return (
        <div className="start">
            <h2> Welcome to the React Quiz !!</h2>
            <h3> {total} questions to test your React mastery </h3>
            <button className="btn btn-ui" onClick={() => dispacth({type: "start"})}> Let's start </button>
        </div>
    )
}


