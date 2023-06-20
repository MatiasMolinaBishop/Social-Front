import './Profile.css'

import Topbar from "../../components/topbar/Topbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"

const Profile = () => {
    return(
        <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="assets/post/3.jpeg"
                alt=""
              />
              <img
                className="profileUserImg"
                src="assets/person/7.jpeg"
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Matias Molina</h4>
                <span className="profileInfoDesc">I need to leanr and get a job!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            {/* profilr here will indicate if rightbar is in home or profile page */}
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
    )
}

export default Profile