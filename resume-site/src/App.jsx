import './App.css'
import {Route, useNavigate} from 'react-router-dom'
import About from './assets/About.jsx'

function App() {

  //consts
  const navigate = useNavigate();
  //routes
  <Route path='/about' element={About} />

 return(

    <div className='nameBox'>
      <h1 className='nameplate'>Brynn Landry</h1>
      <div className='buttonBox'>
        <button onClick={goToAbout} className='homeBtn'>About Me</button>
        
        <button className='homeBtn'>Projects</button>
        
        <button className='homeBtn'>Experience</button>


      </div>
    </div>

  )

  function goToAbout() {
     navigate('/about');
    }

}

export default App
