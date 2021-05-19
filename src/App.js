import React from 'react';
import { HashRouter as Router, Route ,Switch} from 'react-router-dom';
import Header from './Components/Header'
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import ServiceScreen from './screens/ServiceScreen';

import './bootstrap.min.css'
import Footer from './Components/Footer';

import './Style/main.css'

const App = ()=> {
  return (
    <Router>
    <Header/>
      <Switch>
      <main className="">
      
      <Route exact path='/' component={(props)=> <HomeScreen title="Home" {...props}/>}  />
      <Route exact path='/about' component={(props)=> <AboutScreen title="About Us" {...props}/>}  />
      <Route exact path='/services' component={(props)=> <ServiceScreen title="Our Services" {...props}/>}  />


       
  </main>
      </Switch>
      <Footer/>
  </Router>
  );
}

export default App;
