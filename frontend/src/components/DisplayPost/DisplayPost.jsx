import React, {Fragment} from "react";
import Post from "../Post/Post";


const DisplayPosts = (props) => {


    return (
        <Fragment>
            {props.getAllPostsProperty &&
                props.getAllPostsProperty.map((post, index) => {
                    return(
                        <tr className="form-control" key={post.id}>
                            <Post post={post} userid={post.user_id} />
                        </tr>
                    )
                    }
            )}
        </Fragment> 
    );
}
 
export default DisplayPosts;