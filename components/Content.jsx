import {useRouter} from 'next/router'
import { useState, useEffect } from 'react'
import apiClient from '../apiClient/apiClient'
import File from './File'

export default function Content({data}){
  const [directories, setDirectories] = useState([])
  const [files, setFiles] = useState([])

  const router = useRouter()

  const getContent = async()=>{
    let get 

    router.query.content
      ? get = await apiClient.getApi(router.query.content)
      : get = await apiClient.getApi('/')

    setDirectories(get.content.content.directories)
    setFiles(get.content.content.files)
  } 

  useEffect(()=>{
    getContent()
  },[])

  const styleArticle = "flex sm:flex-col xl:flex-row justify-center"

  return(
    <main className="text-center bg-stone-400">
      <h1 className="text-3xl">Content</h1>
      <section className="flex flex-col gap-3">
        <article className={styleArticle}>
          {
            directories.map((directory, index)=>(
              <File name={directory} key={index} />
            ))
          }
        </article>
        <article className={styleArticle}>
        {
          files.map((file, index)=>(
            <File name={file} key={index} />
          ))
        }
        </article>
      </section>
    </main>
  )
}

