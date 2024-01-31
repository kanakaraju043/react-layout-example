import React from 'react'
import BlogCard from './BlogCard'

const BlogList = () => {

    const list = [
        1,2,3,4,5,7,8,9,10
    ]

  return (
    <div className='grid grid-cols-3 gap-3'>
        {list.map ( item => <BlogCard key={item} />)}
    </div>
  )
}

export default BlogList