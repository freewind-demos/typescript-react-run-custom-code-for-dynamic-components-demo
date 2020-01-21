import React from 'react'
import ReactDOM from 'react-dom'

import Hello from './hello'
import monitorDomChanges from './monitorDomChanges';

console.log('start ReactDOM.render')

ReactDOM.render(
  <Hello/>,
  document.body
)

console.log('end ReactDOM.render')

const targetNode = document.querySelector("#hello");
monitorDomChanges(targetNode!, () => {
  console.log('DOM is changed')
  console.log('#hello', document.getElementById('hello'))
  console.log('#inner', document.getElementById('inner'))
})
