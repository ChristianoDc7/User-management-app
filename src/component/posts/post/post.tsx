import React, { FunctionComponent } from "react";
import { PostInterface } from "../post";

type Props = {
    post : PostInterface
}

const Post : FunctionComponent <Props> = ({post}) =>
{
    const {userId, id, title , body} = post;

    return (
        <div className="card col s3 m4">
            <div className="card-content">
                <div className="card-title">{id} - {title} </div>
                <p>{body}</p>
            </div>
        </div>
    )
}

export default Post;