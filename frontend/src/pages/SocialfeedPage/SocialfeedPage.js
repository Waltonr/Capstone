import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import DisplayPosts from "../../components/DisplayPost/DisplayPost";
import CreatePost from "../../components/CreatePost/CreatePost";
import DisplayReplies from "../../components/DisplayReplies/DisplayReplies";
import CreateReplies from "../../components/CreateReply/CreateReply";

const SocialfeedPage = (props) => {
    const [posts, setAllPosts] = useState()
    const [replies, setAllReplies] = useState()
    const [user, token] = useAuth()

    useEffect(() => {
        const getPosts = async() => {
            try {
                let response = await axios.get("http://127.0.0.1:8000/api/post/all/", {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                });
                console.log(response.data)
                setAllPosts(response.data)
            } catch (error) {
                console.log("error with get all posts")
            }
        };
        const getReplies = async() => {
            try {
                let response = await axios.get("http://127.0.0.1:8000/api/replies/all/", {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                });
                console.log(response.data)
                setAllReplies(response.data)
            } catch (error) {
                console.log("error with get all replies")
            }
        };
        getPosts();
        getReplies();
    }, [token])


    return ( 
        <div>
            <h2>SOCIAL FEED</h2>
            <CreatePost />
            <DisplayPosts getAllPostsProperty={posts} />
            <CreateReplies />
            <DisplayReplies getAllRepliesProperty={replies} />
        </div>
     );
}
 
export default SocialfeedPage;