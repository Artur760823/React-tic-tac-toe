
export default function Log({ turns }) {

    return (
        <ol id="log">
            {turns.map((turn)=>
            <li key={Math.random()}>{turn.player} selected Row: {turn.square.row} and Collumn: {turn.square.col}</li>
            )}
        </ol>
    )
}