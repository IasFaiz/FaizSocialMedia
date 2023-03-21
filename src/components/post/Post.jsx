import "./post.css";
import { MoreVert } from "@mui/icons-material";

export default function Post() {
  return (
    <div className="posts">
      <div className="postcontainer">
        <div className="upperpostpart">
          <div className="upperpostleftpart">
            <img
              src="/assets/person/1.jpeg"
              alt=""
              className="upperpostpartimage"
            />
            <span className="upperpostleftpartname">Faiz Ahmad</span>
            <span className="upperpostleftpartdate">5 mins ago</span>
          </div>
          <div className="upperpostrightpart">
            <MoreVert className="upperpostrightpartMoreVert" />
          </div>
        </div>
        <div className="centerpostpart">
          <span className="centerpostpartcaption">Hello All.</span>
          <img
            src="/assets/post/1.jpeg"
            alt=""
            className="centerpostpartImage"
          />
        </div>
        <div className="lowerpostpart">
          <div className="lowerpostpartleft">
            <div className="likeimagecontainer">
              <img src="assets/like.png" alt="" className="likeimage" />
              <img src="assets/heart.png" alt="" className="likeimage" />
            </div>
            <span className="lowerpostpartliketext">33 People like it</span>
          </div>
          <div className="lowerpostpartright">
            <span className="lowerpostpartcommenttext">12 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
