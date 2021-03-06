import React , {useState} from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [valid, setValid] = useState(false);
  const [click, setClick] = useState(false);

  const handleClick = async(e) =>{
    const url = `https://pozzad-email-validator.p.rapidapi.com/emailvalidator/validateEmail/${email}`;
    const response  = await fetch(url, {
    	"headers": {
        "x-rapidapi-host": "pozzad-email-validator.p.rapidapi.com",
        "x-rapidapi-key": "9c4837d252msh2a0cd163ca7c47bp1702dejsnf7e2cbcc8a04"
      }
    });
    const {isValid} = await response.json();
    console.log('is valid :  ', isValid)

      if(isValid){
        setValid(isValid);
    } 
    setClick(true);
      
  }
  const handleInput = (e) =>{
    setValid(false);
    setClick(false);
    setEmail(e.target.value);
  }
  return (
    <div className="container">
      <div className="wrapper">
        <div className="wrapper-inside">
            <div className="">
              <input id="icon_prefix" className="validate" name="email" type="email" value={email} onChange={handleInput}  placeholder="email"/>
            </div>
            <div>
              <button className="waves-effect waves-light btn teal accent-3" role="button" onClick={handleClick}>check</button>
            </div>
           { !click ? "" : valid ? <h3 className=" green accent-4 ">Email : {email} is {valid ? "valid" : "not valid"}</h3> :  <h3 className=" red accent-4 ">Email : {email} is {valid ? "valid" : "not valid"}</h3>}
        </div>
    </div>
  </div>
  );
}

export default App;
