import React from 'react'

const Post = React.forwardRef(({ post }, ref) => {
  const postBody = (
    <>
      <div>
        <h2>{post.name}</h2>
        <p>{post.status}</p>
        <p>Post ID: {post.id}</p>
      </div>
      <img src={post.image} alt='' />
    </>
  )
  const content = ref ? (
    <article ref={ref}>{postBody}</article>
  ) : (
    <article>{postBody}</article>
  )
  return content
})

export default Post
