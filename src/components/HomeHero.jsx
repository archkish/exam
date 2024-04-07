import { useState } from "react"
import Modal from "./Modal"

export default function HomeHero() {
  const [isShow, setIsShow] = useState(false)
  return (
    <section className="home__hero" id="home__hero">
      <div className="home__hero_top">
        <div className="top_info">
          <div className="info_subtitle">Stunning Photography by</div>
          <div className="info_name">Damien Braun</div>
        </div>
        <div className="general">
          <div className="block">
            <div className="top">
              <div className="text">Let's</div>
              <div className="top__btn">
                <button type="button" onClick={() => {setIsShow(true)}}>
                  <svg width="22" height="21" viewBox="0 0 22 21" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.3125 0.187501L20.375 0.1875C20.6236 0.1875 20.8621 0.286272 21.0379 0.462087C21.2137 0.637903 21.3125 0.87636 21.3125 1.125V15.1875C21.3125 15.7053 20.8928 16.125 20.375 16.125C19.8572 16.125 19.4375 15.7053 19.4375 15.1875V3.38833L2.28791 20.5379C1.9218 20.904 1.3282 20.904 0.962087 20.5379C0.595971 20.1718 0.595971 19.5782 0.962087 19.2121L18.1117 2.0625L6.3125 2.0625C5.79473 2.0625 5.375 1.64277 5.375 1.125C5.375 0.607234 5.79473 0.187501 6.3125 0.187501Z" fill="white"/>
                    </svg>                  
                </button>
              </div>
            </div>
            <div className="text">Work Together</div>
          </div>
        </div>
      </div>
      <div className="line">
  <div className="items-wrap">
  <div className="items marquee">
  <div className="item"><span>Event Photography</span></div>
  <div className="item"><span>Comercial Photography</span></div>
  <div className="item"><span>Product Photography</span></div>
  <div className="item"><span>Wedding Photography</span></div>
  <div className="item"><span>Landscape Photography</span></div>
  <div className="item"><span>Branding Photography</span></div>
  <div className="item"><span>Portrait Photography</span></div>
  </div>
  <div aria-hidden="true" className="items marquee">
  <div className="item"><span>Event Photography</span></div>
  <div className="item"><span>Comercial Photography</span></div>
  <div className="item"><span>Product Photography</span></div>
  <div className="item"><span>Wedding Photography</span></div>
  <div className="item"><span>Landscape Photography</span></div>
  <div className="item"><span>Branding Photography</span></div>
  <div className="item"><span>Portrait Photography</span></div>
  </div>
  </div>
  </div>
      <div className="home__hero_img">
        <img src="../assets/images/main-photo1.png" alt="hero-foto"/>
      </div>
  <Modal isShow={isShow} onClose={() => {setIsShow(false)}}> 
  </Modal>
  </section>
  )
}