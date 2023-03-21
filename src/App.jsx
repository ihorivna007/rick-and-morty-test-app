import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
  
import { Home } from './pages/Home';
import { ErrorPage } from './pages/ErrorPage';
import { Character } from './pages/Character';

export class App extends React.Component {
  render() {
    return (
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/character/:id' element={<Character />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    );
  }
}

