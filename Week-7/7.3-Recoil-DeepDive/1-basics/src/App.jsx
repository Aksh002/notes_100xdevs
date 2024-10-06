import { useState } from 'react'

//                                              Async Data queries
// We will be building Linkedin Top bar whic has 6 buttons/blocks like Home,MyNetwork,Jobs,Messaging,Notification,Me
// Task will be to display "no. of updates/notifications" notifier on top of each block dynamically, where that number is not hard coded but coming from a backend call 
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { notifications, totalNotificationSelector } from './atoms'
import { useEffect } from 'react'
import axios from 'axios'
/*
function App() {
  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>
}

function MainApp() {
  const [networkCount, setNetworkCount] = useRecoilState(notifications)
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  useEffect(() => {
    // fetch
    axios.get("http://localhost:3000/notif")
      .then(res => {
        setNetworkCount(res.data)
      })
  }, [])

  return (
    <>
      <button>Home</button>
      
      <button>My network ({networkCount.networks >= 100 ? "99+" : networkCount.networks})</button>
      <button>Jobs {networkCount.jobs}</button>
      <button>Messaging ({networkCount.messaging})</button>
      <button>Notifications ({networkCount.notifications})</button>

      <button>Me ({totalNotificationCount})</button>
    </>
  )
}
// This whole classical way of dealing with async call, has a issue, when we reload, theres a flash for a sec where all notif are displayes defualt 0, before new values of them are displayed. Thats pretty ugly
// Also the code is also ugly
// One cure we might think could be transporting the axios logic inside notifications atom,with default storing data from an async fxn ,thus removing the bakchodi of default 0, but that would throw an error,as default value for an atom must be synchronous
// Basically thiks is not the right way to do async queries
*/
//                                                            Async Data queries
// We use selctors to implement this 
// Selectors can be passed as a default value for an atom, and get fxn of selector can hold an async fxn to fetch the data
function App() {
  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>
}

function MainApp() {
  const [networkCount, setNetworkCount] = useRecoilState(notifications)
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);
  
  return (
    <>
      <button>Home</button>
      
      <button>My network ({networkCount.networks >= 100 ? "99+" : networkCount.networks})</button>
      <button>Jobs ({networkCount.jobs})</button>
      <button>Messaging ({networkCount.messaging})</button>
      <button>Notifications ({networkCount.notifications})</button>

      <button>Me ({totalNotificationCount})</button>
    </>
  )
}
export default App
