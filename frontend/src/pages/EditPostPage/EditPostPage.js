import React, {useState, useEffect} from "react";
import EditPost from "../../components/EditPost/EditPost";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { useParams } from "react-router-dom";

const EditPostPage = (props) => {
    const [user, token] = useAuth();
    const [post, setAllPost] = useState();
    const { id } = useParams();
    const {likes} = props
    const {dislikes} = props
    

    useEffect(() => {
        const getPost = async() => {
            try {
                let response = await axios.get(
                    `http://127.0.0.1:8000/api/post/${id}/`,
                    {
                        headers: {
                            Authorization: "Bearer " + token
                        }
                    }
                );
                console.log(response.data)
                setAllPost(response.data)
            } catch (error) {
                console.log("error with get post by id")
            }
        };
        getPost();
    }, [token])
    return ( 
        <EditPost post={post} likes={likes} dislikes={dislikes}/>
     );
}
 
export default EditPostPage;