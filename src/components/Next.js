import { useQuizContext } from "../context/QuizContext"

function Next() {
    const {dispatch, answer, index, total} = useQuizContext()
    if(answer === null) return
    if(index < total - 1){
        return <div>
            <button className="btn btn-ui" onClick={() => dispatch({type: "next"})}> Next </button>
            </div>
    }
    if(index === total - 1){
        return <div>
            <button className="btn btn-ui" onClick={() => dispatch({type: "finish"})}> Finish </button>
        </div>
    }
}

export default Next
