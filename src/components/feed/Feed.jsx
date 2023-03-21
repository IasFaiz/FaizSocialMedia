import Post from "../post/Post";
import Share from "../share/Share";
import "./Feed.css";

export default function Feed() {
  return (
    <div className="Feed">
      <div className="feedHeader">
        <Share />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}
