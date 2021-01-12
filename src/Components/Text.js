import React from 'react';

function Text(props) {
  if (props.isTitle) {
    return <h1 className='title-content' onClick={props.click}>{props.content}</h1>
  } else {
    return <p>{props.content}</p>
  }
}

export default Text;
