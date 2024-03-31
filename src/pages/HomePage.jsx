
import HomeHero from "../components/HomeHero"
import HomeAbout from "../components/HomeAbout"
import HomeServices from "../components/HomeServices"
import HomePortfolio from "../components/HomePortfolio"
import SiteFaqs from "../components/SiteFaqs"
import SiteReviews from "../components/SiteReviews"

export default function HomePage() {
  return(
      <div className="container">
        <HomeHero/> 
        <HomeAbout/> 
        <HomeServices/>
        <HomePortfolio/>
        <SiteFaqs/>
        <SiteReviews/>
      </div>
  )
}