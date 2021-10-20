
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Appoinment from './Components/Appoinment/Appoinment';
import Consult from './Components/Consult/Consult';
import AuthProvider from './Components/Context/AuthProvider';
import Dentist from './Components/Dentist/Dentist';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import NotFound from './Components/NotFound/NotFound';
import Register from './Components/Register/Register';
import ServiceDetail from './Components/ServiceDetail/ServiceDetail';
import Services from './Components/Services/Services';
import Testimonial from './Components/Testimonial/Testimonial';

function App() {
  return (
    <div className="App">

      <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Switch>

          <Route exact path="/">
              <Home></Home>
          </Route>
          
          <Route path="/home">
              <Home></Home>
          </Route>

          <Route path="/services">
              <Services></Services>
          </Route>

          <Route path="/dentist">
              <Dentist></Dentist>
          </Route>

          <Route path="/testimonial">
              <Testimonial></Testimonial>
          </Route>

          <Route path="/login">
              <Login></Login>
          </Route>

          <Route path="/register">
              <Register></Register>
          </Route>

          <PrivateRoute path="/appointment">
              <Appoinment></Appoinment>
          </PrivateRoute>

          <PrivateRoute path="/serviceDetail/:serviceId">
              <ServiceDetail></ServiceDetail>
          </PrivateRoute>

          <PrivateRoute path="/consult">
              <Consult></Consult>
          </PrivateRoute>

          <Route path="/*">
              <NotFound></NotFound>
          </Route>


        </Switch>
        <Footer></Footer>
      </BrowserRouter>
      
      </AuthProvider>
    </div>
  );
}

export default App;
