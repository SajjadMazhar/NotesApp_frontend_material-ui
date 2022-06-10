import React from 'react'
const Loading = () => {
  return (
    <div style={{display:"flex", justifyContent:"center"}}>
      <img style={{width:"10rem"}} src={`${require("./loading.gif")}`}/>
    </div>
  )
}

export default Loading
