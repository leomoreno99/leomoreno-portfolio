import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NavMenu } from './components/NavMenu';
import { Home } from './pages/Home'


function App() {
  return (
    <>
       <Router>
        <NavMenu />
        <Switch>
          <Route path="/">
            <Home />
           </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
