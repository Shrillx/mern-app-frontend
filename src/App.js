import "./App.css";
import "./output.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginComponent from "./routes/Login";
import SignupComponent from "./routes/Signup";
import Home from "./routes/Home";
import { useCookies } from "react-cookie";
import LoggedInHomeComponent from "./routes/LoggedInHome";
import UploadSong from "./routes/UploadSong";
import MyMusic from "./routes/MyMusic";
import songContext from "./contexts/songContext";
import { useState } from 'react';

function App() {
  const [cookie, setCookie] = useCookies(["token"]);
  const [currentSong, setCurrentSong] = useState(null);
  const [soundPlayed, setSoundPlayed] = useState(null);
  const [isPaused, setIsPaused] = useState(true);

  return (
    <div className='w-screen h-screen font-poppins'>
      <BrowserRouter>
        {cookie.token ? (
          <songContext.Provider
            value={{
              currentSong,
              setCurrentSong,
              soundPlayed,
              setSoundPlayed,
              isPaused,
              setIsPaused,
            }}
          >
            {
            //-> logged in routes
            }
            <Routes>
              <Route path='/' element={<HelloComponent />}></Route>
              <Route path='/home' element={<LoggedInHomeComponent />}></Route>
              <Route path='*' element={<Navigate to='/home' />}></Route>
              <Route path='/uploadSong' element={<UploadSong />}></Route>
              <Route path='/myMusic' element={<MyMusic />}></Route>
            </Routes>
          </songContext.Provider>
        ) : (
          //-> logged Out routes
          <Routes>
            <Route path='/login' element={<LoginComponent />}></Route>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/signup' element={<SignupComponent />}></Route>
            <Route path='*' element={<Navigate to='/login' />}></Route>
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

const HelloComponent = () => {
  return <div>This is hello component</div>;
};

export default App;
