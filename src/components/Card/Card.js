import Plot from '../Plot'
import './Card.css'

const Card = props => {
  return (
    <>
      {
        props.movie
          ? <div className='card text-white bg-primary mb-3 myCard'>
            <div className='card-header'>{props.movie.Title}</div>
            <div className='card-body'>
              <h5 className='card-title'>{props.movie.Director}</h5>
              <Plot
                plot={props.movie.Plot}
              />
            </div>
            </div>
          : null
     }
    </>
  )
}

export default Card
