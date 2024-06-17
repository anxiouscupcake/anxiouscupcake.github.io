import { PATH_BLOCKY_PARKOUR, PATH_PORTFOLIO } from '../Constants'
import PortfolioCard from '../components/PortfolioCard'

function PortfolioPage() {
  return (
    <div className='portfolio-grid'>
      <PortfolioCard
        title='Blocky Parkour'
        href={`${PATH_PORTFOLIO}/${PATH_BLOCKY_PARKOUR}`}
      />
      <PortfolioCard
        title='Blocky Parkour'
        href={`${PATH_PORTFOLIO}/${PATH_BLOCKY_PARKOUR}`}
      />
      <PortfolioCard
        title='Blocky Parkour'
        href={`${PATH_PORTFOLIO}/${PATH_BLOCKY_PARKOUR}`}
      />{' '}
      <PortfolioCard
        title='Blocky Parkour'
        href={`${PATH_PORTFOLIO}/${PATH_BLOCKY_PARKOUR}`}
      />
      <PortfolioCard
        title='Blocky Parkour'
        href={`${PATH_PORTFOLIO}/${PATH_BLOCKY_PARKOUR}`}
      />
    </div>
  )
}

export default PortfolioPage
