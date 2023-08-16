import { useQuizContext } from "../context/QuizContext"

export default function StartScreen() {
    const {total, dispatch} = useQuizContext()
    return (
        <div className="start">
            <h2> Welcome to the React Quiz !!</h2>
            <h3> {total} questions to test your React mastery </h3>
            <button className="btn btn-ui" onClick={() => dispatch({type: "start"})}> Let's start </button>
        </div>
    )
}


