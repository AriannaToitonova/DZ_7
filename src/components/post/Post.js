import React from 'react';

function PostPage({info}) {
    console.log(info)
    return (
        <ul>
            <li>{info.id}</li>
            <li>{info.title}</li>
            <li>{info.body}</li>
            <hr/>
        </ul>
    );
}

export default PostPage;