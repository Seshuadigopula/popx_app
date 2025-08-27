import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
const AccountSettingPage = () => {
  return <>
  <div className="setting_page">
    <header className="part1">
      <h2>Account Settings</h2>
    </header>
    <div className="part2">
      <div className="prfile_img_block">
        <img src="/assets/Images/profile.jpeg" alt="AJS" />
        <div className="icon_block">
             <FontAwesomeIcon icon={faCamera} className="camera_icon" />
        </div>
      </div>
      <div className="profile_detail_block">
        <h3>Adigopula Jala Seshu Kumar</h3>
        <p>seshukumar21225@gmail.com</p>
      </div>
    </div>
    <div className="part3">
      <div className="para">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est a asperiores quis tenetur iste explicabo aspernatur earum. Maxime eos quibusdam voluptatem cupiditate provident mollitia blanditiis nesciunt inventore atque? Aut ad illo hic molestias est amet</p>
        </div>
        <hr className="dotted_line" />
    </div>
  </div>
  </>
};

export default AccountSettingPage;

