import React, { useState } from 'react';

function InputTodo({addTodo, currentMaxId}) {
  const [inputText, setInput] = useState('');
  
  const handleInputSubmit = () => {
    if(inputText.length <= 3){
      alert('Inputed value must be longer than 3 characters!')
    }else {
      const newTodo = {
        id: currentMaxId + 1,
        text: inputText,
        done: false
      }
      addTodo(newTodo);
      setInput('');
    }
  }

  return (
    <div className="input-area">
      <input 
        type="text" 
        value={inputText}
        onChange={(event) => setInput(event.target.value)} 
      />
      <button 
        className="button-text"
        type = 'submit'
        onClick = {handleInputSubmit} > ADD 
      </button> 
    </div>
  );
}

export default InputTodo;