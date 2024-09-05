import React from 'react'

const MovieCard = ({movie}) => {

  const bgStyle = {
    width : '300px',
    height : '200px',
    backgroundImage : `url(https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${movie.poster_path})`
  }

  return (
    <div className='movie-card' style={bgStyle}>
      <div className='overlay'>
        <h1>영화제목</h1>
        <div className='genres'></div>
        <div className='info'>
          <span>평점 : {movie.vote_average}</span>
          <span>|</span>
          <span>{movie.adult ? '청소년 관람불가' : '청소년 관람가능'}</span>
        </div>
      </div>
    </div>
  )
}

export default MovieCard