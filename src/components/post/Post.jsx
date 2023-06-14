import './Post.css'
import { MoreVert } from '@mui/icons-material';
import {Users} from '../../dummyData'
import { useState } from 'react';

const Post = ({post}) => {

    const [like, setLike] = useState(post.like)
    const [isLiked, setIdLiked] = useState(false)

    //const post = props.post
    //console.log(post)
    console.log(post.desc)

    const likeHandler = () => {
        setLike(isLiked? like -1: like+1)
        setIdLiked((prevState) => !prevState)

    }

    return(
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className='postProfileImg' src={Users.filter((user) => user.id === post?.userId)[0].profilePicture} alt=''/>
                        {/* WE WANT TO DYNAMICALLY CHANGE THE USER WHO POSTED. FROM ARRAY OF USERS WE IMPORTED WE FITER*/}
                        {/* WE CHECK USERS .FIILTER WHICH LOOPS ARR. USER@LOOP IF PORPERTY USERID === PROPWERTY POST.USERID THEN RETURN USERNAME*/}
                        <span className='postUsername'>{Users.filter((user) => user.id === post?.userId)[0].username}</span>
                        <spn className='postDate'>{post.date}</spn>
                    </div>
                    <div className="postTopRight"><MoreVert/></div>
                </div>
                <div className="postCenter">
                    <span className='postText'>{post?.desc}</span>
                    <img className='postImg' src={post.photo} alt=''/>
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" src="assets/like.png" alt="" onClick={likeHandler}/>
                        <img className="likeIcon" src="assets/heart.png" alt="" onClick={likeHandler}/>
                        <span className="postLikeCounter">{like} people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post