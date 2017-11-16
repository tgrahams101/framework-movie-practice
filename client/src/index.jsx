import React from 'react';
import ReactDOM  from 'react-dom';
import Movie from './components/Movie.jsx';
import Search from './components/Search.jsx';
import AddMovie from './components/AddMovie.jsx';

var movies = [
  {title: 'Mean Girls', description: 'A story about mean girls', watched: false},
  {title: 'Hackers', description: 'A day in the life of a hacker', watched: false},
  {title: 'The Grey', description: 'Don\'t stay out in the wild!', watched: false},
  {title: 'Sunshine', description: 'So much sunshine!', watched: false},
  {title: 'Ex Machina', description: 'Machines go rogue', watched: false},
];


class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {movies: movies, watchedOnly: null};
    console.log(props.list);
  }

  doSearch(input) {
    console.log('THE INPUT', input);
    var moviesFilter = movies.filter(function(object, index) {

      console.log('THE INPUT', input)

      return object.title.toLowerCase().match(input.toLowerCase());


    });
    console.log('THE MOVIE FILTER', moviesFilter);

    this.setState({movies: moviesFilter});
  }

  toggleWatch(name){
  console.log('WHAT IS NAME', name);
  for(var i =0; i < movies.length; i++){
    console.log('each movie', movies[i]);
    if (movies[i].title === name) {
      movies[i].watched = !movies[i].watched
    }
  }


    console.log(movies);
  }

  showWatched(){
    // console.log('WHICH MOVIES', this.state.movies);
    // var watchedMovies = movies.filter(function(item){
    //
    //   if (item.watched) {
    //
    //   return true;
    // } else {
    //   return false;
    // }
    // });
    // this.setState({movies: watchedMovies});
    // console.log('WHICH MOVIES AFTER', this.state.movies);
    this.setState({watchedOnly: true});

  }

  showToWatch(){
    // var moviesToWatch = movies.filter(function(item){
    //
    //   return !item.watched;
    // });
    this.setState({watchedOnly: false});

  }

  render() {
    var callToggle = this.toggleWatch.bind(this);
    console.log('THIS IN BETWEEN RENDER AND RETURN', this);

    var watchedProp = this.state.watchedOnly;
    return (

      <div>
        <AddMovie />
        <p>This is the movie list</p>
      <Search search={this.doSearch.bind(this)}/>
      <div className="watchToggle">
        <button onClick={this.showWatched.bind(this)}> Watched Movies </button> <button onClick={this.showToWatch.bind(this)} className="watchToggle"> Movies to Watch</button>
      </div>
      {this.state.movies.map(function(item, index){
        console.log('THIS INSIDE HIGHER ORDER', this);
        return <Movie info={item} key={index} index={index} useIndex={callToggle} haveWatched={item.watched} watchState ={watchedProp} />;

      })}
      </div>
    )
  }
}

ReactDOM.render( <MovieList />, document.getElementById('app'));
