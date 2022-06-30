import { useState, useEffect } from "react"

export default function Warning({warningText}){
  const [style, setStyle] = useState("")

  const handleClick = ()=>{
    setStyle("hidden")
  }
  
  useEffect(()=>{
    setStyle("")
  },[])

  return (
    <div 
      className={`mb-4 px-10 py-1 ${style} border-2 border-red-800 rounded-md bg-red-500`}
    >
      <p className="text-white">
        {warningText}
      </p>
      <button onClick={handleClick}>
        x
      </button>
    </div>
  )
}
