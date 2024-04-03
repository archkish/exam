import Counters from "./Counters";

export default function AboutHero() {
  return(
    <section className="about__hero">
      <div className="h-wrapp">
        <div className="hero_bg">
        </div>
        <div className="about__icon">
          <img src="../assets/images/about-icon.svg" alt="icon"/>
        </div>
        <div className="about__text">Scroll Down To See My Journey</div>
      </div>
      <div className="about-info">
        <div className="info-subtitle">About</div>
        <div className="info-name">About damien braun</div>
      </div>
      <Counters/>
      {/* <div className="about__numbers">
        <ul>
          <li>
            <div className="count"><span id="years"></span><span>+</span>
            </div>
            <div className="subtitle">Years in Business</div>
          </li>
          <li>
            <div className="count"><span id="clients"></span><span>+</span></div>
            <div className="subtitle">Happy Clients</div>
          </li>
          <li>
            <div className="count"><span id="awards"></span><span>+</span></div>
            <div className="subtitle">Photography Awards</div>
          </li>
          <li>
            <div className="count"><span>0</span><span id="shots"></span><span>+</span></div>
            <div className="subtitle">International Shots</div>
          </li>
          <li>
            <div className="count"><span id="followers"></span><span>+</span></div>
            <div className="subtitle">Social Media Followers</div>
          </li>
          <li>
            <div className="count"><span id="rate"></span><span>%</span></div>
            <div className="subtitle">Client Retention Rate</div>
          </li>

        </ul>
      </div>          */}
      <div className="about__biography">
        <div className="biography-title">my biography</div>
        <div className="biography-descr">Damien Braun's love affair with photography began at a young age, nurtured by the captivating landscapes and vibrant cultures surrounding her in the heart of the USA. Her passion for storytelling through imagery led her to embark on a photography journey that has spanned over 15 years.
          Driven by an insatiable curiosity to explore the beauty in everyday moments, Damien has honed her craft meticulously. Her background in digital media provided her with a solid foundation, but it's her keen eye for detail and an innate ability to capture raw emotions that truly set her apart.
          Damien's journey is more than just taking pictures; it's about capturing the essence of the human spirit, the fleeting magic of nature, and the emotions that define our lives. With each click of her camera, she weaves stories that transcend time and space.</div>
      </div>
    </section>
  )
}