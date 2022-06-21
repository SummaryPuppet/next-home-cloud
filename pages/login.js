import {signIn, useSession} from "next-auth/react"
import {useRouter} from "next/router"


export default function LoginPage(){
  const {data: session, status } = useSession()
  const router = useRouter()

  if (status !== 'loading' && status == 'authenticated'){
    router.push('/')
  }

  const style = "py-2 px-4 rounded-lg text-white"

  return (
    <main 
      className="py-4 flex flex-col gap-4 items-center"
    >
      <h1 className="text-3xl">
        Login
      </h1>
      <button 
        onClick={()=> signIn('github')}
        className={style + " bg-black"}
      >
        Github Account
      </button>
      <button className={style + " bg-red-600"}>
        Google Account
      </button>
      <button className={style + " bg-blue-800"}>
        Facebook Account
      </button>
    </main>
  )
}
