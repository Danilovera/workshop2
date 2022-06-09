import  { useState } from 'react'

export const UseHooks = (initialSatate = {}) => {

    const [data, setData] = useState(initialSatate)

  const handleChange = ({target}) =>{ setData({
    ...data,
    [target.name] : target.value
    
  })
}

const handleReset = () =>{
    setData(initialSatate)
}
 
     return[data, handleChange, handleReset] 

  
}

export default UseHooks