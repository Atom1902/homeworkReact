import React from 'react';

const Post = ({ post }) => {
    return (
        <div className='post'>
            <div>userId - {post.userId}</div>
            <div>id - {post.id}</div>
            <div>title - {post.title}</div>
            <div>text - {post.body}</div>

        </div>
    );
};

export {Post};