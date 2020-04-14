import React from 'react';
import logo from './logo.svg';
import './App.css';

function FormatName(user)
{
      return user.FirstName+" "+user.LastName;
}
const user={
  FirstName:"ahmed",
LastName:"kamal"

}

function App() {
  const name="junaid ahmed";

  return (

    <div className="App">
     <h1>Hello World {FormatName(user)}!</h1>
    </div>
  );
}

export default App;
