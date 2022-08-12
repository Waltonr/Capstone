import React, {Fragment} from "react";
import Chat from "../Chat/chats";


const DisplayChats = (props) => {


    return (
        <Fragment>
            {props.getAllChatsProperty &&
                props.getAllChatsProperty.map((chat, index) => {
                    return(
                        <tr className="form-control" key={chat.id}>
                            <Chat chat={chat} chatid={chat.user_id} />
                        </tr>
                    )
                    }
            )}
        </Fragment> 
    );
}
 
export default DisplayChats;