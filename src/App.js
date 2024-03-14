
import Home from './Components/home';
import {  Route, BrowserRouter, Routes } from 'react-router-dom';
import TaskList from './Components';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home}></Route>
          <Route path="/tasks" Component={TaskList}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
