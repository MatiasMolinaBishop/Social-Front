import './Rightbar.css'
import {Users} from '../../dummyData'
import Online from '../online/Online'



const Rightbar = ({profile}) => {

    const HomeRightbar = () => {
        return (
            <>
             <div className="birthdayContainer">
                    <img className='birthdayImg' src = '../assets/gift.png' alt=''/>
                    <span className='birthdayText'>
                        <b>Pola Fosteer</b> and <b>3 other friends</b> have a birthday today!
                    </span>
                </div>
                <img className='rightbarAd' alt='' src='../assets/ad.png'/>
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className='rightbarFriendList'>
                    {Users.map((user) => (
                        <Online key={user.id} user={user}/>
                    ))}
                </ul>
            </>
        )
    }

    const ProfileRightbar = () => {
        return (
            <>
                <h4 className='rightbarTitle'>User Information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City:</span>
                        <span className="rightbarInfoValue">New York</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From:</span>
                        <span className="rightbarInfoValue">Madrid</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship:</span>
                        <span className="rightbarInfoValue">Single</span>
                    </div>
                </div>
                <h4 className='rightbarTitle'>User Friends</h4>
                <div className="rightbarFollwings">
                    <div className="rightbarFollowing">
                        <img className='rightbarFollowingImg' src='../../assets/person/1.jpeg' alt=''/>
                        <span className="rightbarFollowingName">Katty Smith</span>
                    </div> 
                    <div className="rightbarFollowing">
                        <img className='rightbarFollowingImg' src='../../assets/person/2.jpeg' alt=''/>
                        <span className="rightbarFollowingName">Katty Smith</span>
                    </div> 
                    <div className="rightbarFollowing">
                        <img className='rightbarFollowingImg' src='../../assets/person/3.jpeg' alt=''/>
                        <span className="rightbarFollowingName">Katty Smith</span>
                    </div> 
                    <div className="rightbarFollowing">
                        <img className='rightbarFollowingImg' src='../../assets/person/4.jpeg' alt=''/>
                        <span className="rightbarFollowingName">Katty Smith</span>
                    </div> 
                    <div className="rightbarFollowing">
                        <img className='rightbarFollowingImg' src='../../assets/person/5.jpeg' alt=''/>
                        <span className="rightbarFollowingName">Katty Smith</span>
                    </div> 
                    <div className="rightbarFollowing">
                        <img className='rightbarFollowingImg' src='../../assets/person/6.jpeg' alt=''/>
                        <span className="rightbarFollowingName">Katty Smith</span>
                    </div> 
                </div>

            </>
          
        )
    }


    return(
        <div className='rightbar'>
            <div className="rightbarWrapper">
                <ProfileRightbar/>
                {/* <HomeRightbar/> */}
            </div>
        </div>
    )
}

export default Rightbar