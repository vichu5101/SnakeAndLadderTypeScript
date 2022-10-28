interface IPlayer {
  player: string
}
const PlayerGeneratingProps = (prop: IPlayer) => {
  return (
    <div>
      <span>{prop.player}</span>
    </div>
  )
}

export default PlayerGeneratingProps
