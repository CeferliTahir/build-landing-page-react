const Newsletter = () => {
  return (
    <>
      <div className="newsletter flex items-center justify-between rounded-[15px] px-[25px] mb-6">
                <div className="information flex flex-col gap-[45px]">
                    <div className="write flex flex-col gap-[18px]">
                        <h1 className="font-abc font-semibold text-[50px] leading-[60px]">Subscribe Our Newsletter</h1>
                        <p className="font-abc text-base leading-6 w-[526px]">Lorem ipsum dolor sit amet consectetur. Feugiat ut aliquet sit pellentesque sollicitudin. Egestas faucibus lacus diam in senectus consectetur. Mattis elit adipiscing quisque tellus scelerisque vehicula ante nunc.</p>
                    </div>
                    <div className="search bg-white w-[464px] flex items-center justify-between rounded-[40px] pl-5">
                        <input type="text" placeholder="Enter your email" className="outline-none w-[60%] font-abc" />
                        <button className="font-abc font-semibold text-base leading-6 w-[147px] bg-black rounded-[40px] text-white py-[18px] px-[25px]">Get a Quote</button>
                    </div>
                </div>
                <div className="img">
                    <img src="../src/assets/3d-rendering-isometric-fdgdf 1 (1).png" alt="SORRY" className="w-[522px]" />
                </div>
            </div>
    </>
  )
}

export default Newsletter