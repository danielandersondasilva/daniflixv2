/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

export default function ButtonLink(props) {
  // props => { className: "o que alguém passar", href:"/"}
  return (
    <a className={props.className} href={props.href}>
      {props.children}
    </a>
  );
}
