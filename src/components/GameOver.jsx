export default function GameOver({ winner, restartGame }) {
    return (
        <div ID="game-over">
            <h2>GAME OVER!</h2>
            {winner && <p>{winner} won!</p>}
            {!winner && <p>It is a draw!!!</p>}
            <p>
                <button onClick={restartGame}>Rematch!</button>
            </p>
        </div>
    )
}