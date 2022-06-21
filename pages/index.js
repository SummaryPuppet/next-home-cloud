import { getSession } from 'next-auth/react'
import Head from 'next/head'
import Content from '../components/Content'
import Dashboard from '../components/Dashboard'
import Navbar from '../components/Navbar'
import apiClient from '../apiClient/apiClient'

export default function HomePage({session,data}){
  return (
    <div>
      <Head>
        <title>Content</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar imgUsr={session.user.image} />
      <Content data={data} />
      {/*<Dashboard userName={session.user.name} />*/}
    </div>
  )
}

export const getServerSideProps = async(context)=>{
  const session = await getSession(context)
  const data = await apiClient.getApi('/')

  if (!session) {
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
