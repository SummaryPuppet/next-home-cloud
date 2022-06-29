import {getSession} from "next-auth/react"

import apiClient from "../apiClient/apiClient"
import Home from '../components/Home'

export default function ContentPage({session,data}){
  return <Home session={session} data={data} /> 
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
