import PortfolioCard from "../../components/PortfolioCard"
import { PATH_PORTFOLIO, PATH_BLOCKY_PARKOUR } from "../../Constants"


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
