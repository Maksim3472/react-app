function Movie(props) {
    const {Title, Year, imdbID, Type, Poster} = props
    return (
        <div className="movie" id={imdbID}>
            <img src={Poster} />
            <h4>{Title}</h4>
            <span>{Year}</span>
            <span>{Type}</span>
        </div>
    )
}

export default Movie