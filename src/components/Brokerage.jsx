import Button from "./Button"

const data = [
    {
        number: "12+",
        name: "Customers"
    },
    {
        number: "14+",
        name: "Offices"
    },
    {
        number: "10+",
        name: "Students"
    },
]

const Brokerage = () => {
    return (
        <>
            <div className="brokerage-back flex flex-col gap-[45px]">
                <div className="brokerage-header-write text-center">
                    <h1 className='font-abc font-semibold text-[50px] leading-[60px]'>We are a global, boutique real <br /> estate brokerage</h1>
                </div>
                <div className="brokerage flex items-center justify-between">
                    <div className="information flex flex-col gap-[63px]">
                        <div className="write flex flex-col gap-6">
                            <h1 className='font-abc font-semibold text-[38px] leading-[45.6px]'>The transfer of real estate</h1>
                            <p className='w-[474px] font-abc leading-6'>Lorem ipsum dolor sit amet consectetur. Feugiat ut aliquet sit pellentesque sollicitudin. Egestas faucibus lacus diam in senectus consectetur. Mattis elit adipiscing quisque tellus scelerisque vehicula ante nunc. Tellus consequat nisl quis nisl justo.</p>
                        </div>
                        <div className="button flex gap-6">
                            <Button title="Book Now!" />
                            <Button title="Read More" />
                        </div>
                        <div className="data flex gap-[92px]">
                            {
                                data.map((item, index) => (
                                    <div key={index} className="item text-center">
                                        <h1 className="font-abc text-[67px] font-semibold leading-[80.4px]">{item.number}</h1>
                                        <p className="font-abc text-base leading-[19.2px]">{item.name}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="img">
                        <img className='w-[550px]' src="../src/assets/39ccd9593c28f2c8132f91d08cf60a8d.png" alt="SORRY" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Brokerage