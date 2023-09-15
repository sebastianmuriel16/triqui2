import { winnerCombinations } from "../constants"

const checkWinnerFrom = (board)=>{
    // revisamos las condicione ganadoras
    //para ver si gano X u O
    for (const combo of winnerCombinations){
      const [a,b,c] = combo
       if(
        board[a] &&
        board[a] === board[b] &&
        board[a] === board[c]
       ){
        return board[a]
       }
    }
    return null
  }


  const checkEndGame = (newBoard)=>{
    //revismos si hay un empate
    // si no hay mas espacios vacios
    // en el tablero
    return newBoard.every((squeare)=>squeare !== null)
  }

  export { checkWinnerFrom, checkEndGame }