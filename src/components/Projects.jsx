import Project from "./Project"

const Projects = () => {
    return (
        <>
            <div className="projects-back flex flex-col gap-[31px]">
                <div className="project-header flex items-end justify-between">
                    <div className="projects-write flex flex-col gap-[31px]">
                        <p className="font-abc text-base leading-5">Best Project of the Years</p>
                        <h1 className="font-abc text-[50px] font-semibold leading-[60px]">Our recent projects</h1>
                    </div>
                    <div className="buttons flex gap-2">
                        <button className="left-right button bg-white rounded-[50%] p-3">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 19.92L8.48003 13.4C7.71003 12.63 7.71003 11.37 8.48003 10.6L15 4.07999" stroke="#000" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                        <button className="left-right button bg-white rounded-[50%] p-3">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.90997 19.92L15.43 13.4C16.2 12.63 16.2 11.37 15.43 10.6L8.90997 4.07999" stroke="#000" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="projects flex items-center justify-between gap-5">
                    <Project img="image 3.png" name="Sobha Hearland I Villas" imformation="Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum" star="4.84" />
                    <Project img="image 4.png" name="Sobha Hearland II Villas" imformation="Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum." star="4.83" />
                    <Project img="image 5.png" name="Sobha Hearland II Villas" imformation="Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum." star="4.83" />
                </div>
            </div>
        </>
    )
}

export default Projects