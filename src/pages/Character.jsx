import { React } from 'react';
import { Link } from 'react-router-dom';
import '../styles/main.scss';

const titleFormating = (str) => {
  return str.slice(0, 1).toUpperCase() + str.slice(1);
}

export const Character = () => {
  const id = (window.location.hash).split('/')[2] - 1;
  const allCharacters 
    = JSON.parse(localStorage.getItem("characters") || "[]");
  const currentCharacter = allCharacters[id];
  const titles = ['gender', 'status', 'species', 'origin', 'type'];

  return (
    <div className="page">
      <Link to="/" className="link">
        <span className='link__icon'></span>
        <h3 className="link__go-back">Go back</h3>
      </Link>

      <div className="character">
        <div
          className="character__image"
          style={{backgroundImage: `url(${currentCharacter.image})`}}
          alt={currentCharacter.name}>
        </div>
    
        <p className="character__name">{currentCharacter.name}</p>

        <div className="character__table table">
          <h6 className="table__info">Informations</h6>

          {titles.map(title => (
            <div className="table__row" key={title}> 
              <div className="table__row-title">
                {titleFormating(
                  title !== 'species' 
                    ? title
                    : title.slice(0, -1)
                )}
              </div>

              <div className="table__row-data">
                {titleFormating(
                  title !== 'origin' 
                    ? currentCharacter[`${title}`] 
                    : currentCharacter[`${title}`].name
                  ) || 'unknown'
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}