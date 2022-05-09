import React from 'react';

const Box = (props) => {
  // const [state, setState] = useState(props.on);

  const styles = {
    backgroundColor: props.on ? "#222222" : "transparent"
  }

  return (
    <div 
      id={props.id}
      className='box'
      style={styles}
      onClick={()=>props.toggle(props.id)}
      >
    </div>
    
  )
}

export default Box