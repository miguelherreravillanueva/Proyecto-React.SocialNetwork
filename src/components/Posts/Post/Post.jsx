import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Post = () => {
  const { posts } = useSelector((state) => state.posts)

  const post = posts?.posts?.map((post) => {
    return (
      <div className="post" key={post._id}>
        <Link to={"/post/" + post._id}>
        <p>{post.title}: {post.body}</p>
        </Link>
      </div>
    )
  })

  return (
    <div>
      {post}
    </div>
  )
}

export default Post