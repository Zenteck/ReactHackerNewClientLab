import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Request from '../helpers/request';
import StoryList from '../components/StoryList.js';
import StoryFilter from '../components/StoryFilter.js';

class StoryContainer extends Component {
   constructor(props){
     super(props);
     this.state = {
       storyIds: [],
       stories: []
     }
   }

   componentDidMount(){
     const request = new Request();
     const storyPromise = request.get("/v0/topstories.json")
     Promise.all([storyPromise])
     .then((data) => {
       console.log("That")
       this.setState({
         storyIds : data[0].slice(0, 10)

       })
     })
      .then(()=>this.getStories())
   }

   getStories(){
     console.log("This");
    const request = new Request();
     const promises = this.state.storyIds.map((storyId, index) => {
        return (request.get("/v0/item/" + storyId + ".json"))
     })
     Promise.all(promises)
     .then((data) => {
       this.setState({
         stories: data
   })})}

   filteredStories(){

   }

   render(){
     if(!this.state.storyIds){
       return null
     }

     return(
       <Router>
        <Fragment>
          <Switch>

            <Route exact path ="/stories/filter" render={(props) => {
              return <StoryFilter storyIds={this.filteredStories()}/>
            }} />

            <Route render={(props) => {
              return <StoryList stories={this.state.stories}/>
            }} />

          </Switch>
        </Fragment>
       </Router>
     )
   }
}

export default StoryContainer;
