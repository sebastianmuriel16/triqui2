import { useEffect, useState } from 'react'
import './App.css'
import confetti from 'canvas-confetti'
import { Squeare } from './components/Square.jsx'
import { TURNS } from './constants.js'
import { checkWinnerFrom ,checkEndGame } from './logic/board.js'
import { WinnerModal } from './components/WinnerModal.jsx'
import { saveGameToStorage,resetGameToStorage } from './logic/Storage'



function App() {

  const [board,setboard] = useState(()=>{
    // si hay una partida guardada
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  })

  const [turn,setTurn] = useState(()=>{
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ? TURNS[turnFromStorage] : TURNS.X
  })
  // null es que no hay ganador, false es que hay un empate
  const [winner,setWinner] = useState(null)
  
  const upadateBoard = (index)=>{
  
      // no sobreescritura si ya hay algo
  
      if(board[index] || winner) return
  
      // la razon por la que se crea un nuevo array es por que nunca se debe mutar el estado o las props
      // actualizar el tablero
      const newBoard = [...board]
      newBoard[index] = turn
      setboard(newBoard)
  
      const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
      setTurn(newTurn)

      // guardar partida
      saveGameToStorage({
        board: newBoard,
        turn:  newTurn
      })
      // revisar si hay un ganador
      const newWinner = checkWinnerFrom(newBoard)
      if(newWinner){
        confetti()
        setWinner(newWinner)
      }
      else if(checkEndGame(newBoard)){
        setWinner(false)//empate
      }
    }

    useEffect(()=>{
      console.log('useEffect')
    },[winner])
  
  const resetGame = ()=>{
    setboard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    resetGameToStorage()
  }


  return (
    <main className='board'>
        <h1>Triqui</h1> 
        <button onClick={resetGame}>Empezar de nuevo</button>     
        <section className='game'>
        {
          board.map((square, index) => {
            return(
              <Squeare
              key={index}
              index={index}
              upadateBoard={upadateBoard}
              >
                {square}
              </Squeare>
            )
          })
        }
      </section>

        <section className='turn'>
          <Squeare isSelected={turn === TURNS.X}>
            {TURNS.X}
            </Squeare>
          <Squeare isSelected={turn === TURNS.O}>
            {TURNS.O}
            </Squeare>
        </section>

          <WinnerModal 
          resetGame={resetGame}
          winner={winner}/>
    </main>
  )
}

export default App
