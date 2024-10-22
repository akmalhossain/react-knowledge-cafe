
import PropTypes from 'prop-types';
import { MdBookmarkBorder } from "react-icons/md"

const SingleBlog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
    const {title, cover, author,author_img, reading_time, posted_date, hashtags} = blog;

    return (
        <div className='mt-20 space-y-4'>
            <img className='w-full' src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between  mt-8 my-4'>
                <div className='flex items-center gap-6 '>
                    <img className='w-16 h-16 rounded-full' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl'>{author}</h3>
                        <p className='mt-4'>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-start'>
                   <span>{reading_time} min read</span> 
                   <button onClick={()=>handleAddToBookmark(blog)} className='ml-2 text-2xl'><MdBookmarkBorder /></button>
                </div>
            </div>
            <h2 className="text-4xl mb-4">{title}</h2>
            <p>
                {
                    hashtags.map((hash, index) => <span key={index}><a href="">{hash}</a></span>)
                }
            </p>
            <button 
            onClick={()=>handleMarkAsRead(reading_time)}
            className='font-bold text-purple-800 underline'>Mark as read</button>
        </div>
    );
};
SingleBlog.propTypes={
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func

}
export default SingleBlog;