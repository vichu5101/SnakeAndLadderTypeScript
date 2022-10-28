import Image from './snakeandladder.png'
import Test from './userInput'
let count = 0
const FrontPage = () => {
    function startGame() {
        count++
    }
    return (
        <div>
            <img src={Image} alt="Snake and Ladder Image" />
            <button onClick={startGame}>Play</button>
            {count === 1 ? <Test /> : null}
        </div>
    )
}

export default FrontPage
