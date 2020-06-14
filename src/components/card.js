import React, {useState, useEffect} from 'react'

function Card(props) {
    useEffect(() => {
        fetchHero();
      })
      const [hero, sethero] = useState({
          images:{},
          appearance:{},
      });
      const fetchHero = async () => {
          const data = await fetch(`https://akabab.github.io/superhero-api/api/id/${props.id}.json`);
          const hero = await data.json();
          sethero(hero)
        }
     
     
    return (
            <div className="card">
               {/*<img src={hero.images.sm} alt=""/>*/}
                <h1>{hero.name}</h1>
                <h2>{hero.appearance.gender}</h2>
                <h2>{hero.appearance.race}</h2>


            </div>
    )
}

export default Card
