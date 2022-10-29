interface IPlayer {
    Player: string
}
const PlayerAdder = (prop: IPlayer) => {
    return (
        <h3>{prop.Player}</h3>
    )
}

export default PlayerAdder
