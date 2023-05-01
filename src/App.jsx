import Info from "./components/Info"
import Footer from "./components/Footer"
import './App.css'
import About from "./components/About"
import Interests from "./components/Interests"

function App() {

  return (
    <div className="card">
      <div className="container">
        <Info/>
        <About/>
        <Interests/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
