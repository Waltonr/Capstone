import React, {Fragment} from "react";
import Post from "../Post/Post";


const DisplayPosts = (props) => {


    return (
        <Fragment>
            {props.getAllPostsProperty &&
                props.getAllPostsProperty.map((post, index) => {
                    return(
                        <p className="form-control" key={post.id}>
                            <Post post={post} />
                        </p>
                    )
                    }
            )}
        </Fragment> 
    );
}
 
export default DisplayPosts;