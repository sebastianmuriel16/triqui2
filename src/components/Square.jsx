const Squeare = ({children,upadateBoard, isSelected, index})=>{

    const className = isSelected ? 'square is-selected' : 'square'
  
    const handleClick = ()=>{
      upadateBoard(index)
    }
  
    return(
      <div onClick={handleClick} className={className}>
        {children}
      </div>
    )
  }

export {Squeare}  