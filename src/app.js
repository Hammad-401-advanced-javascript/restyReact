/* eslint-disable no-unused-vars */
import React from 'react';

import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form/form.js';
import Results from './components/results/results';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      results: [],
      headers: [],

    };
  }
  handleForm = (Count, results, headers) => {
    // this will be called from the Form component on Submit
    console.log('hi from app', results);
    this.setState({ Count, results, headers });
  };


  render() {
    return (
      <React.Fragment>
        <Header />
        <Footer />

        <Results results={this.state.results} count={this.state.count} headers={this.state.headers} />
        <Form handler={this.handleForm} />
      </React.Fragment>
    );
  }
}

export default App;
