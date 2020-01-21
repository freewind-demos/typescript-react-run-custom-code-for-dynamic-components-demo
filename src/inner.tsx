import React, {useEffect, useState} from 'react'

export default function Inner() {
  console.log("> Inner")
  const [show, setShow] = useState(false)
  useEffect(() => {
    console.log("Inner.useEffect")
  })
  return <div id='inner'>
    <button type='button' onClick={() => setShow(n => !n)}>Toggle</button>
    {show && <div>Hello Inner</div>}
  </div>
};
