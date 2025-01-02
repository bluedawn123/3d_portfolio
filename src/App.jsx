import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

function App() {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        {/* 아래의 bg-hero-pattern으로 배경을 정의한다. 
        이것은 tailwind.config.js에서 확인할 수 있다.  */}
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        {/* 이 아래는 섹션별로 분리해서 추가되는 컴포넌트 */}
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
