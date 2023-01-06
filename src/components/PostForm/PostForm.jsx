import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import MyButton from '../UI/button/MyButton';
import MyInput from '../UI/input/MyInput';

const PostForm = ({ create }) => {
    const [newPost, setNewPost] = useState({
        title: '',
        body: ''
    })
    const dispatch = useDispatch()
    const addNewPost = (e) => {
        e.preventDefault();
        dispatch({type: 'ADD_POST', payload: {...newPost, id: Date.now()}})
    }

    return (
        <form>
            <MyInput
                value={newPost.title}
                onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                type="text"
                placeholder='Post title'
            />
            <MyInput
                value={newPost.body}
                onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
                type="text"
                placeholder='Post description'
            />
            <MyButton onClick={addNewPost}>Add new post</MyButton>
        </form>
    );
};

export default PostForm;