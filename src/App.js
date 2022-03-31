import { NavMenu } from "./components/NavMenu";
import { Home } from "./pages/Home";

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

  return (
    < >
      <div onClick={()=>cambiarColor()} >
        <NavMenu />
        <Home />
      </div>
    </>
  );
}

export default App;
