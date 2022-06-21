import { useRef, useState, useEffect } from "react"

export default function SubmitForm(){
  const [files, setFiles] = useState()
  const fileInput = useRef()
  

  const haveFiles = ()=>{
    if (fileInput.current.value == ""){
      console.error("not files")
    } else {
      if (fileInput.current.value){

      }
    }
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    haveFiles()
  }

  useEffect(()=>{

  },[])

  return (
    <form 
      onSubmit={handleSubmit}
      className="flex flex-col gap-4"
    >
      <legend className="text-3xl">
        Submit
      </legend>
      <input 
        type="file" 
        name="files"
        ref={fileInput}
      />
      <button className="py-2 text-white bg-violet-800 rounded-lg">
        Submit
      </button>
    </form>
  )
}
