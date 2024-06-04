const Step = ({ img, information, name }) => {
    return (
        <>
            <div className="step flex flex-col gap-[22px]">
                <div className="img">
                    <img src={`../src/assets/${img}`} alt="SORRY" />
                </div>
                <div className="step-write flex flex-col gap-[22px]">
                    <h1 className="font-abc font-semibold text-[28px] leading-[33.6px]">{name}</h1>
                    <p className="font-abc text-base leading-6 w-[329px]">{information}</p>
                </div>
            </div>
        </>
    )
}

export default Step