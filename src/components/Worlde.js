import React, { useEffect } from 'react'
import useWordle from '../hooks/useWordle'
import Grid from './Grid'

export default function Worlde({solution}) {

    const {currentGuess, handleKeyUp , guess , isCorrect , turn } = useWordle(solution)

    useEffect(()=> {
        window.addEventListener('keyup' , handleKeyUp)

        return () =>  window.removeEventListener('keyup' , handleKeyUp )
    } , [handleKeyUp])

    useEffect(() => {
      console.log(guess,turn,isCorrect);
    }, [guess,turn,isCorrect])
  return (
      <div>
        <div> solution is = {solution}  </div>
    <div> current guess = {currentGuess} </div>
    <Grid  currentGuess = {currentGuess} guess = {guess} turn = {turn}  />
    </div>
  )
}
