import { HiOutlineMail } from "react-icons/hi";
import profile_img from "../../assets/profile-img.png";

import "./Profile.css";

const Profile = () => {
  return (
    <div className="app__profile">
      <img className="app__profile-img" src={profile_img} alt="" />
      <div className="app__profile-content">
        <p className="app__profile-name">Fábio Huang</p>
        <p className="app__profile-institution">
          MS Student at Faculdade de Engenharia da Universidade do Porto (FEUP)
        </p>
      </div>
      <a href="mailto:up201806829@fe.up.pt" className="app__profile-email">
        <HiOutlineMail />
      </a>
    </div>
  );
};

export default Profile;
