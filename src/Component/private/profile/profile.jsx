import { useEffect, useState } from "react";

import Setting from "./setting";
import InforUser from "./inforUser";

import "./profile.scss";

function ProfilePage() {
  const [activeSelectControl, setActive] = useState(0);

  const list_select_control = [
    {
      icon: <ion-icon name="person-circle-outline"></ion-icon>,
      text: "profile",
    },
    {
      icon: <ion-icon name="settings-outline"></ion-icon>,
      text: "setting",
    },
  ];

  const childrenComponent = [<InforUser></InforUser>, <Setting></Setting>];
  useEffect(() => {}, []);
  return (
    <div id="profile_wrapper" className="">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4 col-md-5">
            <div id="profile_control">
              <div id="profile_image">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt=""
                />
              </div>
              <div id="profile_name">
                <p>Phạm Tấn Dương</p>
              </div>
              <div id="profile_btn_logout">
                <button className="btn_custom">sign out</button>
              </div>
              <div id="list_select">
                {list_select_control.map((item, index) => {
                  return (
                    <div
                      className={`select--item ${
                        index === activeSelectControl && "active"
                      }`}
                      onClick={() => {
                        setActive(index);
                      }}
                    >
                      <div className="select--item-icon">{item.icon}</div>
                      <div className="select--item-text">{item.text}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-7">
            <div id="profile_main--wrapper">
              {childrenComponent[activeSelectControl]}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
