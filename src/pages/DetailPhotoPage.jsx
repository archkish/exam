
import { useParams, useLocation } from 'react-router-dom';
import Galery from "../components/Galery"

export default function DetailPhotoPage() {
  const location = useLocation();
  let { id } = useParams();
  const slides = location.state?.slides;

  const product = slides?.find((slide) => slide.id === id);
  
    if (typeof product === 'undefined') {
      return <div>Товар не знайдено</div>;
    }

    return (
      <div className='container'>
        <div className="detail">
        <h2 className="detail-title">{product.title}</h2>
        <p className='detail-date'>Дата: {product.date}</p>
        <div className='detail-wrapp'>
          <Galery fetchUrl={product.fotos}/>
          </div>
        </div>
      </div>
    );
}