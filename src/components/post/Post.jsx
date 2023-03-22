import "./post.css";
import { MoreVert } from "@mui/icons-material";
import { Users } from "../../DummyData";

export default function Post({ data }) {
  console.log(data);
  return (
    <div className="posts">
      <div className="postcontainer">
        <div className="upperpostpart">
          <div className="upperpostleftpart">
            <img
              src={
                data
                  ? Users[data.id - 1].profilePicture
                  : "/assets/person/1.jpeg"
              }
              alt="1"
              className="upperpostpartimage"
            />
            <span className="upperpostleftpartname">
              {data ? Users[data.id - 1].username : "Faiz"}
            </span>
            <span className="upperpostleftpartdate">{`${data.date}`}</span>
          </div>
          <div className="upperpostrightpart">
            <MoreVert className="upperpostrightpartMoreVert" />
          </div>
        </div>
        <div className="centerpostpart">
          <span className="centerpostpartcaption">{data.desc}</span>
          <img src={data.photo} alt="" className="centerpostpartImage" />
        </div>
        <div className="lowerpostpart">
          <div className="lowerpostpartleft">
            <div className="likeimagecontainer">
              <img src="assets/like.png" alt="" className="likeimage" />
              <img src="assets/heart.png" alt="" className="likeimage" />
            </div>
            <span className="lowerpostpartliketext">{`${data.like} People like it `}</span>
          </div>
          <div className="lowerpostpartright">
            <span className="lowerpostpartcommenttext">{`${data.comment} Comment `}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
