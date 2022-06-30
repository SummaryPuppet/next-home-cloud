import { useState, useEffect } from "react"

export default function CreateDir (){
  const [nameDir, setNameDir] = useState("")

  const handleInput = (e)=>{
    setNameDir(e.target.value)
  }

  useEffect(()=>{
    setNameDir("")
  },[])

  return (
    <form
      className="flex flex-col gap-3"
    >
      <legend className="text-3xl">
        Create Directory
      </legend>
      <input 
        value={nameDir} 
        onChange={handleInput} 
        placeholder="name..."
        className="mt-8 text-white bg-transparent border-2 border-stone-700 rounded-lg"
      />
      <button className="mt-8 py-3 text-white bg-emerald-600 rounded-lg">
        Create Directory
      </button>
    </form>
  )
}
