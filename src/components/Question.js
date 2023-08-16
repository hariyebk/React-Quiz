import { useQuizContext } from "../context/QuizContext"
import Options from "./Options"

function Question() {
    const {questions, index} = useQuizContext()
    return (
        <div>
            <h4> {questions[index].question}</h4>
            <Options question = {questions[index]} />
        </div>
    )
}
export default Question
