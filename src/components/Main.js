import { useQuizContext } from "../context/QuizContext"
import Error from "./Error"
import Loader from "./Loader"
import StartScreen from "./StartScreen"
import Question from "./Question"
import Next from "./Next"
import Progress from "./progress"
import FinishScreen from "./FinishScreen"
import Footer from "./Footer"
import Timer from "./Timer"

export default function Main (){
    const {status} = useQuizContext()
    return <div className="main">
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen/>}
        {status === "active" && 
        <>
            <Progress/>
            <Question/>
            <Footer>
                <Next/>
                <Timer/>
            </Footer>
        </>
            }
        {status === "finished" && <FinishScreen/>}
    </div>
}
