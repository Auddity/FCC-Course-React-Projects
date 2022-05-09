import React from 'react';

const Box = (props) => {

  const styles = {
    backgroundColor: props.on ? "#222222" : "transparent"
  }

  return (
    <div 
      className='box'
      style={styles}
      onClick={props.toggle}
      >
    </div>
    
  )
}

export default Box