import React from 'react'

class Search extends React.Component {
    state = {
        search: '',
        type: 'all'
    }
    hadleKey = (event) => {
        if (event.key === "Enter") {
            this.props.searchMovies(this.state.search, this.state.type)
        }
    }
    handleFilter = (event) => {
        this.setState(() => ({type: event.target.dataset.type}), () => {
            this.props.searchMovies(this.state.search, this.state.type)
        })
    }
    render(){
        return <div className='Search'>
            <input className='search_input' placeholder='Поиск' type='search' value={this.state.search} onChange={(e)=>this.setState({search: e.target.value})} onKeyDown={this.hadleKey}/>
            <button onClick={() => this.props.searchMovies(this.state.search)} className='search_button'>Найти фильм</button>
            <div className='type'>
                <label>
                    <input className='type--input' type='radio' name='type' data-type='all' onChange={this.handleFilter} checked={this.state.type==='all'} /> <span className='all'>Все</span>
                </label>
                <label>
                    <input className='type--input' type='radio' name='type' data-type='movie' onChange={this.handleFilter} checked={this.state.type==='movie'} /> <span className='films'>Фильмы</span>
                </label>
                <label>
                    <input className='type--input' type='radio' name='type' data-type='series' onChange={this.handleFilter} checked={this.state.type==='series'} /> <span className='series'>Сериалы</span>
                </label>
                <label>
                    <input className='type--input' type='radio' name='type' data-type='episode' onChange={this.handleFilter} checked={this.state.type==='episode'} /> <span className='episode'>Эпизоды</span>
                </label>
            </div>
        </div>
    }
}

export default Search