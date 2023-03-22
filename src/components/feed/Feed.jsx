import Post from "../post/Post";
import Share from "../share/Share";
import "./Feed.css";
import { Posts } from "../../DummyData";

export default function Feed() {
  console.log(Posts);
  return (
    <div className="Feed">
      <div className="feedHeader">
        <Share />
        {Posts.map((e, idx) => {
          return <Post data={e} key={idx} />;
        })}
      </div>
    </div>
  );
}
