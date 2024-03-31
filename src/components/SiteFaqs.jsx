import AccordionItem from "./AccordionItem"
import SiteAccordion from "./SiteAccordion"

export default function SiteFaqs() {
  return(
    <section className="faqs">
      <div className="about-top">
        <div className="top-info">
          <div className="info-subtitle">FAQ’s</div>
          <div className="info-name">Frequently Asked Questions</div>
        </div>
      </div>
      <SiteAccordion/>
      {/* <div className="accordion">
        <div className="accordion-content">
          <div className="question">
            <div className="title">What type of photography do you specialize in?</div>
            <button className="btn"><span className="down"></span></button>
          </div>
          <div className="answer">
            I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories.
          </div>
        </div>
        <div className="accordion-content">
          <div className="question">
            <div className="title">Do you offer prints of your photographs?</div>
            <button className="btn"><span className="down"></span></button>
          </div>
          <div className="answer">
            Yes, prints are available for purchase. Explore the 'Prints' section for more details on sizes and pricing.
          </div>
        </div>
        <div className="accordion-content">
          <div className="question">
            <div className="title">How can I book a photography session with you?</div>
            <button className="btn"><span className="down"></span></button>
          </div>
          <div className="answer">
            I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories.
          </div>
        </div>
        <div className="accordion-content">
          <div className="question">
            <div className="title">What equipment do you use for your photography?</div>
            <button className="btn"><span className="down"></span></button>
          </div>
          <div className="answer">
            I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories.
          </div>
        </div>
        <div className="accordion-content">
          <div className="question">
            <div className="title">How long does it take to receive the edited photos after a session?</div>
            <button className="btn"><span className="down"></span></button>
          </div>
          <div className="answer">
            I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories.
          </div>
        </div>
      </div> */}
    </section>
  )
}