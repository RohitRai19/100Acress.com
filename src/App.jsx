
import './App.css'
import Header from './Header/Header'
import Luxusury from './Project/Luxusury/Luxusury'
import Project from './Project/Project'
import {Gurgaon,FutureGurgaon,Delhi} from './Properties/Properties'
function App() {
 
  return (
    <>
<Header/>
<Project Img={Gurgaon} title={"UPCOMING PROJECTS IN GURGAON"} subtitle={"BUY UPCOMING PROJECTS IN GURGAON"}  />
<Project Img={FutureGurgaon} title={"LUXURY PROPERTY IN GURGAON"} subtitle={"BEST APARTMENTS TO BUY IN GURGAON"}ImageHeight={"300px"} />
<Project Img={Delhi} title={"PROPERTY IN DELHI"} subtitle={"BEST PROPERTY TO BUY IN DELHI"}  />
<Luxusury  title={"PROPERTY IN GURGAON"} subtitle={"LUXURIOUS PROPERTIES IN GURGAON"}/>
    </> 
  )
}

export default App
