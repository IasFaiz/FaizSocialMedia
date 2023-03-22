import "./rightbar.css";

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
          <div className="onlinefriendscontainer">
            <div className="imageandonline">
              <img src="/assets/person/1.jpeg" alt="" className="onlineimage" />
              <div className="onlinetag"></div>
            </div>
            <span className="onlinefriendname">Faiz Ahmad</span>
          </div>
        </div>
      </div>
    </div>
  );
}
