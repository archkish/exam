import { Link, NavLink} from "react-router-dom";
import { useState } from "react"
import Modal from "./Modal";


export default function SiteFooter() {
  const [isShow, setIsShow] = useState(false)

  return (
    <footer id="footer">
    <div className="container">
      <div className="footer__name">
        <div>
          <img src="../assets/images/Damien-name 1.png" alt="name"/>
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
      <div className="footer__wrapper">
        <div className="general">
          <div className="subtitle">A more meaningful home for photography</div>
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
        <div className="footer__nav">
          <nav>
            <ul className="main__nav">
              <li className="nav__item"> 
                <NavLink to="/">Home</NavLink>
                <ul>
                  <li><NavLink to="about">About me</NavLink></li>
                  <li><NavLink to="">My works</NavLink></li>
                  <li><a href="">Testimonials</a></li>
                </ul>
              </li>
              <li className="nav__item"> <a href="">Portfolio</a>
                <ul>
                  <li><a href="">Events</a></li>
                  <li><a href="">Portrait</a></li>
                  <li><a href="">Branding</a></li>
                  <li><a href="">Commerciale</a></li>
                  <li><a href="">Wedding</a></li>
                </ul>
              </li>
              <li className="nav__item"><a href="">Services</a>
                <ul>
                  <li><a href="">Portraits</a></li>
                  <li><a href="">Events</a></li>
                  <li><a href="">Commercial</a></li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="bottom">
        <div className="bottom-text">
          <ul>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="bottom-links">
          <ul>
            <li><a href="https://www.facebook.com/" target="_blank" title="facebook">
                <svg width="20.000000" height="20.000000" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <clip-path id="clip97_294">
                      <rect id="Icon" width="20.000000" height="20.000000" fill="white" fill-opacity="0"/>
                    </clip-path>
                  </defs>
                  <rect id="Icon" width="20.000000" height="20.000000" fill="#FFFFFF" fill-opacity="0"/>
                  <g clip-path="url(#clip97_294)">
                    <path id="Vector" d="M20 10C20 4.47705 15.5229 0 10 0C4.47705 0 0 4.47705 0 10C0 14.9912 3.65674 19.1284 8.4375 19.8784L8.4375 12.8906L5.89844 12.8906L5.89844 10L8.4375 10L8.4375 7.79688C8.4375 5.29053 9.93066 3.90625 12.2148 3.90625C13.3086 3.90625 14.4531 4.10156 14.4531 4.10156L14.4531 6.5625L13.1924 6.5625C11.9502 6.5625 11.5625 7.3335 11.5625 8.125L11.5625 10L14.3359 10L13.8926 12.8906L11.5625 12.8906L11.5625 19.8784C16.3433 19.1284 20 14.9912 20 10Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="nonzero"/>
                  </g>
                </svg>          
              </a>
            </li>
            <li><a href="https://twitter.com/" target="_blank" title="twitter">
              <svg width="20.000000" height="16.250488" viewBox="0 0 20 16.2505" fill="none" xmlns="http://www.w3.org/2000/svg" >
                <defs/>
                <path id="Vector" d="M6.29199 16.2505C13.8369 16.2505 17.9653 9.99805 17.9653 4.57715C17.9653 4.40137 17.9614 4.22168 17.9536 4.0459C18.7563 3.46533 19.4497 2.74561 20 1.92188C19.252 2.25439 18.458 2.47168 17.645 2.56641C18.501 2.05322 19.1421 1.24707 19.4492 0.296875C18.6436 0.774414 17.7632 1.11133 16.8447 1.29297C16.2256 0.635254 15.4077 0.199707 14.5166 0.0541992C13.6255 -0.0917969 12.7109 0.0600586 11.9146 0.48584C11.1187 0.911621 10.4849 1.58789 10.1113 2.41016C9.73828 3.23242 9.646 4.1543 9.84961 5.03418C8.21875 4.95215 6.62305 4.52881 5.1665 3.79053C3.70996 3.05273 2.4248 2.0166 1.39404 0.75C0.870117 1.65332 0.709961 2.72217 0.945801 3.73926C1.18164 4.75586 1.7959 5.64502 2.66357 6.22559C2.01221 6.20508 1.375 6.0293 0.804688 5.71387L0.804688 5.76465C0.804199 6.7124 1.13184 7.63086 1.73193 8.36475C2.33203 9.09814 3.16797 9.60107 4.09668 9.78809C3.49316 9.95312 2.85986 9.97705 2.24561 9.8584C2.50781 10.6733 3.01807 11.3862 3.70459 11.8975C4.3916 12.4087 5.2207 12.6929 6.07715 12.71C4.62354 13.8516 2.82861 14.4707 0.980469 14.4678C0.652832 14.4673 0.325195 14.4473 0 14.4077C1.87744 15.6123 4.06104 16.252 6.29199 16.2505Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="nonzero"/>
              </svg>
              </a>
            </li>
            <li><a  href="https://www.linkedin.com/" target="_blank" title="twitter">
                <svg width="20.000000" height="20.000000" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" >
                  <defs/>
                  <path id="Vector" d="M18.5195 0L1.47656 0C0.660156 0 0 0.644531 0 1.44141L0 18.5547C0 19.3516 0.660156 20 1.47656 20L18.5195 20C19.3359 20 20 19.3516 20 18.5586L20 1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043L2.96484 17.043L2.96484 7.49609L5.93359 7.49609L5.93359 17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42188 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043L14.0781 17.043L14.0781 12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242L10.7578 17.043L7.79688 17.043L7.79688 7.49609L10.6406 7.49609L10.6406 8.80078L10.6797 8.80078C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047L17.043 17.043Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="nonzero"/>
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <div className="bottom-text">&copy;2024 Damien Braun Photography. All rights reserved.</div>
      </div>
    </div>
    <Modal isShow={isShow} onClose={() => {setIsShow(false)}}> 
    </Modal>
  </footer>
  )
}