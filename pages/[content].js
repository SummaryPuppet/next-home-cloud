import {getSession} from "next-auth/react"
import apiClient from "../apiClient/apiClient"
import Content from "../components/Content"
import Navbar from "../components/Navbar"

export default function ContentPage({session,data}){

  return (
    <div>
      <Navbar imgUsr={session.user.image} />
      <Content data={data} />
    </div>
  )
}

export const getServerSideProps = async(context)=>{
  const session = await getSession(context)
  const data = await apiClient.getApi(context.params)

  if (!session){
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }

  return {
    props: {
      session,
      data
    }
  }
}
