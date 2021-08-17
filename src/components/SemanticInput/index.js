import React from 'react'
import FontAwesome from 'react-fontawesome'
import { Form, Icon, Input } from 'semantic-ui-react';

function SemanticInput(props) {
  
   
  return (

    <Form.Field   style={{ width: '100%' }}>
      <Input
        
        style={props.formStyles ? props.formStyles : { width: '100%' }}
        value={props.value}
        type={props.type ? props.type : "text"}
        placeholder={props.placeholder}
        onChange={props.onChange ? props.onChange : null}
        onBlur={props.onBlur ? props.onBlur : null}
        onKeyUp={props.onKeyUp ? props.onKeyUp : null}
        name={props.name}
        className={props.className}
        iconPosition={props.position}
        icon={props.icon?
          <Icon
            name={props.icon}
            link
            onClick={()=>props.onIcon?props.onIcon():null}
            
          />:
          null
        }
       
      />
    </Form.Field>

  )
}

export default SemanticInput