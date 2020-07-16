/* eslint-disable no-unused-vars */
import React from 'react';

function Results(props) {


  return (
    <div>
      <div>Count: {props.Count}</div>
      {
        <div><pre>Header:{JSON.stringify(props.headers, null, 2)}</pre></div>
      }

      {
        <div><pre>{JSON.stringify(props.results, null, 2)}</pre></div>
      }


    </div>
  );

}

export default Results;