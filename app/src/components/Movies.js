import Movie from "./Movie"

function Movies(props) {
    const {movies} = props
    return <div className="movies">
        {movies.lenghth ? movies.map(movie => 
            <Movie key={movie.imdbID} {...movie}/>
        ): <h3 className="error">Таких фильмов не найдено</h3>}
    </div>
}

export default Movies