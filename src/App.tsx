import './styles/App.css'
import ContactsPage from './pages/ContactsPage'
import PortfolioPage from './pages/PortfolioPage'
import CenteredHeader from './components/CentertedHeader'
import { Route, Switch } from 'wouter'
import BlockyParkourPage from './pages/portfolio/BlockyParkourPage'
import { PATH_BLOCKY_PARKOUR, PATH_PORTFOLIO } from './Constants'
import ResumePage from './pages/ResumePage'

function App() {
  return (
    <>
      {/* <Nav /> */}
      <Switch>
        <Route path='/' component={ResumePage} />
        <Route path='/resume' component={ResumePage} />
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
