import React, { Component } from 'react';
//import Header from './components/Layout/Header';
import NavigationBar from './components/Layout/NavigationBar';
import Songs from './components/Songs';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Footer from './components/Layout/Footer';
import AddSong from './components/AddSong/AddSong';
//import { Image } from 'react-bootstrap';

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: 'Rocksmith'
    };
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          {/*<Header title={this.state.title} />*/}
          <NavigationBar />
          <div className="mt-5">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/Addsong" component={AddSong} />
                <Route path="/songs" component={Songs} />
                <Route path="/about" component={About} />
              </Switch>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
