import {useRouter} from 'next/router'
import { useState, useEffect } from 'react'
import apiClient from '../apiClient/apiClient'
import File from './File'

export default function Content({child, data}){
  const [directories, setDirectories] = useState([])
  const [files, setFiles] = useState([])

  const router = useRouter()

  const getContent = async()=>{
    let get 

    router.query.content
      ? get = await apiClient.getApi(router.query.content)
      : get = data

    setDirectories(get.content.content.directories)
    setFiles(get.content.content.files)

    window.localStorage.setItem("directories", get.content.content.directories)
    window.localStorage.setItem("files", get.content.content.files)
  } 

  useEffect(()=>{
    getContent()
  },[])

  return(
    <main className="flex flex-col gap-3 text-center bg-stone-400">
      <h1 className="text-3xl">Content</h1>
      <section 
        className="grid sm:grid-cols1 sm:place-content-center md:grid-cols-5 xl:grid-cols-5 grid-rows-3 gap-3 place-items-stretch"
      >
        {
          directories.map((directory, index)=>(
            <File name={directory} isDirectory={true} key={index} />
          ))
        }
        {
          files.map((file, index)=>(
            <File name={file} key={index} />
          ))
        }
      </section>
      {child}
    </main>
  )
}

