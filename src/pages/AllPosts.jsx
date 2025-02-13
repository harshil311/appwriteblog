import React,{useState, useEffect} from 'react'
import { PostCard } from '../components'
import appwriteService from "../appwrite/config"
import {Container} from '../components'
function Allposts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        appwriteService.getPosts([]).then((posts) => {
            if(posts){
                setPosts(posts.documents)
            }
        })
    }, [])
  return (
    <div className='w-full py-8'>
    <Container>
    <div className='flex flex-wrap'>
        {posts.map((post) => (
            <div key={post.$id} className='p-2 w-1/4'>
            {console.log("Post data:", post)}
            {console.log("Featured Image:", post.featuredImage)}
            <PostCard {...post}/>
            </div>
        ))}
        </div>
    </Container>
    </div>
  )
}

export default Allposts
