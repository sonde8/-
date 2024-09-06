import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../api'
import { Badge } from 'react-bootstrap'

const MovieDetail = () => {

  // /movies/123 -> useParams() 고유한 값일 때
  // /movies?id=1234 -> useSearchParams()

  const { id } = useParams()
  // console.log(id);

  // movie의 detail과 review는 다른 페이지에서 필요하지 않고, 이 페이지에서만 필요
  // => 이런 경우 Redux 쓸 필요가 없음, state로 단순 처리

  const [detail, setDetail] = useState()
  const [review, setReview] = useState([])

  const getMovieDetail = async () => {
    // https://api.themoviedb.org/3/movie/{movie_id}
    let res = await api.get(`/movie/${id}?language=ko`)
    // console.log(res);
    setDetail(res.data)
  }

  const getMovieReviews = async () => {
    // https://api.themoviedb.org/3/movie/{movie_id}/reviews
    let res = await api.get(`/movie/${id}/reviews`)
    console.log(res.data.results);
    setReview(res.data.results)
    
  }

  useEffect(() => {
    getMovieDetail()
    getMovieReviews()
  }, [])

  return (
    <div>
      {detail && (<>
        {/* 영화 상세 */}
        <div className='container movie-detail'>
          <div className='poster'>
            <img src={`https://www.themoviedb.org/t/p/original${detail.poster_path}`} />
          </div>
          <div className='info'>
            <div className='genre'>
              {detail.genres.map(item => (
                <Badge bg='danger' key={item.id}>{item.name}</Badge>
              ))}
            </div>
            <h1>{detail.title}</h1>
            <h4>{detail.tagline}</h4>
            <div>
              <span>{detail.release_date}</span>
              <span>{detail.runtime}분</span>
              <span>{detail.vote_average}점</span>
              <span>{detail.adult ? '청소년 관람불가' : '청소년 관람가능'}</span>
            </div>
            <div className='overview'>
              {detail.overview}
            </div>

          </div>


        </div>
      </>)}


      {/* 영화 리뷰 */}
      <div className='container review-box'>
        {review.map(item => 
          <div key={item.id} className='review-item'>
            <h4>{item.author}</h4>
            <p>{item.content}</p>
          </div>)}
      </div>
    </div>
  )
}

export default MovieDetail