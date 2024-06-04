const Project = ({ img, name, imformation, star }) => {
  return (
    <>
      <div className="project flex flex-col gap-5">
        <div className="img">
          <img src={`../src/assets/${img}`} alt="SORRY" className="w-[447px]" />
        </div>
        <div className="project-write flex flex-col gap-[19px]">
          <h1 className="font-abc text-[21px] font-semibold leading-[25.2px]">{name}</h1>
          <p className="font-abc text-base leading-6 w-[329px]">{imformation}</p>
          <div className="star-group flex gap-[15px]">
            <img src="../src/assets/Stars.png" alt="SORRY" />
            <p className="font-abc leading-5 text-base">{star}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Project
