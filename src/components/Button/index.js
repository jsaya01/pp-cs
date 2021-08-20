import React from 'react'
import { Button } from 'react-bootstrap'

function ButtonView(props){
  return(
    <Button 
      variant={props.variant}
      style={props.style}
      block={props.block}
      disabled={props.disabled?props.disabled:false}
      onClick={()=>props.onClick?props.onClick():null}
      >
      {props.title}
     </Button>
  )
}

export default ButtonView