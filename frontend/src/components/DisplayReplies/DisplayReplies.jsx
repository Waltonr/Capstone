import React, {Fragment} from "react";
import Reply from "../Reply/Reply";


const DisplayReplies = (props) => {


    return (
        <Fragment>
            {props.getAllRepliesProperty &&
                props.getAllRepliesProperty.map((reply, index) => {
                    return(
                        <p className="form-control" key={reply.id}>
                            <Reply reply={reply} />
                        </p>
                    )
                    }
            )}
        </Fragment> 
    );
}
 
export default DisplayReplies;