import { useEffect } from "react"
import { useState } from "react"
import PageLoader from "./components/PageLoader"
import {motion} from 'framer-motion'
import Home from './Page/Home'


function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
  }, [])
  return (
    <>
      {!loading ? 
        <Home/>
      :
          <PageLoader />
      }
    </>
  )
}

export default App
