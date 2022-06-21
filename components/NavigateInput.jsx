import Link from "next/link"
import {useRouter} from "next/router"
import { useState, useEffect } from "react"

export default function NavigateInput (){
  const [inputRoute, setInputRoute] = useState("")
  const router = useRouter()

  const handleInput = (e)=>{
    setInputRoute(e.target.value)
  }

  const handleButton = ()=>{
    router.push(`http://localhost:3000/${inputRoute}`)
  }

  useEffect(()=>{
    setInputRoute("")
  },[])

  return (
    <ul className="flex gap-3">
      <Link href="/">
        <a>home</a>
      </Link>
      <input 
        className="bg-transparent rounded-lg"
        value={inputRoute}
        onChange={handleInput}
      />
      <button onClick={handleButton}>
        jump
      </button>
    </ul>
  )
}
