import Galery from "./Galery"
export default function PortfolioGalery() {

  return(
    <section className="portfolio__galery">
        <div className="portfolio-tile">
          <div className="galery__title">Portraits Photography</div>
          <div className="portfolio-block">
            <Galery/>
          </div>
        </div>
        <div className="portfolio-tile">
          <div className="galery__title">Portraits Photography</div>
          <div className="portfolio-block">
            <Galery/>
          </div>
        </div>
        <div className="portfolio-tile">
          <div className="galery__title">Portraits Photography</div>
          <div className="portfolio-block">
            <Galery/>
          </div>
        </div>
    </section>
  )
}