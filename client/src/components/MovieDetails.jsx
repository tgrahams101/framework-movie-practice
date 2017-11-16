import React from 'react';


class MovieDetails extends React.Component {

  constructor(props){
    super(props);
  }

  render() {

    if (this.props.show) {
      var theStyle = {
        textDecoration: 'underline'
      };
      return (<div>
          <p style={theStyle}>Movie Description</p>
          <p>{this.props.details}</p>
        </div>)

    } else {
      return null;
    }
  }
}


export default MovieDetails;
