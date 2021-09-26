import RhodesianInfoPage from './pages/rhodesian';
import Index from './pages';
import './styles/styles.css';
import {BrowserRouter as Router,  Switch,  Route,  Link} from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/rhodesian'>
            <RhodesianInfoPage/>
          </Route>
          <Route path='/'>
            <Index/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}


export default App;
