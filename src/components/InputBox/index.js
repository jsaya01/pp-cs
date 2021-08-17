import React from 'react'
import { Form } from 'react-bootstrap'
function InputBox(props) {
    return (
        <Form.Group controlId={props.controlId} style={props.formStyles ? props.formStyles : { marginBottom: '0px' }}>
          {props.label &&(
            <Form.Label style={props.labelStyle}>{props.label}</Form.Label>
          )}  
          
          
            <Form.Control
                type={props.type?props.type:"text"} 
                placeholder={props.placeholder}
                onBlur={props.onBlur}
                onChange={props.onChange}
                style={props.inputStyles}
                value={props.value}
                onKeyDown={props.onKeyDown}
                className={props.className}
                name={props.controlId}
                
            />
        
        </Form.Group>
    )
}

export default InputBox