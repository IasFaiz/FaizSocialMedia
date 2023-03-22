import "./rightbar.css";
import { Users } from "../../DummyData";

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarcontainer">
        <div className="birthdaybox">
          <img src="assets/gift.png" alt="" className="birthdayimage" />
          <span className="birthdaytext">
            <b>Virat Kohli</b> and <b>5 others </b>have birthday today.
          </span>
        </div>

        <div className="adbox">
          <img src="assets/ad.png" alt="" className="adimage" />
        </div>

        <div className="onlinefriends">
          <span className="onlinefriendtitle">Online Friends</span>

          {Users.map((e, idx) => {
            return (
              <div className="onlinefriendscontainer" key={idx}>
                <div className="imageandonline">
                  <img
                    src={e.profilePicture}
                    alt={e.id}
                    className="onlineimage"
                  />
                  <div className="onlinetag"></div>
                </div>
                <span className="onlinefriendname">{e.username}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
