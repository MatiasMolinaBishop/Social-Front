import './Topbar.css'
import { Search, Person, Chat, Notifications } from '@mui/icons-material';

const Topbar = () => {
    return (
        <div className='topbarContainer'>
            <div className="topbarLeft">
                <span className='logo'>MatiasSocial</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className='searchIcon'/>
                    <input placeholder='Search' className="searchInput"/>
                </div>
            </div>
            <div className="topbarRight">
                <span className="topbarLink">Home</span>
                <span className="topbarLink">Timeline</span>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <img src="/assets/person/1.jpeg" alt="profile foto" className="topbarImg" />
            </div>
        </div>
    )
}

export default Topbar