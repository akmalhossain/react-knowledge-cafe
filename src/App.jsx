import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Blog from './components/Blog/Blog'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
    <Header></Header>
    <Blog></Blog>
      
    </>
  )
}

export default App
