import React , {useState} from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [valid, setValid] = useState(false);

  const handleClick = async(e) =>{
    const url = `https://pozzad-email-validator.p.rapidapi.com/emailvalidator/validateEmail/${email}`;
    const response  = await fetch(url, {
    	"headers": {
        "x-rapidapi-host": "pozzad-email-validator.p.rapidapi.com",
        "x-rapidapi-key": "9c4837d252msh2a0cd163ca7c47bp1702dejsnf7e2cbcc8a04"
      }
    });
    const {isValid} = await response.json();
    setValid(isValid);
  }
  const handleInput = (e) =>{
    setEmail("")
    setEmail(e.target.value)
  }
  return (
    <div className="App">
      <input name="email" type="email" value={email} onChange={handleInput}/>
      <button role="button" onClick={handleClick}>Validate !</button>
      <br/>
      {!valid ?  "" : <h3>Email : {email} is {valid ? "valid" : "not valid"}</h3>}
    </div>
  );
}

export default App;
