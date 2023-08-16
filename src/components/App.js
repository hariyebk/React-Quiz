import Header from "./Header"
import Main from "./Main"

import {QuizContextProvider} from "../context/QuizContext"

export default function App() {
  return  <div className="app">
        <QuizContextProvider>
          <Header />
          <Main/>
      </QuizContextProvider>
    </div>
}