import React , {useState} from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [valid, setValid] = useState(false);

  const handleClick = (e) =>{

    console.log('handle click')
  }
  const handleInput = (e) =>{
    setEmail(e.target.value)
  }
  return (
    <div className="App">
      <input name="email" type="email" value={email} onChange={handleInput}/>
      <button role="button" onClick={handleClick}>Validate !</button>
      <br/>
      {email==="" ?  "" : <h3>this email : {email} is {valid ? "valid" : "not valid"}</h3>}

    </div>
  );
}

export default App;
