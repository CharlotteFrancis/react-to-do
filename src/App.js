import './App.css'
import Jumbotron from './components/Jumbotron'
import Form from './components/Form'
import List from './components/List'
import Card from './components/Card'

const movies = [
  { Title: 'Goodfellas', Year: '1990', Rated: 'R', Released: '21 Sep 1990', Runtime: '146 min', Genre: 'Biography, Crime, Drama', Director: 'Martin Scorsese', Writer: 'Nicholas Pileggi (book), Nicholas Pileggi (screenplay), Martin Scorsese (screenplay)', Actors: 'Robert De Niro, Ray Liotta, Joe Pesci, Lorraine Bracco', Plot: 'The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.', Language: 'English, Italian', Country: 'USA', Awards: 'Won 1 Oscar. Another 43 wins & 38 nominations.', Poster: 'https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg', Ratings: [{ Source: 'Internet Movie Database', Value: '8.7/10' }, { Source: 'Rotten Tomatoes', Value: '96%' }, { Source: 'Metacritic', Value: '90/100' }], Metascore: '90', imdbRating: '8.7', imdbVotes: '1,047,519', imdbID: 'tt0099685', Type: 'movie', DVD: '15 Aug 2008', BoxOffice: '$46,836,214', Production: 'Warner Brothers', Website: 'N/A', Response: 'True' },
  { Title: 'The Room', Year: '2003', Rated: 'R', Released: '27 Jun 2003', Runtime: '99 min', Genre: 'Drama', Director: 'Tommy Wiseau', Writer: 'Tommy Wiseau', Actors: 'Tommy Wiseau, Juliette Danielle, Greg Sestero, Philip Haldiman', Plot: "Johnny is a successful bank executive who lives quietly in a San Francisco townhouse with his fiancée, Lisa. One day, putting aside any scruple, she seduces Johnny's best friend, Mark. From there, nothing will be the same again.", Language: 'English', Country: 'USA', Awards: '1 win.', Poster: 'https://m.media-amazon.com/images/M/MV5BYjEzN2FlYmYtNDkwMC00NGFkLWE5ODctYmE5NmYxNzE2MmRiXkEyXkFqcGdeQXVyMjMwODc5Mw@@._V1_SX300.jpg', Ratings: [{ Source: 'Internet Movie Database', Value: '3.7/10' }, { Source: 'Rotten Tomatoes', Value: '24%' }, { Source: 'Metacritic', Value: '9/100' }], Metascore: '9', imdbRating: '3.7', imdbVotes: '83,978', imdbID: 'tt0368226', Type: 'movie', DVD: 'N/A', BoxOffice: '$549,602', Production: 'Chloe Productions, Wiseau-Films, TPW Films', Website: 'N/A', Response: 'True' },
  { Title: 'The Rocky Horror Picture Show', Year: '1975', Rated: 'R', Released: '31 Aug 1975', Runtime: '100 min', Genre: 'Comedy, Musical', Director: 'Jim Sharman', Writer: "Richard O'Brien (original musical play), Jim Sharman (screenplay), Richard O'Brien (screenplay)", Actors: "Tim Curry, Susan Sarandon, Barry Bostwick, Richard O'Brien", Plot: 'A newly-engaged couple have a breakdown in an isolated area and must seek shelter at the bizarre residence of Dr. Frank-n-Furter.', Language: 'English', Country: 'UK, USA', Awards: '4 wins & 5 nominations.', Poster: 'https://m.media-amazon.com/images/M/MV5BOGIzYjM3YzMtMjk5ZS00NDY2LTllMjEtNjYwZjhmMDNhMDBkXkEyXkFqcGdeQXVyODUzMjQxMTA@._V1_SX300.jpg', Ratings: [{ Source: 'Internet Movie Database', Value: '7.4/10' }, { Source: 'Rotten Tomatoes', Value: '79%' }, { Source: 'Metacritic', Value: '65/100' }], Metascore: '65', imdbRating: '7.4', imdbVotes: '135,511', imdbID: 'tt0073629', Type: 'movie', DVD: '25 Nov 2015', BoxOffice: '$112,892,319', Production: 'Twentieth Century Fox', Website: 'N/A', Response: 'True' }
]

const App = () => {
  return (
    <div className='container text-center'>
      <div className='row justify-content-center'>
        <Jumbotron />
        <Form />

        <List />
        {
          movies.map((movie, i) => (
            <Card
              key={i}
              movie={movie}
            />
          ))
        }

      </div>
    </div>
  )
}

export default App;
