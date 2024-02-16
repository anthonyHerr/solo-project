import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import TherapyTracker from './components/TherapyTracker';
// import './stylesheets/styles.css';


const HomePage = () => {
  const navigate = useNavigate();
  const handleGetStartedClick = () => {
    navigate('/user');
  }
  return (
    <div className="Get Started">
      <h1>Physical Therapy Tracker</h1>
      <button onClick={handleGetStartedClick}>Get Started</button>
    </div>
  );
};

const UserPage = () => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate('/');
  };
  return  (
    <div>
      <TherapyTracker/>
      <button onClick={handleBackClick}>Back</button>
    </div>
  );
}

const App = props => {

  return (
    <div>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/user" element={<UserPage/>}/>
        </Routes>
    </div>
  );
};

// const App = () => {
//   return (
//     <div>Using React Router</div>
//   )
// };
export default App;