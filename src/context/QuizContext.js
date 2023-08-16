import { createContext, useContext, useEffect } from "react";
import { useReducer } from "react";
const QuizContext = createContext()

const initial = {
    questions: [],
    // loading, error, ready, finished
    status: "loading",
    index: 0,
    answer: null,
    points: 0,
    highscore: 0,
    secondsRemaining: null
}
const SECONDS_FOR_EACH_QUESTION = 10
const reducer = (state, action) => {
switch (action.type){
    case "dataRecieved" :
        return {
        ...state,
        questions: action.payload,
        status: "ready"
        }
    case "dataFailed":
        return {
        ...state,
        status: "error"
        }
    case "start":
        return {
        ...state,
        status: "active",
        secondsRemaining: state.questions.length * SECONDS_FOR_EACH_QUESTION 
        }
    case "newAnswer" :
        const question = state.questions.at(state.index)
        return {
        ...state,
        answer: action.payload,
        points: action.payload ===  question.correctOption ? state.points + question.points : state.points 
        }
    case "next" :
        return {
        ...state,
        index: state.index + 1,
        answer: null
        }
    case "finish" :
        return {
        ...state,
        status: "finished",
        answer: null,
        highscore: state.points > state.highscore ? state.points : state.highscore
        }
    case "tick":
        return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? "finished" : state.status
        }
    case "restart" :
        return {
        ...state,
        index: 0,
        answer: null,
        points: 0,
        status: "active",
        secondsRemaining:  state.questions.length * SECONDS_FOR_EACH_QUESTION 
        }
    default:
        throw new Error("unkown");
}
}

function QuizContextProvider ({children}){
    const [{questions, status, index, answer, points, highscore, secondsRemaining}, dispatch] = useReducer(reducer, initial)
    const total = questions.length
    const maxpoints = questions.reduce((acc, i) => acc + i.points, 0)
    useEffect(function(){
        const fetchdata = async () => {
        try{
        const res = await fetch("http://localhost:8000/questions")
        const data = await res.json()
        dispatch({type: "dataRecieved", payload: data})
        }
        catch(err){
        dispatch({type: "dataFailed"})
        }
        } 
    
        fetchdata()
    }, [])
    return <QuizContext.Provider value = {{
        questions,
        status,
        index,
        answer,
        total,
        points,
        highscore,
        maxpoints,
        secondsRemaining,
        dispatch
    }}>
        {children}

    </QuizContext.Provider>
}

function useQuizContext (){
    const context = useContext(QuizContext)
    if(!context) throw new Error("useQuizContext has been used outside of it's provider")
    return context
}

export {QuizContextProvider, useQuizContext}