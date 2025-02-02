import { useState } from 'react'
import styled from 'styled-components'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1 id="title" style={}> testing ti9tle</h1>

      </div >
      <h1>EatMeet</h1>
      <div className="card">
        <p>
          Some calendar thing
        </p>
      </div>
      <p className="read-the-docs">
        Trevor Kim Kenneth Lee William Chen
      </p>
    </>
  )
}

export default App
