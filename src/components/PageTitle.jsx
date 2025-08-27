import React from 'react'

const PageTitle = ({headLine_1, headLine_2, paraLine_1, paraLine_2}) => {
  return <>
      <div className="left_part">
      {headLine_1 ? <h1>{headLine_1}</h1> : ""}
      {headLine_2 ? <h1>{headLine_2}</h1> : ""}
      {paraLine_1 ? <p>{paraLine_1}</p> : ""}
      {paraLine_2 ? <p>{paraLine_2}</p> : ""}
      </div>
  </>
    
  
}

export default PageTitle