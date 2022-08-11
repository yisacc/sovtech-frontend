const Card = ({
  name,
  handleClick,
}: {
  name: string
  handleClick: Function
}) => {
  return (
    <div
      onClick={() => handleClick(name)}
      className="p-6 w-40 bg-light-cyan-blue rounded-lg shadow-md mb-6"
    >
      <h1 className="mb-2 text-2xl font-bold tracking-tight text-indigo text-left">
        {name}
      </h1>
    </div>
  )
}
export default Card
