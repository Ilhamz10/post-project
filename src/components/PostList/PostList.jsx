import React, { useState } from 'react';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import PostItem from '../PostItem/PostItem';

const PostList = ({ title, posts }) => {

    return (
        <div>
            <h1 style={{ textAlign: 'center', marginTop: '10px' }}>{title}</h1>
            {posts.map((item, index) =>
                <PostItem number={index + 1} key={item.id} post={item} />
            )}
        </div>
    );
};

export default PostList;