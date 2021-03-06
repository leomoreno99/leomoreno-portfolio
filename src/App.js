// import { NavMenu } from "./components/NavMenu";
import {useEffect, useState} from 'react'
import { Route, Switch } from 'react-router-dom';
import { PageNotFound } from './pages/PageNotFound';
import { Home } from "./pages/Home";
const cantTemas = 5
let num = Math.floor(Math.random() * (cantTemas)) + 1;

document.body.className = `theme${num}`

const authenticate = () => {
  return new Promise(resolve => setTimeout(resolve, 2000)) // 2 seconds
}

function App() {
  const [tema, getTema] = useState('theme1')

  const cambiarColor = () => {
    num === 5 ? num = 1 : num++
    document.body.className = `theme${num}`
    getTema(document.body.className)
  }

  useEffect(()=>{
    authenticate().then(() => {
      const ele = document.getElementById('ipl-progress-indicator')
      if(ele){
        ele.classList.add('available')
        setTimeout(() => {
          ele.outerHTML = ''
          getTema(document.body.className)
        }, 2000)
      }
    })
  },[])

  return (
    < >
      <div onClick={()=>cambiarColor()} >
        <Switch>
          <Route exact path={"/"}>
            <Home tema={tema} />
          </Route>
          <Route path={"*"} component={PageNotFound} />
        </Switch>
      </div>
    </>
  );
}

export default App;
