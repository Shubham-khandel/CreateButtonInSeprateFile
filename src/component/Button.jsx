import React from 'react';


export default function Button(props) {
  return (
    <div >
      <button style={props.styl} onClick={props.onClick}>{props.children}</button>
    </div>
  );
}