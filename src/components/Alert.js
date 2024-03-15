import React from 'react'

function Alert(props) {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1) //will take everything except 1
  }
  return (
    /*props.alert && (if you add this syntax, props.alert will be evaluated first. If its null aage ka shit wont happen                    )*/ props.alert && <div className= {`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
    </div>
  )
}

export default Alert
