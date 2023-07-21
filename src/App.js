import './App.css';
import Upload from './components/Home/Upload';
import Home from './components/Home/Home';
import Docs from './components/HomeComp/Docs/Docs'
import Image from './components/HomeComp/Image/Image';
import Audio from './components/HomeComp/Audio/Audio'
import Video from './components/HomeComp/Video/Video'
import Nav from './components/Navabr/Nav';
import Login from './components/Auth/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";
import Download from './components/HomeComp/Download/Download';
import Signup from './components/Auth/Signup';
import Other from './components/HomeComp/Other/Other';

function App() {
  return (

    <>
          <Router>
        <Routes>

        <Route path='/' element={<Home/>} />
        <Route path='/upload' element={<Upload/>} />
        <Route path='/download' element={<Download/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/download/images' element={<Image/>} />
        <Route path='/download/video' element={<Video/>} />
        <Route path='/download/audio' element={<Audio/>} />
        <Route path='/download/docs' element={<Docs/>} />
        <Route path='/download/other' element={<Other/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
