import { signOut } from 'next-auth/react'


export default function Dashboard({userName}){

  return (
    <aside className='absolute top-0 right-0 flex flex-col justify-end'>
      <h1 className="text-3xl">Dashboard</h1>
      <p>Hola {userName}</p>
      <button onClick={()=>signOut()}>Log out</button>
    </aside>
  )
}
