type BentoCardProps = {
  row?: number
  col?: number
  children: React.ReactNode
}
const BentoCard = (props: BentoCardProps) => {
  const { row, col, children } = props
  return (
    <div className={`col-span-${col ?? 1} row-span-${row ?? 1} bg-gradient-to-r from-neutral-100 to-neutral-200 rounded-lg border-2 border-black flex items-center justify-center p-10 text-black`}>
      {children ?? 'PLACEHOLDER'}
    </div>
  )
}
export default function Home() {
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold underline">Team Pythonic</h1>
        {/* Bento Grid */}
        <div className="grid grid-cols-3 grid-rows-4 gap-4">
          <BentoCard row={2} col={1}> USER NAME </BentoCard>
          <BentoCard > NO EMAIL BS </BentoCard>
          <BentoCard > PRIVACY </BentoCard>
          <BentoCard > SECURITY </BentoCard>
          <BentoCard row={2} col={1}> LOCATION </BentoCard>
          <BentoCard row={2} col={1}> CHAT </BentoCard>
          <BentoCard row={2} col={1}> DEVICES </BentoCard>
          <BentoCard> ADD A DEVICE </BentoCard>
        </div>
      </div>
    </>
  )
}
