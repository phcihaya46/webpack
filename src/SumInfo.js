import React from 'react'

function SumInfo(props) {
  return (
    <div className="suminfo">
      <h1> Sum = {props.total}</h1>
      {/* {props.total > 10
        ?<p>Over limit</p>
        : <p>OK</p>
      } */}
      {
        props.total >10  && <p>Over limit</p>
      }
    </div>
  );
}

export default SumInfo