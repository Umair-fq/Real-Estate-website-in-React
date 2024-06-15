import {Route, Switch} from 'react-router-dom';
import Home from './Pages/Home';
import PropertyDetails from './Components/PropertyDetails/PropertyDetails'
function App() {

  return (
    <>
      <Switch>
        <Route exact path = '/'>
          <Home />
          </Route>
        <Route exact path = '/house/:id'>
          <PropertyDetails /> 
        </Route>
      </Switch>
    </>
  )
}

export default App
