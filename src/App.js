import React, {Component} from 'react';
import Header from './commons/Header';
import Menu from './commons/Menu';
import PageWrapper from './PageWrapper';
import Footer from './commons/Footer';
import { BrowserRouter as Router} from "react-router-dom";


class App extends Component{
  render(){
    return(
    <div>
      <Router>
      <Header />
      <Menu />
    
      <PageWrapper />
      <Footer />
      </Router>
     
    </div>
    );
  }

}
export default App;
