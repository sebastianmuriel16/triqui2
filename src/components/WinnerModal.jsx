import { Squeare } from "./Square.jsx"
function WinnerModal ({winner,resetGame})  {

    if(winner===null) return null

    const winnerText = winner === false? 'Empate' : 'Ganador'

    return(
      <section className='winner'>

        <div className='text'>
          <h2>winnerText</h2>

          <header className='win'>
            {winner && <Squeare>{winner}</Squeare>}
            </header> 

            <footer>
              <button onClick={resetGame}>Empezar de nuevo</button>
            </footer>
        </div>

      </section>
    )
  }

  export {WinnerModal}