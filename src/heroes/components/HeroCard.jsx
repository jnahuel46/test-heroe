import { Link } from 'react-router-dom';
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

const CharactersByHero = ({ alter_ego, characters }) => {
    // if ( alter_ego === characters ) return (<></>);
    // return <p>{ characters }</p>
    return (alter_ego === characters)
        ? <></>
        : <p>{characters}</p>;
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

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {

    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card">

                <div className="row no-gutters">

                    <div className="col-4">
                        <img src={imageHeroFunc(id)} className="card-img" alt={superhero} />
                    </div>

                    <div className="col-8">

                        <div className="card-body">

                            <h5 className="card-title">{superhero}</h5>
                            <p className="card-text">{alter_ego}</p>

                            <CharactersByHero characters={characters} alter_ego={alter_ego} />

                            <p className="card-text">
                                <small className="text-muted">{first_appearance}</small>
                            </p>

                            <Link to={`/hero/${id}`}>
                                More..
                            </Link>


                        </div>

                    </div>


                </div>

            </div>
        </div>
    )
}
