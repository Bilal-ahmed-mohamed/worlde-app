import React from 'react'
import Row from './Row'

export default function Grid({ currentGuess, guess, turn }) {
  return (
    <div>
        {guess.map((g ,  i) => {
            if (turn === i ) {
                return <Row key = {i} currentGuess = {currentGuess} />
            }
            return  <Row  key = {i} guess = {g}  />
        })}
    </div>
  )
}
