import { useState } from 'react'
import './App.css'
import FetchTourData from './components/Gallery'
import NotInterested from './components/Button'

function App() {
  return (
    <>
      <FetchTourData />
      <NotInterested />
    </>
  )
}

export default App
