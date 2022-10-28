interface IPlayer {
    Player: string,
    Position: string | number,
}
const PlayerPosition = (prop: IPlayer) => {
    return (
        <h3>{prop.Player} : {prop.Position}</h3>
    )
}

export default PlayerPosition
