import React from 'react';
import PostPage from "../../components/post/Post";
import {useState, useEffect} from "react";

function MainPage(props) {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState(false)

    const getPosts = () => {
        setLoading(true)
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                setPosts(data)
                setLoading(false)

            })
    }

    useEffect(()=> {
        getPosts()
    }, [status])
    return (
        <div>
            <h1>Posts</h1>
            <button onClick={()=> setStatus(!status)}>update</button>
            {
                loading === true
                    ?
                    <div>загрузка...</div>
                    :
                    posts.map(post => <PostPage info={post}/>)
            }
        </div>
    );
}

export default MainPage;