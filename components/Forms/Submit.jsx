import { useRef, useState, useEffect } from "react"
import apiClient from "../../apiClient/apiClient"
import Warning from "../Warning"

export default function SubmitForm(){
  const [warning, setWarnig] = useState()
  const fileInput = useRef()

  const submitBackend = async()=>{
    let formData = new FormData()
    formData.append("file", fileInput.current.files[0])
    await apiClient.submitApi(formData)
  }

  const isExist = async(directory, name)=>{
    const res = await apiClient.getApi("")

    if (directory){
      return res.content.content.directories.includes(name)
    } else {
      return res.content.content.files.includes(name)
    }
  }
  
  const haveFiles = ()=>{
    if (fileInput.current.value == ""){
      setWarnig(<Warning warningText="not files" />)
    } else {
      if (fileInput.current.value == isExist(false, fileInput.current.files[0].name)){
        setWarnig(<Warning warningText="file is exist" />)
      } else {
        submitBackend()
      }
    }
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    haveFiles()
  }

  useEffect(()=>{
    setWarnig(undefined)
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
      {warning}
    </form>
  )
}
