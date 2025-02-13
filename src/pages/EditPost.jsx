import React from 'react'
import { Container, PostForm } from '../components'
import {useState,useEffect} from "react"
import appwriteService from "../appwrite/config"
import { useParams, useNavigate } from 'react-router-dom'
function EditPost() {
    const [posts, setPosts] = useState([])
    const slug = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if(slug){
            appwriteService.getPosts(slug).then((posts) => {
                if(posts){
                    setPosts(posts)
                }
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate])
  return posts ? (
    <div className='py-8'>
    <Container>
    <PostForm posts={posts}/>
    </Container>
    </div>
  ) : null
}

export default EditPost
