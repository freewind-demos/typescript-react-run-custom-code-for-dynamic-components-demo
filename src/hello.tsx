import React, {useEffect, useLayoutEffect} from 'react'
import Inner from './inner';

export default function Hello() {
  console.log("> Hello")
  useEffect(() => {
    console.log("Hello.useEffect")
  })

  return <div id='hello'>
    <h1>Hello React</h1>
    <Inner/>
  </div>
};
