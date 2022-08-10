const Card = ({
  name,
  handleClick,
}: {
  name: string
  handleClick: Function
}) => {
  return (
    <div className="p-6 w-64 bg-light-cyan-blue rounded-lg shadow-md mb-6">
      <h1 className="mb-2 text-2xl font-bold tracking-tight text-indigo text-left">
        {name}
      </h1>
      <div className="ml-14 flex flex-col w-32 text-right">
        <button
          onClick={() => handleClick(name)}
          className="mt-3 bg-white text-dark-blue items-center py-2 text-sm font-medium text-center rounded-lg border-solid border-dark-blue border-2"
        >
          Open
        </button>
      </div>
    </div>
  )
}
export default Card
