import React, {useState} from 'react';
import Search from './components/Search';
import MovieList from './components/MovieList';
import {movies} from './components/data.js'
import './App.css';
import AddMovie from './components/AddMovie';

function App() {
  const [movie, setMovie] = useState(movies);
  const [searchRate, setSearchRate] = useState(1)
  const [searchValue, setSearchValue] = useState('')

  const handleSearch = (e) => setSearchValue(e.target.value);

  const handleSearchRate = (newRate) => setSearchRate(newRate);

  const add = newMovie => setMovie([...movie, newMovie])
  
  return (
    <div className="App">
      <Search 
      searchValue={searchValue}
      handleSearch={handleSearch}
      searchRate={searchRate}
      handleSearchRate={handleSearchRate} />
      <MovieList movieList={movie.filter((movie) => movie.title.toLowerCase().includes(searchValue.toLocaleLowerCase())
        && movie.rate >= searchRate
        )} />
      <AddMovie handleAdd={add} />
    </div>
  );
}

export default App;
