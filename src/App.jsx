import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter,Outlet,RouterProvider } from 'react-router-dom'
import Societies from './components/Societies'
import About from './components/About'
import Form from './components/Form'
import Signup from './authentication/Signup'



const App=()=>{
  return(
      <>
      <Outlet />
      </>
     
  )
}

const appRouter=createBrowserRouter(
  [
      {
          path:"/",
          element:<App />,
          children:[
              {
                  path:"/",
                  element:[<Nav/>,<Hero/>]
                  
              },
              {
                  path:"/form",
                  element:[<Form/>]
              },
              {
                  path:"/about",
                  element:[<Nav/>,<About/>]
              },
              {
                  path:"/societies",
                  element:[<Societies/>]
              },
              {
                path:"/signup",
                element:[<Signup/>]
              }
          ],
          errorElement:<Error/>
      }
  ]
)


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

// export default App
