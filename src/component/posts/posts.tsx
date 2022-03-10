import React, { FunctionComponent, useEffect, useState } from 'react'
import Post from './post/post'
import { PostInterface } from './post'

const Posts : FunctionComponent = () =>
{
    const [Posts, setPosts] = useState<PostInterface[]>([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then( (datas) => {
            setPosts(datas)
        })

    },[])

    return (
        <div className='row'>
            <h3>All Posts</h3>
            {
                Posts.map((post)=>(
                    <Post key={post.id} post={post}/>
                ))
            }
            
        </div>
    )
}


export default Posts;