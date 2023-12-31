import { useQuizContext } from "../context/QuizContext"
function Progress() {
    const {index, total, points, maxpoints, answer} = useQuizContext()
    return (
        <header className="progress">
            <progress max={total} value={index + Number(answer !== null) }></progress>
            <p>
                <strong> {index + 1} </strong>
                / {total}
            </p>
            <p>
                <strong> {points} </strong>
                / {maxpoints}
            </p>
        </header>
    )
}

export default Progress
