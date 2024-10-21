
import PropTypes from 'prop-types';

const SingleBlog = ({blog}) => {
    const {title, cover, author,author_img, reading_time, posted_date, hashtags} = blog;
    console.log(blog)
    return (
        <div>
            <img src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between'>
                <div className='flex items-center gap-5'>
                    <img className='w-24 h-24 rounded-full' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                   <span>{reading_time} read</span> 
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtags.map((hash, index) => <span key={index}><a href="">{hash}</a></span>)
                }
            </p>
        </div>
    );
};
SingleBlog.propTypes={
    blog: PropTypes.object.isRequired
}
export default SingleBlog;