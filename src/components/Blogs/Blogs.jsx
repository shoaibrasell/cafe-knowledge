import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import PropsTypes from 'prop-types';

const Blogs = ({handleAddToBookmark, handleMarkAsRead}) => {
  const [blogs , setBlogs ] = useState([])

  useEffect( () =>{
    fetch('blogs.json')
    .then(res => res.json())
    .then(data => setBlogs(data))
  },[]);

  return (
    <div className='md:w-2/3'>
      <h2 className='text-4xl mb-3'>Blogs : {blogs.length}</h2>
      {
        blogs.map(blog => <Blog 
          key={blog.id}
          blog={blog}
          handleAddToBookmark ={handleAddToBookmark}
          handleMarkAsRead ={handleMarkAsRead}
          ></Blog>)
      }
    </div>
  );
};

Blogs.protoType = {
  handleAddToBookmark : PropsTypes.func,
  handleMarkAsRead: PropsTypes.func
}
export default Blogs;