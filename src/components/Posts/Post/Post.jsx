import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { HeartOutlined, HeartFilled, DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { deletePostById, getPostById, dislike, like } from '../../../features/posts/postsSlice';
import EditModal from './EditModal/EditModal';
import "./Post.scss";
import AddComment from '../../PostDetail/AddComment/AddComment';

const Post = () => {
  const { posts } = useSelector((state) => state.posts)
  const { user } = useSelector((state) => state.auth);
  const { comment } = useSelector((state) => state.comments);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();
  const [selectedImage] = useState(0);
  const images = [
    "data:image/jpeg;base64,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",
  ];

  const showModal = (_id) => {
    dispatch(getPostById(_id));
    setIsModalVisible(true);
  };

  const post = posts?.map((post) => {
    const isAlreadyLiked = post.likes?.includes(user?.user._id);
    return (
      <>
        <div className="post" key={post._id}>
          <img src={images[selectedImage]} alt="" width={400} height={200} />
          <br />
          <Link to={"/post/" + post._id}>
            <p><strong>
              {post.userId.name}
            </strong>
              <br />
              <br />
              <i>{post.body}</i>
              <br />
              <br />
              Comments:
              <i>
                {post.commentIds?.map((comment => <p>{comment.body}</p>))}
              </i>
            </p>
          </Link>
          <div className='botons'>
            <span className="wish"> {post.likes?.length} </span>
            <span>
              {isAlreadyLiked ? (
                <HeartFilled onClick={() => dispatch(dislike(post._id))} />
              ) : (
                <HeartOutlined onClick={() => dispatch(like(post._id))} />
              )}
            </span>
            <span>
              {user.user?._id === post.userId?._id ? (
                <>
                  <DeleteOutlined onClick={() => dispatch(deletePostById(post._id))} />
                  <EditOutlined onClick={() => showModal(post._id)} />
                </>

              ) : ("")
              }
            </span>
          </div>
        </div>
        <div className='addComment'>
          <AddComment _id={post._id} />
        </div>
        <hr />
      </>
    )
  })

  return (
    <div className='post1'>
      {post}
      <EditModal visible={isModalVisible} setVisible={setIsModalVisible} />
    </div>
  )
}

export default Post