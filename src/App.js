import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Courses from './Component/Courses';
import Teacher from './Component/Teacher';
import Student from './Component/Student';
import NavBar from './Component/NavBar';
import Home from './Component/Home';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <h1>College Management</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/student" element={<Student />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
