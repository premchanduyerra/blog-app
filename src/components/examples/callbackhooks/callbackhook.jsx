import React from 'react'

const callbackhook = () => {
  return (
    <div>callbackhook</div>
  )
}

 export default React.memo(callbackhook)
