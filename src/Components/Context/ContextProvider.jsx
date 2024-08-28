import React ,{useState} from 'react'
import Context from './CreateContext'


const ContextProvider = ({children}) => {
    const[hashToggle,setHashToggle]= useState(false)
  return (
  
      <Context.Provider value={{hashToggle,setHashToggle}}>
        {children}
      </Context.Provider>
  )
}

export default ContextProvider
