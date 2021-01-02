import React from "react";
import "./Video.scss";
import { AiFillEye } from "react-icons/ai";

const Video = () => {
  return (
    <div className="video">
      <div className="video_top">
        <img
          alt="video"
          src="https://i.ytimg.com/vi/ptD0T-ZcF2M/maxresdefault.jpg"
        />
        <span>13:01</span>
      </div>
      <div className="video_title">
        How to become Millionaire like Steve Jobs
      </div>
      <div className="video_details">
        <span>
          <AiFillEye /> 5m Views •
        </span>
        <span>5 days ago</span>
      </div>
      <div className="video_channel">
        <img
          src="https://yt3.ggpht.com/yti/ANoDKi6Lw66uHFb6T8YV_4GpCvzJDGooOBjng63AI6D7=s88-c-k-c0x00ffffff-no-rj-mo"
          alt=""
        />

        <p>Millionaire Club</p>
      </div>
    </div>
  );
};

export default Video;
