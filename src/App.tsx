import './styles/App.css'
import Nav from './components/menu/Nav'
import LandingPage from './pages/LandingPage'
import ContactsPage from './pages/ContactsPage'
import PortfolioPage from './pages/PortfolioPage'
import CenteredHeader from './components/CentertedHeader'
import { Route, Switch } from 'wouter'
import BlockyParkourPage from './pages/portfolio/BlockyParkourPage'
import { PATH_BLOCKY_PARKOUR, PATH_PORTFOLIO } from './Constants'

function App() {
  return (
    <>
      <Nav />
      <Switch>
        <Route path='/' component={LandingPage} />
        <Route path={`/${PATH_PORTFOLIO}`} component={PortfolioPage} />
        <Route
          path={`/${PATH_PORTFOLIO}/${PATH_BLOCKY_PARKOUR}`}
          component={BlockyParkourPage}
        />
        <Route path='/contacts' component={ContactsPage} />
        <Route>
          <CenteredHeader text='404: no such page' />
        </Route>
      </Switch>
    </>
  )
}

export default App
