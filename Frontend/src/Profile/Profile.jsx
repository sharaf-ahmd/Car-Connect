import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import './Login.css'
const Profile = () => {
    const {user}=useSelector(state=>state.authState)
  return (
    <div className='container1'>
    <div className="login">
    <div className="profile">
        <p className="profileDetails">Name : {user.name}</p>
        <p className="profileDetails">Phone no : {user.phoneNo}</p>
        <p className="profileDetails">Joined : {String(user.createdAt).substring(0,10)}</p>
        <Link to="/update/profile"><p className="profilebutton">Edit Profile</p></Link>
        <a href="#"><p className="profilebutton">Change Password</p></a>
        
    </div>
  
</div>
</div>

  )
}

export default Profile
