
export default function Home() {
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold underline">Team Pythonic</h1>
        {/* Bento Grid */}
        <div className="grid grid-cols-3 grid-rows-4 gap-4">
          <div className="col-span-1 row-span-2 bg-gradient-to-r from-blue-500 to-red-500 rounded-lg border-2 border-black p-10 text-white ">
            USER NAME
          </div>
          <div className="col-span-1 row-span-1 bg-neutral-100 rounded-lg border-2 border-black p-10">
            NO EMAIL BS
          </div>
          <div className="col-span-1 row-span-1 bg-neutral-100 rounded-lg border-2 border-black p-10">
            PRIVACY
          </div>
          <div className="col-span-1 row-span-1 bg-neutral-100 rounded-lg border-2 border-black p-10">
            SECURITY
          </div>
          <div className="col-span-1 row-span-2 bg-neutral-100 rounded-lg border-2 border-black p-10">
            PLACES
          </div>
          <div className="col-span-1 row-span-2 bg-neutral-100 rounded-lg border-2 border-black p-10">
            SERVICES
          </div>
          <div className="col-span-1 row-span-2 bg-neutral-100 rounded-lg border-2 border-black p-10">
            DEVICES
          </div>
          <div className="col-span-1 row-span-1 bg-neutral-100 rounded-lg border-2 border-black p-10">
            CLOUD
          </div>
        </div>
      </div>
    </>
  )
}
