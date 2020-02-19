import React, {Fragment} from 'react';
// import {Link} from 'react-router-dom';


const Story = (props) => {

  if(!props.story){
    return "Loading story..."
  }

  const url = "https://hacker-news.firebaseio.com/v0/item/" + props.story.id + ".json"
return (
  // <Fragment>
  //   <Link to = {url} className="name">
  //     {props.story.title}
  //   </Link>
  // </Fragment>
  <div>
  <a href={url}>{props.story.title}</a>
  <br/>
  <a href={props.story.url}>Direct Link</a>
  </div>
  )
}

export default Story;
