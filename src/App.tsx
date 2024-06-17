import './styles/App.css'
import Nav from './components/menu/Nav'
import LandingPage from './pages/LandingPage'
import ContactsPage from './pages/ContactsPage'
import PortfolioPage from './pages/PortfolioPage'
import CenteredHeader from './components/CentertedHeader'
import { Route, Switch } from 'wouter'

function App() {
  return (
    <>
      <Nav />
      <Switch>
        <Route path='/' component={LandingPage} />
        <Route path='/portfolio' component={PortfolioPage} />
        <Route path='/contacts' component={ContactsPage} />
        <Route>
          <CenteredHeader text='404: no such page' />
        </Route>
      </Switch>
    </>
  )
}

export default App
