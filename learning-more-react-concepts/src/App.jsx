import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [name, setName] = useState("");

  useEffect (() => {
      console.log("I re-rendered")
  });  //no dependency array, this will log every time there is a change

  useEffect (() => {
    console.log("The component mounted")
  }, []); //with dependency array, it will log only once when rendered

  useEffect(() => {
    console.log(`The name changed:${name}`)

    return () => {
      console.log("We unmounted")
    }  //this is a return function, a clean up function, before it re-renders, it needs to unmount the component so it can re-render, so this unmounts something. It unmounts then re-renders
  }, [name]) //we can render an array, one or as many as you want, or whenever name changes it will trigger a re-render, can also include props or pieces of state, we want to trigger the r-render for

  useEffect(() => {
    window.addEventListener("resize", updateWindowWidth);

    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    }
  }, [])
  
 const updateWindowWidth = () => {
  setWindowWidth(window.innerWidth);
 }

  return (
    <>
    <center>
      <h1>Exploring useEffect</h1>
      <p>The Window Length is: {windowWidth} </p>

      <input 
      value={name}
      onChange={(e => setName(e.target.value))}
      placeholder='Enter a name' />
     
    </center>
    </>
  )
}

export default App










