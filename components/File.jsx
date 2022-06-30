import Link from "next/link";
import {useState, useEffect} from "react";
import { useRouter } from "next/router";

export default function File({name}){
  const [route, setRoute] = useState("")
  const router = useRouter()

  const isDirectory = ()=>{
    isDirectory
      ? setRoute(route = `/${name}` )
      : setRoute(route = "/")
  }

  useEffect(()=>{
    if (router.pathname == '/[content]'){
      setRoute(route => `/${route}-${name}`)
    } else {
      isDirectory()
    }
  },[])
  
  return (
    <div className="px-4 py-2 rounded bg-stone-600">
      <Link href={route}>
        <a className="text-lg">
          {name}
        </a>
      </Link>
    </div>
  )
}
