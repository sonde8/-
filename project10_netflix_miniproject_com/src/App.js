import './App.css';
import Header from './components/Header'
import Home from './pages/Home'
import MovieDetail from './pages/MovieDetail'
import Movies from './pages/Movies'
import { Routes, Route } from 'react-router-dom';

function App() {


  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/movie/:id' element={<MovieDetail/>}></Route>
        <Route path='/movies' element={<Movies/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
