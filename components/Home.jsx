import Head from 'next/head'

import { useState } from 'react'

import Content from './Content'
import Dashboard from './Dashboard'
import Navbar from './Navbar'

export default function Home({session, data}){
  const [openDashboard, setOpenDashboard] = useState(false)

  const handleDashboard = ()=>{
    openDashboard
      ? setOpenDashboard(openDashboard = false)
      : setOpenDashboard(openDashboard = true)
  }

  return (
    <>
      <Head>
        <title>Content</title>
        <meta name="viewport" content="initial-scale=1.0, width=    device-width" />
      </Head>

      <Navbar imgUsr={session.user.image} openDashboard={handleDashboard} />
      <Content data={data}>
        {
          openDashboard
            ? <Dashboard userName={session.user.name} />
            : <div></div>
        }
      </Content>
    </>
  )
}
