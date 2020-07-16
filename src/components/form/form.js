import React from 'react';

import '../form/form.scss';

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      url: '',
      method: '',
      count: '',
      results: '',
      request: {},
    };
  }


  handleSubmit = async (e) => {
    //at some point
    e.preventDefault();

    let raw = await fetch(this.state.url); // star wars API
    let results = await raw.json();
    console.log(raw.headers);
    let headers = raw.headers;
    if (results.count) {
      let Count = results.count;
      this.props.handler(Count, results, headers);
    }
    else {
      let Count = Object.keys(results).length;
      this.props.handler(Count, results, headers);
    }

    // try {
    //   const raw = await fetch(this.state.url);
    //   const results = await raw.json();
    //   let headers = raw.headers;

    //   if (results.count) {
    //     let Count = results.count;
    //     this.props.handler(results, Count, headers);
    //   }
    //   else {
    //     let Count = Object.keys(results).length;
    //     this.props.handler(results, Count, headers);
    //   }


    // } 
  };

  handleChangeURL = e => {
    const url = e.target.value;
    this.setState({ url });
  };

  handleChangeMethod = e => {
    const method = e.target.id;
    this.setState({ method });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label >
            <span>URL: </span>
            <input name='url' type='text' onChange={this.handleChangeURL} />
            <button type="submit">GO!</button>
          </label>
          <label className="methods">
            <span className={this.state.method === 'get' ? 'active' : ''} id="get" onClick={this.handleChangeMethod}>GET</span>
            <span className={this.state.method === 'post' ? 'active' : ''} id="post" onClick={this.handleChangeMethod}>POST</span>
            <span className={this.state.method === 'put' ? 'active' : ''} id="put" onClick={this.handleChangeMethod}>PUT</span>
            <span className={this.state.method === 'delete' ? 'active' : ''} id="delete" onClick={this.handleChangeMethod}>DELETE</span>
          </label>
        </form>
        <section className="results">
          <span className="method">{this.state.request.method}</span>
          <span className="url">{this.state.request.url}</span>
        </section>
      </>
    );
  }
}

export default Form;
