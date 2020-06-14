import React, { useEffect, useState } from "react";

var heshe = "she";
var hisher = "her";
function Info(props) {
  useEffect(() => {
    fetchHero();
  });
  const [hero, sethero] = useState({
    images: {},
    powerstats: {},
    connections: {},
    biography: {
      alterEgos: [],
    },
    appearance: {
      height: [],
      weight: [],
    },
  });
  const fetchHero = async () => {
    const data = await fetch(
      `https://akabab.github.io/superhero-api/api/id/${props.match.params.id}.json`
    );
    const hero = await data.json();
    sethero(hero);
    if (hero.appearance.gender === "Male") {
      heshe = "he";
      hisher = "his";
    }
  };
  return (
    <div className="wrapper">
      <div className="header">
        <img src={hero.images.sm} alt="" />
        <div>
          <h1>{hero.name}</h1>
          <p>
            {heshe} made {hisher} first appearace on{" "}
            <i style={{ color: "white" }}>{hero.biography.firstAppearance}</i>{" "}
            as a {hero.biography.alignment} character<br></br>
            {hisher} full name was {hero.biography.fullName} and is a part of{" "}
            {hero.connections.groupAffiliation}​{" "}
          </p>
        </div>
        <span className='block'>

        </span>
      </div>
      <div className="content">
        <table className='powerstats'>
          <tr>
            <td>
              <label htmlFor="durability">Durability :</label>
            </td>
            <td>
              <progress
                id="durability"
                value={hero.powerstats.durability}
                max="100"
              ></progress>
              <br></br>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="intelligence">Intelligence :</label>
            </td>
            <td>
              <progress
                id="intelligence"
                value={hero.powerstats.intelligence}
                max="100"
              >
                {" "}
              </progress>
              <br></br>
            </td>
          </tr>

          <tr>
            <td>
              <label htmlFor="power">Power</label>
            </td>
            <td>
              <progress id="power" value={hero.powerstats.power} max="100">
                {" "}
              </progress>
              <br></br>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="combat">combat :</label>
            </td>
            <td>
              <progress id="combat" value={hero.powerstats.combat} max="100">
                {" "}
              </progress>
              <br></br>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="speed">Speed :</label>
            </td>
            <td>
              <progress id="speed" value={hero.powerstats.speed} max="100">
                {" "}
              </progress>
              <br></br>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="strength">Strength :</label>
            </td>
            <td>
              <progress
                id="strength"
                value={hero.powerstats.strength}
                max="100"
              >
                {" "}
              </progress>
              <br></br>
            </td>
          </tr>
        </table>
      </div>
      <div className="footer">
        Made with ❤️ by Mohan
      </div>
    </div>
  );
}

export default Info;
