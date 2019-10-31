import React, { useState } from 'react';

function InputTodo(props) {
  const [inputText, setInput] = useState('');
  
  const handleInputChange = () => {

  }

  const handleInputSubmit = () => {

  }

  const handleInput = () => {
    if (inputedValue.length > 3) {
        this.props.addTodo(inputedValue);
    } else {
        alert('Inputed value must be longer than 3 characters!')
    }
  }

  return ( 
    <div>
      <input 
        type="text" 
        value={inputText}
        onChange={handleInputChange} />
      <button 
        type = 'submit'
        onClick = {handleInputSubmit} > ADD 
      </button> 
    </div>
    );
}

export default InputTodo;