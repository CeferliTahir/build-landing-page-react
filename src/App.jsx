import Brokerage from "./components/Brokerage"
import Header from "./components/Header"
import Newsletter from "./components/Newsletter"
import Projects from "./components/Projects"
import Property from "./components/Property"
import Steps from "./components/Steps"

function App() {
  return (
    <>
      <div className="container max-w-[1384px] w-[90%] m-auto">
        <main className="flex flex-col gap-[100px]">
          <Header />
          <Property/>
          <Steps/>
          <Projects/>
          <Brokerage/>
          <Newsletter/>
        </main>
      </div>
    </>
  )
}

export default App
