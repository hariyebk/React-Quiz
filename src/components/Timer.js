import { useEffect } from "react"
import { useQuizContext } from "../context/QuizContext"

function Timer() {
    const {dispatch, secondsRemaining} = useQuizContext()

    const min = Math.floor(secondsRemaining / 60)
    const seconds = Math.floor(secondsRemaining % 60)
    useEffect(function(){
        const id = setInterval(() => {
            dispatch({type: "tick"})
        }, 1000)
        
        return () => {
            // 
            clearInterval(id)
        }
    },[dispatch])
    return <div className="timer"> 
        {min < 10 && "0"}{min} : {seconds < 10 && "0"}{seconds}
    </div>
}

export default Timer
