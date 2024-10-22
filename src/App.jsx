import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Blog from './components/Blog/Blog'
import Booksmarks from './components/Booksmarks/Bookmarks'


function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);



  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
    
  }


  const handleMarkAsRead = time =>{
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);

    console.log('marking as read', time);
  }

  return (
    <>
     
    <Header></Header>
    <div className='md:flex max-w-7xl mx-auto'>
      <Blog handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blog>
      <Booksmarks bookmarks={bookmarks} readingTime={readingTime}></Booksmarks>
    </div>
      
    </>
  )
}

export default App
