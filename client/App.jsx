import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import TherapyTracker from './components/TherapyTracker';
// import './stylesheets/styles.css';


const App = props => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/user');
  }
  const handleBackClick = () => {
    navigate('/');
  }

  return (
    <div className="h">
      <button onClick={handleGetStartedClick}>Get Started</button>
      <button onClick={handleBackClick}>Back</button>
      <main>
        <Routes>
          <Route
            path="/user"
            element={<TherapyTracker/>}
          />
        </Routes>
      </main>
    </div>
  );
};

// const App = () => {
//   return (
//     <div>Using React Router</div>
//   )
// };
export default App;