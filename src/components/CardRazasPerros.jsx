import {Link} from "react-router-dom";


function CardRazasPerros({ nombreRaza, imagen }) {
  return (
    <Link to="/rhodesian">
      <li className='breedCard'>
        <div className='contenedorImagen'>
          <img src={imagen} alt={nombreRaza} />
        </div>
        <span className='breedTitle'>{nombreRaza}</span>
      </li>
    </Link>

  );
}

export default CardRazasPerros;