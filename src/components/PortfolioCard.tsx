type PortfolioCardProps = {
  title: string
  href: string
}

function PortfolioCard({
  title = 'Portfolio card',
  href = '#',
}: PortfolioCardProps) {
  return (
      <div className='portfolio-card'><a href={href}>
        {title}</a></div>
  )
}

export default PortfolioCard
