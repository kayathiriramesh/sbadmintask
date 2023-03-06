//import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import  './sb-admin-2.min.css'

import Dashboard from './pages/dashboard/Dashboard'
import UserList from './pages/users/UserList'
import { BrowserRouter , Routes ,Route } from 'react-router-dom';
import Login from './pages/login/Login'
import Portal from './portal/Portal'
import UserCreate from './pages/users/UserCreate'
import UserView from './pages/users/UserView'
import UserEdit from './pages/users/UserEdit'
import { UserProvider } from './context/UserContext';

function App() {
  return (
    /* react-router-dom package install  */
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/portal" element={<Portal/>}>
            <Route path="dashboard" element={<Dashboard/>} />
            <Route path="user-list" element={<UserList/>} />
            <Route path="user-create" element={<UserCreate/>} />
            <Route path="user-view/:userid" element={<UserView/>} />
            {/*  : means dynamic variable*/}
            <Route path="user-edit/:userid" element={<UserEdit/>} />
          </Route>
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}
export default App;
