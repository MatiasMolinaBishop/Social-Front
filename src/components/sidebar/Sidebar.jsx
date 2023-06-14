import './Sidebar.css'
import { RssFeed, Chat, PlayCircleFilled, Group, Bookmark, Help, WorkOutline, Event, School } from '@mui/icons-material';
import {Users} from '../../dummyData'
import CloseFriend from '../closeFriend/CloseFriend';

const Sidebar = () => {
    return(
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed className='sidebarIcon'/>
                        <span className="sidebarListItemtext">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <Chat className='sidebarIcon'/>
                        <span className="sidebarListItemtext">Chat</span>
                    </li>
                    <li className="sidebarListItem">
                        <PlayCircleFilled className='sidebarIcon'/>
                        <span className="sidebarListItemtext">Videos</span>
                    </li>
                    <li className="sidebarListItem">
                        <Group className='sidebarIcon'/>
                        <span className="sidebarListItemtext">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        <Bookmark className='sidebarIcon'/>
                        <span className="sidebarListItemtext">Bookmarks</span>
                    </li>
                    <li className="sidebarListItem">
                        <Help className='sidebarIcon'/>
                        <span className="sidebarListItemtext">Questions</span>
                    </li>
                    <li className="sidebarListItem">
                        <WorkOutline className='sidebarIcon'/>
                        <span className="sidebarListItemtext">Jobs</span>
                    </li>
                    <li className="sidebarListItem">
                        <Event className='sidebarIcon'/>
                        <span className="sidebarListItemtext">Events</span>
                    </li>
                    <li className="sidebarListItem">
                        <School className='sidebarIcon'/>
                        <span className="sidebarListItemtext">Courses</span>
                    </li>
                </ul>
                <button className='sidebarButton'>Show More</button>
                <hr className='sidebarHr'></hr>
                <ul className="sidebarFriendList">
                    {Users.map((user) => (
                        <CloseFriend key={user.id} user={user}/>
                    ))}
                    {/* <li className="sidebarFriend">
                        <img className='sidebarFriendImg' src='../assets/person/2.jpeg' alt=''/>
                        <span className='sidebarFriendName'>Jane Doe</span>
                    </li> */}
                </ul>
            </div>
   
        </div>
    )
}

export default Sidebar