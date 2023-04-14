import './App.css';
import Drive_folder from './components/photo_folders/Drive_folders';
import Gallery from './components/photo_gallery/Gallery';
import Login from './components/signin/Login';
import Signup from './components/signup/Signup';
import Folder_names from './components/spark_folders/Folder_names';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getSparkUser } from "./useSlice";

function App() {
  const dispatch = useDispatch();
  dispatch(getSparkUser())
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login></Login>} />
    <Route path="/signup" element={<Signup></Signup>} />
    <Route path="/folders" element={<Folder_names></Folder_names>} />
    <Route path="/subfolders" element={<Drive_folder></Drive_folder>} />
    <Route path="/gallery" element={<Gallery></Gallery>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
