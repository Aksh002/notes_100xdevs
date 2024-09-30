import  { React ,Suspense,useState } from 'react'
import './App.css'
import { BrowserRouter, Navigate, Route, Routes, useNavigate,Link } from "react-router-dom"
//import { Landing } from './components/Landing'
//import { Dashboard } from './components/Dashboard'
// BrowserRouter is a component provided by react-router framework that is responsible for enabling client-side routing in a React application. It wraps your entire application (or a portion of it) and manages the routing logic based on the current URL.

/*
//                                            Client-side-Routing
// Lets say we cooking smthing simiar to Linkedin 
// First we gotta crete 2  components, 1 for landing page and 1 for dashboard page, we do this in a seperate folder named components
// One thing to notice is, even though these 2 are seperate pages,seperate routes, but the top bar, which holds the logo in search bar and shows tabs like home,messages,... n all(refer slides),it remains constant.We can do that by putting that top bar div just above it, BrowserRouter is just another component actually, a wrapper, which has some conditional logic that controls what it renders, but its just a box. We can renderr above that div whatever we want

function App() {
  const [count, setCount] = useState(0)
  // IN some code basis what they do is they create an array of objects contaning all the routes and their components , and in the <Routes>, they just iterate over it
  return (
    <div>
      <div> 
        <Topbar></Topbar> 
      </div>
      <BrowserRouter>
        <Routes>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
          <Route path='/' element={<Landing/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function Topbar(){
  // IN dom we have access to this global object called  location, in which href holds the current url
  return <div>
    
    <button onClick={
      function(){
        window.location.href="/"
      }
    }>Landing</button>
    <button onClick={
      function(){
        window.location.href="/dashboard"
      }
    }>DashBoard</button>
  </div>
}



// There will be a hard reload on every buttom click
// But this way of doing this routing defeats the purpose as on each call of either "/" or "/dashboard", we are making a call and recieving the whole html-css-js bundle for each route. Our purpose was to make a single-page-app which takes eveything at once and from then, reply to users request by switching among client-routes


//                                                Correct way of route switching through button
//                                                              useNavigate() hook
// Lets u hook into react lifecycle and navigate between the routes, making sure there is no hard reload while switching. Belongs in react-router-dom
function App() {
  const [count, setCount] = useState(0)
  //const nvaigate=useNavigate()    // We cant do this, we can only invoke this hook inside BrowserRouter. its just that we can not initiate this hook outside of the component where it is actually functional, basically a component nsidde BrowserRouter. Just like we cant use <Router> outside BrowserRouter.
  // Wneed to invoke this into Topbar component and pass this component inside BrowserRouter
  return (
    <div>
      
      <BrowserRouter>
        <Topbar></Topbar>
        <Routes>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
          <Route path='/' element={<Landing/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function Topbar(){
  const navigate=useNavigate()
  return <div>
    
    <button onClick={
      function(){
        navigate("/")
      }
    }>Landing</button>
    <button onClick={
      function(){
        navigate("/dashboard")
      }
    }>DashBoard</button>
  </div>

  // Another way to do this by using <Link> instead of useNavigate() hook
  // Everywhere u can use Link, u can use useNavigate, BUT everywhere u can use  useNavigate, u cannot use Link

  // return <div>
    
  //   <button>
  //     <Link to="/">Landing</Link>
  //   </button>
  //   <Link to="/dashboard">Dashboard</Link>
  // </div>
}
// We wont see any reload this time
*/

//                                                        Lazy Loading
// THis technique makes sures no extra work is to be done, if the user is on page 1, only get the bundel with main react and page1 react, not the whole bundel of it. If user goes to page 2, it will get a bundel of page 2
// Its still a client side routing, just an optimal version of it
import { lazy,memo } from 'react'
const Dashboard = lazy(()=>import('./components/Dashboard'))    // Make sure to comment the above import statement bf4 running this
// Another imp bit of infomake sure u change "export function Dashboard" to "export default function Dashboard", this "default" will make sure that u can import as :- "import Dasboard from "..." " instead of "import { Dashboard } from "..." " way. Actually both ways can handle defualt export
const Landing = lazy(()=> import('./components/Landing'))

// with lazy-loaded components, you should wrap the part of your code that contains the Routes with Suspense. This ensures that while your lazy-loaded components are being fetched asynchronously, a fallback UI (such as a loading spinner or message) is displayed
function App() {
  const [count, setCount] = useState(0)
  // Suspense api
  return (
    <div>
      <BrowserRouter>
        <Topbar></Topbar>
        <Suspense fallback={<div>Loading....</div>}>
          <Routes>
            <Route path='/dashboard' element={<Dashboard/>}></Route>
            <Route path='/' element={<Landing/>}></Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  )
}
// dont get confused, just memoised this part to prevent from re-rendering
const Topbar=memo(function Topbar(){
  const navigate=useNavigate()
  return <div>
    
    <button onClick={
      function(){
        navigate("/")
      }
    }>Landing</button>
    <button onClick={
      function(){
        navigate("/dashboard")
      }
    }>DashBoard</button>
  </div>
})

export default App
