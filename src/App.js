import React, { useState } from 'react';
import './style.css';

function App() {
  const [value, setValue] = useState('');

  const onChange = (event) => {
    setValue(event.target.value);
    console.log(event.target);
  };

  return (
    <>
      <input value={value} placeholder="I am placeholder" onChange={onChange} />
    </>
  );
}

export default App;
