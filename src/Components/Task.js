import React, { useState } from 'react';

import Text from './Text';
import Status from './Status';
import InputText from './InputText';
import './Task.css'

function Task(props) {
  const {
    isLastItem,
    content,
    title,
    status,
    updateData,
    index,
  } = props;

  const [isEditting, setIsEditting] = useState(false);
  const [inputValue, setInputValue] = useState({value: '', index: 0});

  const getValue = (value, index) => {
    setInputValue({value: value, index: index});
  }

  let className = 'task';

  if (isLastItem) {
    className += ' last-task';
  }

  const saveData =() => {
    setIsEditting(false)
    updateData(inputValue.value, inputValue.index)
  }
  
  const showInputText = () => {
    if (isEditting) {
      return(
        <div className='task-input'>
          <div>
            <InputText value={title} getValue={getValue} index={index} />
            <Text content={content} />
          </div>
          <p className='save' onClick={() => saveData()}>Save</p>
        </div>
      )
    } else {
      return (
        <div>
          <Text 
          isTitle 
          content={title} 
          click={() => {
            setIsEditting(true)
          }}/>
          <Text content={content} />
        </div>
      )
    }
  }

  return (
    <div className={className}>
     {showInputText()}
      <Status status={status} />
    </div>
  );
}

export default Task;
