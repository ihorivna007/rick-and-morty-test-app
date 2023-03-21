import React from 'react';
import '../styles/main.scss';
import { Gallery } from './Gallery';
import { getCharacters } from '../helpers/getCharacters';


export let charactersFromServer = [];

export class Home extends React.Component {
  state = {
    characters: [],
  };
  
  async componentDidMount() {
    charactersFromServer = await getCharacters();
    localStorage.setItem('characters', JSON.stringify(charactersFromServer));
    this.setState({ characters: charactersFromServer });

    const filter = localStorage.getItem('filter');
    this.keepFilterLogic(filter);
    document.querySelector('.filterbar__input').setAttribute('value', filter);
  }

  inputProcessing = (event) => {
    const inputData = event.target.value.toLowerCase();

    this.keepFilterLogic(inputData);
    localStorage.setItem('filter', inputData);
  }

  keepFilterLogic = (data) => {
    this.setState({
      characters: charactersFromServer.filter(
        character => character.name.toLowerCase().includes(data)
      ),
    });
  }

  componentDidUpdate() {
    document.addEventListener('input', this.inputProcessing);
  }

  render() {
    const {characters} = this.state;

    return (
      <div className='home page'>
        <div className='home__header header'>
          <img 
            src={require('../images/logo.png')} 
            className='header__logo' 
            alt='Rick and Morty'
          />
        </div>

        <div className='home__filterbar filterbar'>
          <span className='filterbar__icon'></span>
          <input 
            type='search' 
            className='filterbar__input'
            placeholder='Filter by name...'
            onChange={this.inputProcessing}
          ></input>
        </div>

        <div className='home__gallery gallery'>
          {characters.length > 0 && <Gallery characters={characters} />}
        </div>
      </div>
    );
  }
}