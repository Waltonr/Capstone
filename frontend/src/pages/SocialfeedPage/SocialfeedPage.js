import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import DisplayPosts from "../../components/DisplayPost/DisplayPost";
import CreatePost from "../../components/CreatePost/CreatePost";


const SocialfeedPage = (props) => {
    const [posts, setAllPosts] = useState()
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
        getPosts();
    }, [token])


    return ( 
        <div className="socialfeed">
            <h2 className="socialfeedname">SOCIAL FEED</h2>
            <div>
                <CreatePost create={posts}/>
            </div>
            <div>
                <DisplayPosts getAllPostsProperty={posts} />
            </div>
        </div>
     );
}
 
export default SocialfeedPage;