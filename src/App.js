// import { NavMenu } from "./components/NavMenu";
import {useEffect} from 'react'
import { NavMenuNew } from "./components/NavMenuNew";
import { Home } from "./pages/Home";

const authenticate = () => {
  return new Promise(resolve => setTimeout(resolve, 2000)) // 2 seconds
}

function App() {
  const cambiarColor = () => {
    let clase = document.body.className
    let i = 0
      do{
        const num = Math.floor(Math.random() * (6 - 1)) + 1;
        if (clase !== `theme${num}`){
          document.body.className = `theme${num}`
          i = 1
        }
      }while(i===0)
    
  }

  useEffect(()=>{
    authenticate().then(() => {
      const ele = document.getElementById('ipl-progress-indicator')
      if(ele){
        ele.classList.add('available')
        setTimeout(() => {
          ele.outerHTML = ''
        }, 2000)
      }
    })
  },[])

  return (
    < >
      <div onClick={()=>cambiarColor()} >
        {/* <NavMenu /> */}
        <NavMenuNew />
        <Home />
      </div>
    </>
  );
}

export default App;
