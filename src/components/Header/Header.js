import React from "react";
import "./Header.scss";

import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md";

const Header = () => {
  return (
    <div className="border border-dark header">
      <FaBars className="header_menu" size={26} />
      <img
        src="https://i.pinimg.com/originals/de/1c/91/de1c91788be0d791135736995109272a.png"
        alt="yt_logo"
        className="header_logo"
      />

      <form>
        <input placeholder="Search" type="text" />
        <button type="submit">
          <AiOutlineSearch size={22} />
        </button>
      </form>
      <div className="header_icons">
        <MdNotifications size={28} />
        <MdApps size={28} />
        <img
          src="https://cdn2.f-cdn.com/contestentries/1316431/24595406/5ae8a3f2e4e98_thumb900.jpg"
          alt="profile_avatar"
        />
      </div>
    </div>
  );
};

export default Header;
