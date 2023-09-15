const TURNS ={ // turnos
    X: 'X',
    O: 'O'
  }
  
  const winnerCombinations = [
    [0, 1, 2], // Primera fila
    [3, 4, 5], // Segunda fila
    [6, 7, 8], // Tercera fila
    [0, 3, 6], // Primera columna
    [1, 4, 7], // Segunda columna
    [2, 5, 8], // Tercera columna
    [0, 4, 8], // Diagonal izquierda a derecha
    [2, 4, 6]  // Diagonal derecha a izquierda
  ]

  export {TURNS,winnerCombinations}