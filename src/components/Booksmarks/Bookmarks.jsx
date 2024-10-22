import PropTypes from "prop-types";
import Bookmark from "../Bookmark.jsx/Bookmark";

const Bookmarks = ({bookmarks, readingTime})=>{
    return(

    
    <div className="w-1/3 text-center bg-slate-50 space-y-6 ml-6 p-6">
        <div>
            <h3 className="text-4xl text-center"> Reading Time: {readingTime}</h3>
        </div>
<h2 className="text-3xl">Bookmarked Blogs: {bookmarks.length}</h2>
{bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark ={bookmark}></Bookmark>)}
</div>
)
}

Bookmarks.propTypes={
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number,
}
export default Bookmarks;