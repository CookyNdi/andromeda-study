import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage';
import Login from './components/LoginPage/Login';
import Register from './components/Register/Register';
import Class from './components/Class/Class';
import JapaneseClass from './components/Class/Japanese/JapaneseClass';
import Materi11Sect1 from './components/Class/Japanese/Stage-1/1-1/materi/1';
import Materi11Sect2 from './components/Class/Japanese/Stage-1/1-1/materi/2';
import Materi11Sect3 from './components/Class/Japanese/Stage-1/1-1/materi/3';
import Materi11Sect4 from './components/Class/Japanese/Stage-1/1-1/materi/4';
import Materi11Sect5 from './components/Class/Japanese/Stage-1/1-1/materi/5';
import Latihan11Sect1 from './components/Class/Japanese/Stage-1/1-1/Latihan/1';
import Latihan11Sect2 from './components/Class/Japanese/Stage-1/1-1/Latihan/2';
import Latihan11Sect3 from './components/Class/Japanese/Stage-1/1-1/Latihan/3';
import Latihan11Sect4 from './components/Class/Japanese/Stage-1/1-1/Latihan/4';
import Latihan11Sect5 from './components/Class/Japanese/Stage-1/1-1/Latihan/5';
import Materi12 from './components/Class/Japanese/Stage-1/1-2/Materi/2';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<Login />} title='Andromeda - Login' />
        <Route path='/register' element={<Register />} />
        <Route path='/class' element={<Class />} />
        <Route path='/class/japanese' element={<JapaneseClass />} />
        <Route path='/class/japanese/stage-1/1-1/materi/1' element={<Materi11Sect1 />} />
        <Route path='/class/japanese/stage-1/1-1/materi/2' element={<Materi11Sect2 />} />
        <Route path='/class/japanese/stage-1/1-1/materi/3' element={<Materi11Sect3 />} />
        <Route path='/class/japanese/stage-1/1-1/materi/4' element={<Materi11Sect4 />} />
        <Route path='/class/japanese/stage-1/1-1/materi/5' element={<Materi11Sect5 />} />
        <Route path='/class/japanese/stage-1/1-1/latihan/1' element={<Latihan11Sect1 />} />
        <Route path='/class/japanese/stage-1/1-1/latihan/2' element={<Latihan11Sect2 />} />
        <Route path='/class/japanese/stage-1/1-1/latihan/3' element={<Latihan11Sect3 />} />
        <Route path='/class/japanese/stage-1/1-1/latihan/4' element={<Latihan11Sect4 />} />
        <Route path='/class/japanese/stage-1/1-1/latihan/5' element={<Latihan11Sect5 />} />
        <Route path='/class/japanese/stage-1/1-2/materi/2' element={<Materi12 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
