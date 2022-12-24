//import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import  './sb-admin-2.min.css'

import Dashboard from './Dashboard'
import UserList from './UserList'
import { BrowserRouter , Routes ,Route } from 'react-router-dom';
import Login from './Login'
import Portal from './Portal'
import UserCreate from './UserCreate'
import UserView from './UserView'

function App() {
  return (
    /* react-router-dom package install  */
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/portal" element={<Portal/>}>
          <Route path="dashboard" element={<Dashboard/>} />
          <Route path="user-list" element={<UserList/>} />
          <Route path="user-create" element={<UserCreate/>} />
          <Route path="user-view/:userid" element={<UserView/>} />
          {/*  : means dynamic variable*/}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
