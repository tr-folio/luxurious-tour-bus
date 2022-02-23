import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import ConfirmBook from './Components/ConfirmBook/ConfirmBook';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import ServiceDetail from './Components/ServiceDetail/ServiceDetail';
import Manage from './Components/Manage/Manage';
import AuthProvider from './Context/AuthProvider';
import SignUp from './Components/Login/SignUp';

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/serviceDetail/:id">
              <ServiceDetail></ServiceDetail>
            </PrivateRoute>
            <PrivateRoute path="/confirmBook">
              <ConfirmBook></ConfirmBook>
            </PrivateRoute>
            <PrivateRoute path="/manage">
              <Manage></Manage>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <SignUp></SignUp>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
