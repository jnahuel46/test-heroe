import { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroById } from '../helpers';
import arrow from '../assets/dc-arrow.jpg';
import batman from '../assets/dc-batman.jpg';
import black from '../assets/dc-black.jpg';
import blue from '../assets/dc-blue.jpg';
import flash from '../assets/dc-flash.jpg';
import green from '../assets/dc-green.jpg';
import martian from '../assets/dc-martian.jpg';
import robin from '../assets/dc-robin.jpg';
import superman from '../assets/dc-superman.jpg';
import wonder from '../assets/dc-wonder.jpg';
import captain from '../assets/marvel-captain.jpg';
import cyclops from '../assets/marvel-cyclops.jpg';
import daredevil from '../assets/marvel-daredevil.jpg';
import hawkeye from '../assets/marvel-hawkeye.jpg';
import hulk from '../assets/marvel-hulk.jpg';
import iron from '../assets/marvel-iron.jpg';
import silver from '../assets/marvel-silver.jpg';
import spider from '../assets/marvel-spider.jpg';
import thor from '../assets/marvel-thor.jpg';
import wolverine from '../assets/marvel-wolverine.jpg';

export const HeroPage = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const hero = useMemo(() => getHeroById(id), [id]);

  const onNavigateBack = () => {
    navigate(-1);
  }

  let arrHeroes = [arrow, batman, black, blue, flash, green, martian, robin
    , superman, wonder, captain, cyclops, daredevil, hawkeye, hulk, iron, silver,
    spider, thor, wolverine]

  let imageHero

  const imageHeroFunc = (id) => {
    const found = arrHeroes.find(element => element.includes(id));
    imageHero = found
    return imageHero
  }

  if (!hero) {
    return <Navigate to="/marvel" />
  }

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={imageHeroFunc(id)}
          alt={hero.superhero}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>

      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"> <b>Alter ego:</b> {hero.alter_ego} </li>
          <li className="list-group-item"> <b>Publisher:</b> {hero.publisher} </li>
          <li className="list-group-item"> <b>First appearance:</b> {hero.first_appearance} </li>
        </ul>

        <h5 className="mt-3"> Characters </h5>
        <p>{hero.characters}</p>

        <button
          className="btn btn-outline-primary"
          onClick={onNavigateBack}
        >
          Regresar
        </button>

      </div>

    </div>
  )
}
