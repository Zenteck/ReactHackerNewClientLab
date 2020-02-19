import React, {Component} from 'react';

class StoryFilter extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchString: ""
    }

    this.handleSearchString = this.handleSearchString.bind(this);
  }

  handleSearchString(event){
    this.setState({searchString: event.target.value})
  }

  render(){

    


  }


}
