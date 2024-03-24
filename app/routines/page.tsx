type RoutineCardProps = {
    device: string
}

const RoutineCard = (props: RoutineCardProps) => {
    const { device } = props
    return (
        <div className="flex gap-2 border-2 border-black rounded-lg p-2 cursor-pointer">
            <h3 className="text-thin">{device}</h3>
        </div>
    )
}

const RoutinesPage = () => {
    return (
        <>
            <h1 className="text-4xl font-bold underline pb-2">Devices</h1>
            <div className="flex flex-wrap gap-4">
                {/* ROutines */}
                {Routines.map((routine) => (
                    <RoutineCard device={routine} key={routine} />
                ))}
            </div>
        </>
    )
}

export default RoutinesPage

const Routines: string[] = [
    "Sleeping",
    'Studying',
    'Working',
    'Eating',
    'Watching TV',
    'Reading',
    'Playing Video Games',
    'Playing Music',
    'Watching Movies',
    'Cooking',
    'Cleaning',
    'Doing Housework',
    'Taking Care of Kids',
    'Taking Care of Dogs',
    'Taking Care of Cats',
    'Taking Care of Pets',
    'Taking Care of the Home',
    'Cleaning the Home',
    'Cooking the Home',
    'Doing Housework',
    'Watching TV',
    'Reading',
    'Playing Video Games',
    'Playing Music',
    'Watching Movies',
]