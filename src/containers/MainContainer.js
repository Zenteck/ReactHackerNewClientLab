import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import StoryContainer from './StoryContainer.js';

const MainContainer = () => {

  return (
    <Router>
      <Fragment>
        <Switch>
          <Route path="/stories" component={StoryContainer} />
        </Switch>
      </Fragment>
    </Router>
  )
}

export default MainContainer;
