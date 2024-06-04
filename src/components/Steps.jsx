import Step from "./Step"

const Steps = () => {
    return (
        <>
            <div className="step-back">
                <div className="step-header-write text-center mb-[45px]">
                    <p className="font-abc text-base leading-5">Three steps. Three minutes.</p>
                    <h1 className="font-abc text-[50px] font-semibold leading-[60px]">Everything should be this easy.</h1>
                </div>
                <div className="steps flex items-center justify-between">
                    <Step img="Image.png" name="Answer questions" information="Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum in in vestibulum." />
                    <Step img="Image-1.png" name="Select a quote" information="Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum in in vestibulum." />
                    <Step img="Image-2.png" name="Get registered" information="Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum in in vestibulum." />
                </div>
            </div>
        </>
    )
}

export default Steps