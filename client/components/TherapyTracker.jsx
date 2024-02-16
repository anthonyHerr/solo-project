import React, { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';
import CreatedUser from './CreatedUser'


const CreatedUserPage = () => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate('/user');
  };
  return  (
    <div>
      <CreatedUser/>
      <button onClick={handleBackClick}>Back</button>
    </div>
  );
}

const TherapyTracker = props => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [bodyPart, setBodyPart] = useState('');
  const [workouts, setWorkouts] = useState('');

  // const handleClick = () => {
  //   navigate('/user/createuser')
  // }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ firstName, bodyPart, workouts }),
    });

    if (response.ok) {
      console.log('Data saved successfully');
      navigate('/user/createuser'); 
    } else {
      console.error('Error saving data');
    }
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={firstName} onChange={e => setFirstName(e.target.value)}/>
        <input type="text" placeholder="Body Part" value={bodyPart} onChange={e => setBodyPart(e.target.value)}/>
        <input type="text" placeholder="Workouts" value={workouts} onChange={e => setWorkouts(e.target.value)}/>
        <button type="submit">Enter</button>
      </form>
      <Routes>
          {/* <Route path="/user" element={<TherapyTrackerPage/>}/> */}
          <Route path="/user/createuser" element={<CreatedUserPage/>}/>
        </Routes>
    </div>
  )
}

export default TherapyTracker;