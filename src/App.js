import React, { useState } from 'react'; 
import Hello from './sayHello';
import Tweet from './Tweet';
import './App.css';


function App(){
  
  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    setRed(!isRed);
  }

  const [users, setUser] = useState([
    {
      name:'Ed',
      message:'25',
    },
    {
      name: 'John', 
      message: 'my last name is snow',
    },
    {
      name: 'Leo',
      message: 'I am a student at Fusion',
    },
  ])

  return(
    <div className='app'>
      {users.map(user => (
        <Tweet name={user.name} message={user.message}/>
      ))}
      <h1 className={isRed ? 'red' : ""}>Change my color!</h1>
      <button onClick={increment}>Increment</button>
      <h1>{count}</h1>
      
      
      
      
      
      {/*<h1>Hello React</h1>*/}
      {/* 
      <Tweet name="Andrew Lee" message="This is a random tweet"/>
      <Tweet name="John Snow" message="I am the king"/>
      <Tweet name="Winter Summer" message="Seasons is my thing"/>
      <Tweet name="John Travolta" message="I am a musician?"/>
      */}

      {/*<Hello />*/}
    </div>
  );
}

export default App;