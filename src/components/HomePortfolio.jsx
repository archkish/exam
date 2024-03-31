
import PortfolioSlider from "./PortfolioSlider"


export default function HomePortfolio() {
  return(
    <section className="home__portfolio">
      <div className="about-top">
        <div className="top-info">
          <div className="info-subtitle">Portfolio</div>
          <div className="info-name">Explore My photography work</div>
        </div>
        <div className="btn-wrapp">
          {/* <div className="rev-top-btn">
            <button type="button"><span className="left"></span></button>
            <button type="button"><span className="right"></span></button>
          </div> */}
          {/* <div className="header__btn">
              <Link to="portfolio">View All Works &rarr;</Link>
          </div> */}
        </div>
      </div>
      <PortfolioSlider/>
    </section>
  )
}