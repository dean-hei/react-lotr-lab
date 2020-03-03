import React, {Component} from "react";
import './App.css';

let movieInfo = [
    {
        title: "The Fellowship of the Ring",
        hours: 2,
        minutes: 28
    },
    {
        title: "The Two Towers",
        hours: 2,
        minutes: 59
    },
    {
        title: "The Return of the King",
        hours: 3,
        minutes: 21
    }
]

class Movie extends Component {
    render () {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.hours}h {this.props.minutes}min</p>
            </div>
        )
    }
}

class MovieList extends Component {
    render () {
        let movies = [];
        movieInfo.forEach((movie, index) => {
            movies.push(<Movie title={movie.title} hours={movie.hours} minutes={movie.minutes} />);
        })
        return (
            <div>
                {movies}
            </div>
        )
    }
}

export default function App() {
    return (
        <MovieList />
    )
}