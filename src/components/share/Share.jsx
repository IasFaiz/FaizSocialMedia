import "./Share.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material";

export default function Share() {
  return (
    <div className="sharecontainer">
      <div className="uppershare">
        <img src="/assets/person/1.jpeg" alt="" className="uppershareimg" />
        <input
          type="text"
          placeholder="What's in your mind Faiz?"
          className="uppershareinput"
        />
      </div>
      <hr className="uppersharehr" />
      <div className="lowershare">
        <div className="lowershareitems">
          <PermMedia htmlColor="tomato" className="shareIcon" />
          <span className="lowershareitemtext">Photo or Video</span>
        </div>
        <div className="lowershareitems">
          <Label htmlColor="blue" className="shareIcon" />
          <span className="lowershareitemtext">Tag</span>
        </div>
        <div className="lowershareitems">
          <Room htmlColor="green" className="shareIcon" />
          <span className="lowershareitemtext">Location</span>
        </div>
        <div className="lowershareitems">
          <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
          <span className="lowershareitemtext">Feelings</span>
        </div>
        <div className="button">
          <button className="sharebutton">Share</button>
        </div>
      </div>
    </div>
  );
}
