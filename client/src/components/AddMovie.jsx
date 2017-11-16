import React from 'react';

class AddMovie extends React.Component {
  constructor(){
    super()
    this.state = {value: ''};
  }

  handleChange(event){
    console.log(event.target.value);
    this.setState({value: event.target.value});
  }

  executeAdd(){

    //do an ajax call

  }

  useIndex() {
    
  }

  render() {
    return (
      <div>
      <input type="text" onChange={this.handleChange.bind(this)} />
      <button onClick={this.executeAdd.bind(this)}>Add a movie</button>
      </div>

    )

  }


}

export default AddMovie;
