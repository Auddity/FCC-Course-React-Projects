import React, {useState} from 'react';

const Box = (props) => {
  const [state, setState] = useState(props.on);
  
  const handleClick = () => {
    return setState(prevState => !prevState);
  }
  const styles = {
    backgroundColor: state ? "#222222" : "transparent"
  }
  return (
    <div 
      className='box'
      style={styles}
      onClick={handleClick}>
    </div>
    
  )
}

export default Box