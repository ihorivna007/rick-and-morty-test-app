import React from 'react';
import { Link } from 'react-router-dom';

export const Gallery = ({ characters }) => (
  characters
    .sort((a, b) => a.name.localeCompare(b.name))
    .map(character => (
      <div className='gallery__item item' key={character.id}>
        <Link to={`/character/${character.id}`} className='item__link'>
          <div>
            <div 
              className='item__image' 
              style={{backgroundImage: `url(${character.image})`}}
            ></div>

            <div className='item__title'>
              <h6 className='item__name'>{character.name}</h6>
              <p className='item__species'>{character.species}</p>
            </div>
          </div>
        </Link>
      </div>
    )
  )
);
