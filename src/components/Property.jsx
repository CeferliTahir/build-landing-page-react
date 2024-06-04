const Property = () => {
    return (
        <>
            <div className="property flex items-center justify-between rounded-[15px] px-[25px]">
                <div className="information flex flex-col gap-6">
                    <div className="write flex flex-col gap-[15px]">
                        <p className="font-abc text-base leading-5">Welcome to Realstate</p>
                        <h1 className="font-abc font-semibold text-[67px] leading-[80.4px]">Manage Your <br /> Property</h1>
                    </div>
                    <p className="font-abc text-base leading-6">Your will have everything nearby supermarket, buses , <br /> station, the carmen neighborhood, etc</p>
                    <div className="search bg-white w-[438px] flex items-center justify-between rounded-[40px] pl-6">
                        <input type="text" placeholder="Enter your email" className="outline-none w-[60%] font-abc" />
                        <button className="font-abc font-semibold text-base leading-6 w-[147px] bg-black rounded-[40px] text-white py-[18px] px-[25px]">Get a Quote</button>
                    </div>
                </div>
                <div className="img">
                    <img src="../src/assets/0a859f2259be3cb784202490696b4f22.png" alt="SORRY" className="w-[648px]" />
                </div>
            </div>
        </>
    )
}

export default Property