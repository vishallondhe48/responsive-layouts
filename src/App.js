
import React from 'react'
import './styles.scss'
import SplitScreen from './components/SplitScreen'
import TheDeconstructedPancake from './components/TheDeconstructedPancake'

const App = () => {
  return (
    <>
      <h1>responsive layouts</h1>
      <SplitScreen />
      <h2>The deconstructed pancake</h2>
      <TheDeconstructedPancake />
    </ >
  )
}

export default App
