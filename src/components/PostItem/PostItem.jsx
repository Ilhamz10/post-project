import React from 'react';
import { useDispatch } from 'react-redux';
import '../../styles/PostItem.css'
import MyButton from '../UI/button/MyButton';

const PostItem = ({post, number}) => {
    const dispatch = useDispatch()
    const deletePost = (id) => {
        dispatch({type: 'DELETE_POST', payload: id})
    }
    return (
        <div className='post'>
            <div className="post-content">
                <h3>{number}. {post.title}</h3>
                <p>{post.body}</p>
            </div>
            <div className="btn-group">
                <MyButton onClick={() => deletePost(post.id)}>Delete</MyButton>
            </div>
        </div>
    );
};

export default PostItem;