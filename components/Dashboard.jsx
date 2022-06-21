import { signOut } from 'next-auth/react'

export default function Dashboard(userName){

  return (
    <div>
      <h1 className="text-3xl">Dashboard</h1>
      <p>Hola {userName.userName}</p>
      <button onClick={()=>signOut()}>Log out</button>
    </div>
  )
}
