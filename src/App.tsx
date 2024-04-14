import './styles/App.css'
import Nav from './components/menu/Nav'
import Landing from './pages/Landing'
import Contacts from './pages/Contacts'
import Portfolio from './pages/Portfolio'
import CenteredHeader from './components/CentertedHeader'
import { Route, Switch } from 'wouter'

function App() {
  return (
    <>
      <Nav />
      <Switch>
        <Route path='/' component={Landing} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/contacts' component={Contacts} />
        <Route>
          <CenteredHeader text='404: no such page' />
        </Route>
      </Switch>
    </>
  )
}

export default App
