function Button({ type, onClick  }){
  
    const handleClick = () => onClick(type)
  
    return (
    <button onClick={handleClick}>
        Delete
    </button>)
  }