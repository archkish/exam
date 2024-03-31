import { Link } from "react-router-dom";
import { useEffect, useState} from "react";

export default function ServicesBottomBlock({fetchUrl}) {

  const [blocks, setBlocks] = useState([])

  const fetchBlocks = async () => {
    const response = await fetch(fetchUrl);
    const json = await response.json();
    setBlocks(json)
  }

  useEffect(()=>{
    fetchBlocks(fetchUrl)
  }, [])

  return (
    <div class="card">
      <div class="card-info">
        <div class="card-title">{blocks[0]?.name}</div>
        <div class="card-bottom">
          <div class="card-price">$ {blocks[0]?.price}</div>
          <div class="card-link">
            <Link to="/portfolio">
              <span>viev project</span>
              <svg width="22" height="21" viewBox="0 0 22 21" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M6.3125 0.187501L20.375 0.1875C20.6236 0.1875 20.8621 0.286272 21.0379 0.462087C21.2137 0.637903 21.3125 0.87636 21.3125 1.125V15.1875C21.3125 15.7053 20.8928 16.125 20.375 16.125C19.8572 16.125 19.4375 15.7053 19.4375 15.1875V3.38833L2.28791 20.5379C1.9218 20.904 1.3282 20.904 0.962087 20.5379C0.595971 20.1718 0.595971 19.5782 0.962087 19.2121L18.1117 2.0625L6.3125 2.0625C5.79473 2.0625 5.375 1.64277 5.375 1.125C5.375 0.607234 5.79473 0.187501 6.3125 0.187501Z" fill="white"/>
              </svg>  
            </Link>
          </div>
        </div>
      </div>
      <div class="card-list">
      <ul>
        {blocks.map((block, index) => (
          <li key={index}>
            {Object.entries(block.services).map(([key, value]) => (
              <span key={key}>{value}</span>
            ))}
          </li>
        ))}
      </ul>
      </div>
    </div>
  )
}