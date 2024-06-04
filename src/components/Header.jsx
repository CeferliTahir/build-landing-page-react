const Header = () => {
    return (
        <>
            <div className="header flex items-center justify-between mt-6 bg-[#FAFAFA] rounded-[70px] py-[13px] px-6">
                <div className="logo">
                    <img src="../src/assets/Logo (2).png" alt="SORRY" />
                </div>
                <div className="navbar bg-[#FEFEFF] rounded-[40px] py-5 px-9 flex gap-[35px]">
                    <nav>
                        <ul className="flex gap-[35px] font-abc text-base leading-5 text-[#1F1F1F]">
                            <li className="hover:border-b border-[#1F1F1F]"><a href="#">About us</a></li>
                            <li className="hover:border-b border-[#1F1F1F]"><a href="#">Projects</a></li>
                            <li className="hover:border-b border-[#1F1F1F]"><a href="#">Agents</a></li>
                            <li className="hover:border-b border-[#1F1F1F]"><a href="#">Services</a></li>
                            <li className="hover:border-b border-[#1F1F1F]"><a href="#">Listings</a></li>
                        </ul>
                    </nav>
                    <button>
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.9437 21C17.1904 21 21.4437 16.7467 21.4437 11.5C21.4437 6.25329 17.1904 2 11.9437 2C6.69699 2 2.4437 6.25329 2.4437 11.5C2.4437 16.7467 6.69699 21 11.9437 21Z" stroke="#1F1F1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M22.4437 22L20.4437 20" stroke="#1F1F1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>
                <div className="buttons flex gap-1">
                    <a href="#" className="font-abc leading-5 py-[15px] px-[35px] border border-[#FAFAFA] hover:border-[#BEBEBE] rounded-[40px] hover:bg-white">Other services</a>
                    <a href="#" className="font-abc leading-5 py-[15px] px-[35px] border rounded-[40px] border-[#FAFAFA] hover:border-[#BEBEBE] hover:bg-white">Contact us</a>
                </div>
            </div>
        </>
    )
}

export default Header