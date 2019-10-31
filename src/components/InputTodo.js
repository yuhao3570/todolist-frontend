import React, { useState } from 'react';

function InputTodo({addTodo}) {
  const [inputText, setInput] = useState('');
  
  const handleInputSubmit = () => {
    if(inputText.length < 3){
      alert('Inputed value must be longer than 3 characters!')
    }else {
      addTodo(inputText);
      setInput('');
    }
  }

  return (
    <div>
      <input 
        type="text" 
        value={inputText}
        onChange={(event) => setInput(event.target.value)} />
      <button 
        type = 'submit'
        onClick = {handleInputSubmit} > ADD 
      </button> 
    </div>
  );
}

export default InputTodo;