import React from 'react';
import Story from './Story.js';

const StoryList = (props) => {

  if (props.stories.length === 0){
    return (<p>Loading News...</p>)
  }

  const stories = props.stories.map((story, index) => {
    return (
      <li key={index} className="component-item">
      <div className="component">
        <Story story={story} />
      </div>
      </li>
    )
  })

  return (
    <ul className="component-list">
      {stories}
    </ul>
  )




}

export default StoryList;
