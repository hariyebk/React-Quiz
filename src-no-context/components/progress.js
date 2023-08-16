function Progress({index, total, points, maxpoints, answer}) {
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
