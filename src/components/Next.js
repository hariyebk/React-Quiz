function Next({dispatch, answer, index, total}) {
    if(answer === null) return
    if(index < total - 1)
        return (
            <div>
                <button className="btn btn-ui" onClick={() => dispatch({type: "next"})}> Next </button>
            </div>
        )
    if(index === total - 1)
            console.log("hey")
            return (<div>
                <button className="btn btn-ui" onClick={() => dispatch({type: "finish"})}> Finish </button>
            </div>)
}

export default Next
