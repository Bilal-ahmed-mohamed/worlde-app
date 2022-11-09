import React from 'react'

export default function Row({guess  , currentGuess}) {

    if (guess) {
        return(
            <div className='row past'> 
            {guess.map((l,i) => (
                <div className={l.color}  key={i}> {l.key} </div>
            ))}
             </div>
        )
    }

    if (currentGuess) {
        let letters = currentGuess.split('')
        return(
               <div className='row current'>
                {letters.map((letter , i) => (
                       <div className='filled'  key={i}>{letter}</div>
                ))}
                {/* {[...Array(5 - letters.lenght)].map((v, i) => (
                   <div key={i}></div>
                ))} */}
               </div>
        )
    }
  return (
    <div className='row' >
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
    </div>
  )
}
