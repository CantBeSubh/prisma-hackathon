import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type BentoCardProps = {
  row?: number
  col?: number
  children: React.ReactNode
}
const BentoCard = (props: BentoCardProps) => {
  const { row, col, children } = props
  return (
    <div className={`col-span-${col ?? 1} row-span-${row ?? 1} bg-gradient-to-r from-neutral-100 to-neutral-200 rounded-lg border-2 border-black flex items-center justify-center h-60 text-black`}>
      {children ?? 'PLACEHOLDER'}
    </div>
  )
}

const UserSelector = () => {
  const dummyUsers = [
    'John Doe',
    'Jane Doe',
    'Bob Smith',
    'Alice Johnson',
    'Mark Brown',
    'Sarah Lee',
  ]
  return (
    <Select defaultValue={dummyUsers[0]}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select an account" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          {dummyUsers.map((user) => (
            <SelectItem key={user} value={user}>
              {user}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

const LocationSelector = () => {
  const dummyLocations = [
    'Home',
    'Office',
    'Kitchen',
    'Bedroom',
    'Living Room',
    'Garage',
  ]
  return (
    <Select defaultValue={dummyLocations[0]}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a location" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Locations</SelectLabel>
          {dummyLocations.map((location) => (
            <SelectItem key={location} value={location}>
              {location}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default function Home() {
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold underline">Team Pythonic</h1>
        <div className="flex w-full items-center justify-between px-4 py-4">
          {/* UserSelector */}
          <UserSelector />
          {/* LocationSelector */}
          <LocationSelector />
        </div>
        {/* Bento Grid */}
        <div className="grid grid-cols-3 grid-rows-2 gap-4 p-4 h-fit w-full">
          <BentoCard> ACCOUNT </BentoCard>
          <BentoCard> DEVICES </BentoCard>
          <BentoCard> ROUTING </BentoCard>
          <BentoCard> SAM </BentoCard>
          <BentoCard> ADD DEVICES </BentoCard>
          <BentoCard> AUTOMATED ROUTINES </BentoCard>
        </div>
      </div>
    </>
  )
}
