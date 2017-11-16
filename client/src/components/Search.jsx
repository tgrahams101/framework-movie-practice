import React from 'react'

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  onSearch() {
    this.props.search(this.state.value);
  }

  handleChange(event) {
    console.log(event.target.value);
    this.setState({value: event.target.value});
  }

  render() {
    return (<div>
      <input type="text" onChange={this.handleChange.bind(this)}/>
      <button onClick={this.onSearch.bind(this)}>Search for Movie</button>
      </div>)

  }



}

export default Search;
