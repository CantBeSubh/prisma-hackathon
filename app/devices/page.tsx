import { Switch } from "@/components/ui/switch"

type DevicesType = {
    [room: string]: {
        [device: string]: {
            on: boolean,
            color?: string,
            brightness?: number,
        }
    }
}
type DeviceCardProps = {
    device: string
    on: boolean
}

const DeviceCard = (props: DeviceCardProps) => {
    const { device, on } = props
    return (
        <div className="flex gap-2 border-2 border-black rounded-lg p-2">
            <h3 className="text-thin">{device}</h3>
            <Switch defaultChecked={on} />
        </div>
    )
}

const DevicesPage = () => {
    return (
        <>
            <h1 className="text-4xl font-bold underline pb-2">Devices</h1>
            <div className="flex flex-col gap-4">
                {/* Devices */}
                {Object.keys(DEVICES).map((room) => (
                    <div key={room} className="mb-2">
                        <h3 className="text-2xl font-bold pb-1">{room}</h3>
                        <div className="flex gap-2">
                            {Object.keys(DEVICES[room]).map((device) => (
                                <DeviceCard
                                    device={device}
                                    on={DEVICES[room][device].on}
                                    key={device}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default DevicesPage

const DEVICES: DevicesType = {
    BATHROOM: {
        light: {
            on: true,
            color: 'white',
            brightness: 100,
        },
        vent: {
            on: false,
        },
        mirror_light: {
            on: true,
            color: 'red',
            brightness: 10,
        }
    },
    LIVING_ROOM: {
        TV: {
            on: false,
        },
        light: {
            on: true,
        }

    },
    // 'KITCHEN':{},
    // 'OFFICE':{},
    // 'HOME':{},
    // 'BEDROOM':{},
    // 'GARAGE':{},
}