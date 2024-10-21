import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Blog from './components/Blog/Blog'
import Booksmarks from './components/Booksmarks/Bookmarks'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
    <Header></Header>
    <div className='md:flex'>
      <Blog></Blog>
      <Booksmarks></Booksmarks>
    </div>
      
    </>
  )
}

export default App
