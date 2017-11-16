import React from 'react';
import ReactDOM  from 'react-dom';
import MovieDetails from './MovieDetails.jsx'

class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {watched: false, titleClicked: false}
  }

  toggleWatch() {
    this.setState({watched: !this.state.watched})
    // this.passIndex();
  }

  passIndex(){
    console.log('EXECUTING PASS INDEX', this.props.index)
    this.props.useIndex(this.props.info.title);
  }

  handleTitleClick(){
    this.setState({titleClicked: !this.state.titleClicked});
  }

  render() {


    var buttonStyle = {
    }
    buttonStyle.color = this.state.watched ? 'white' : '' ;
    buttonStyle.backgroundColor = this.state.watched ? 'green' : '' ;
    if (this.props.watchState === null || this.props.watchState === this.state.watched) {
      return (
      <section>
        <div className="movieView"> <p onClick={this.handleTitleClick.bind(this)}>{this.props.info.title}</p>
        <button onClick={this.toggleWatch.bind(this)} style={buttonStyle}>Watched</button>
      </div>
      <div>
          <MovieDetails details={this.props.info.description} show={this.state.titleClicked} />
      </div>
    </section>
       )
    } else {
      return (<div></div>);
    }



  }

}


export default Movie;
