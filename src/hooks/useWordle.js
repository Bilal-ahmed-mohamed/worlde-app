import React, { useState } from 'react';


const useWordle = (solution) => {
    const [turn , setTurn] = useState(0);
    const [currentGuess , setCurrentGuess] =  useState('');
    const [guess , setGuess] = useState([...Array(6)]);  /* each guees ia an array */
    const [history , setHistory] = useState([])    /* each guess is a string */
    const [isCorrect , setIsCorrect] = useState(false);

    // format a guees into an array of letter objcts
    // e.g [{key: 'a' , color: 'yellow'}]

    const formatGuess = () => {
      
        let solutionArray  = [...solution]
        let formattedGuess = [...currentGuess].map((l) => {
               return {key:l , color:'grey'}
        })

        // find any green letters 
        formattedGuess.forEach((l , i) => {
            if(solutionArray[i] === l.key){
                formattedGuess[i].color = 'green'
                solutionArray[i] = null
            }
        })

        //fnd any yellow letter
        formattedGuess.forEach((l , i ) => {
               if (solutionArray.includes(l.key) && l.color !== 'green' ) {
                formattedGuess[i].color = 'yellow'
                solutionArray[solutionArray.indexOf(i.key)] = null
               }
        })

        return formattedGuess
    }
 

    //  add a new guesss to the guess state 
    // update the isCorrect state if the guess is correct 
    //  add one to the turn state 

    const addNewGuess = (formattedGuess) => {
        if (currentGuess === solution) {
            setIsCorrect(true)
        }
        setGuess((prevGueeses) => {
          let newGueeses = [...prevGueeses]
          newGueeses[turn] = formattedGuess
          return newGueeses
        })
        setHistory((prevHistory) => {
            return [...prevHistory, currentGuess]
        })
        setTurn((prevTurn) => {
              return prevTurn + 1 
        })
        setCurrentGuess('')
    }

    // handle a key up event  & track current guees
    // if user presses enter , add the new guess 
    const handleKeyUp = ({key}) => {


        if (key === 'Enter') {
            // only add the guess if turn is less than 5
            if (turn > 5) {
                console.log('you used all ua turns');
                return
            }
            //  do not allow duplicate letters
            if (history.includes(currentGuess)) {
                console.log('u alrdy used that word');
                return
            }
            // checl if the word is 5 letters
            if (currentGuess.length !== 5) {
                console.log('word must be 5 letters long');
                return
            }

          const formatted =   formatGuess()
          addNewGuess(formatted)
        }

        if (key === 'Backspace') {  // allow the user to delete the previous letter
            setCurrentGuess((prev) => {
               return prev.slice(0 , -1)
            })
            return 
        }
        
        if (/^[A-Za-z]$/.test(key)) {  // fucntion to check if the user clicks a letter
            
            if (currentGuess.length < 5) {  // limit the guess to 5 letters
                setCurrentGuess((prev) => {
         
                      return prev + key
                      
                })
            }
        }
        
    }

    return {turn , currentGuess , guess , isCorrect , handleKeyUp };
}


export default useWordle