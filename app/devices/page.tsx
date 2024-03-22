type DevicesType = {
    [room: string]: {
        [device: string]: {
            on: boolean,
            color?: string,
            brightness?: number,
        }
    }
}
const DevicesPage = () => {
    return (
        <>
            <h1 className="text-3xl font-bold underline">Devices</h1>
            <div className="">
                {Object.keys(DEVICES).map((room) => (
                    <div key={room} >
                        <h2 className="text-2xl font-bold underline">{room}</h2>
                        {Object.keys(DEVICES[room]).map((device) => (
                            <div key={device} className="flex flex-row gap-2">
                                <h3 className="text-xl font-bold underline">{device}</h3>
                                <div className="flex flex-col gap-2">
                                    {Object.keys(DEVICES[room][device]).map((prop) => (
                                        <div key={prop}>
                                            <h4 className="text-lg font-bold underline">{prop}</h4>
                                            <div className="flex flex-col gap-2">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-10 h-10 rounded-full bg-black"></div>
                                                    <div className="flex-1">
                                                        <div className="text-sm font-bold">{DEVICES?.room?.device?.on ? 'ON' : 'OFF'}</div>
                                                        <div className="text-xs font-bold">{DEVICES?.room?.device?.color}</div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
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
            on: true,
        },
        mirror_light: {
            on: true,
            color: 'red',
            brightness: 10,
        }
    },
    LIVING_ROOM: {
        TV: {
            on: true,
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