import React from "react";
import "../style/dashboard.scss";
import { LuUserSearch } from "react-icons/lu";
import { BsDribbble, BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaLocationPin } from "react-icons/fa6";
import { IoLocationOutline, IoLogoDribbble, IoLogoFacebook, IoLogoLinkedin, IoLogoTwitter, IoLogoWhatsapp } from "react-icons/io5";

const Dashboard = () => {
  const [userData, setUserData] = React.useState([
    {
      avatar: "https://randomuser.me/api/portraits/men/11.jpg",
      username: "john_dev",
      position: "Web Developer",
      skills: ["JavaScript", "React", "Node.js"],
      social: {
        linkedin: "https://linkedin.com/in/john_dev",
        twitter: "https://twitter.com/john_dev",
        facebook: "https://facebook.com/john_dev",
        dribbble: "https://dribbble.com/john_dev",
      },
      address: "123 Main St, New York, USA",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/12.jpg",
      username: "sara_designer",
      position: "UI Designer",
      skills: ["Figma", "Adobe XD", "Sketch"],
      social: {
        linkedin: "https://linkedin.com/in/sara_designer",
        twitter: "https://twitter.com/sara_designer",
        facebook: "https://facebook.com/sara_designer",
        dribbble: "https://dribbble.com/sara_designer",
      },
      address: "456 Elm St, Toronto, Canada",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/13.jpg",
      username: "mark_frontend",
      position: "Frontend Developer",
      skills: ["HTML", "CSS", "JavaScript"],
      social: {
        linkedin: "https://linkedin.com/in/mark_frontend",
        twitter: "https://twitter.com/mark_frontend",
        facebook: "https://facebook.com/mark_frontend",
        dribbble: "https://dribbble.com/mark_frontend",
      },
      address: "789 Oak St, London, UK",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/14.jpg",
      username: "emma_dev",
      position: "Full Stack Developer",
      skills: ["React", "Next.js", "Node.js"],
      social: {
        linkedin: "https://linkedin.com/in/emma_dev",
        twitter: "https://twitter.com/emma_dev",
        facebook: "https://facebook.com/emma_dev",
        dribbble: "https://dribbble.com/emma_dev",
      },
      address: "321 Pine St, Sydney, Australia",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/15.jpg",
      username: "alex_uiux",
      position: "UI/UX Designer",
      skills: ["Figma", "Adobe XD", "User Research"],
      social: {
        linkedin: "https://linkedin.com/in/alex_uiux",
        twitter: "https://twitter.com/alex_uiux",
        facebook: "https://facebook.com/alex_uiux",
        dribbble: "https://dribbble.com/alex_uiux",
      },
      address: "654 Maple St, Berlin, Germany",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/16.jpg",
      username: "jessica_ds",
      position: "Data Scientist",
      skills: ["Python", "SQL", "TensorFlow"],
      social: {
        linkedin: "https://linkedin.com/in/jessica_ds",
        twitter: "https://twitter.com/jessica_ds",
        facebook: "https://facebook.com/jessica_ds",
        dribbble: "https://dribbble.com/jessica_ds",
      },
      address: "987 Willow St, Paris, France",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/17.jpg",
      username: "mike_cloud",
      position: "Cloud Engineer",
      skills: ["AWS", "Docker", "Kubernetes"],
      social: {
        linkedin: "https://linkedin.com/in/mike_cloud",
        twitter: "https://twitter.com/mike_cloud",
        facebook: "https://facebook.com/mike_cloud",
        dribbble: "https://dribbble.com/mike_cloud",
      },
      address: "147 Cedar St, Tokyo, Japan",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/18.jpg",
      username: "nina_front",
      position: "Frontend Developer",
      skills: ["Vue.js", "Nuxt.js", "JavaScript"],
      social: {
        linkedin: "https://linkedin.com/in/nina_front",
        twitter: "https://twitter.com/nina_front",
        facebook: "https://facebook.com/nina_front",
        dribbble: "https://dribbble.com/nina_front",
      },
      address: "258 Birch St, Amsterdam, Netherlands",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/19.jpg",
      username: "daniel_backend",
      position: "Backend Developer",
      skills: ["Go", "Rust", "PostgreSQL"],
      social: {
        linkedin: "https://linkedin.com/in/daniel_backend",
        twitter: "https://twitter.com/daniel_backend",
        facebook: "https://facebook.com/daniel_backend",
        dribbble: "https://dribbble.com/daniel_backend",
      },
      address: "369 Spruce St, Madrid, Spain",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/20.jpg",
      username: "olivia_mobile",
      position: "Mobile Developer",
      skills: ["Flutter", "Swift", "Kotlin"],
      social: {
        linkedin: "https://linkedin.com/in/olivia_mobile",
        twitter: "https://twitter.com/olivia_mobile",
        facebook: "https://facebook.com/olivia_mobile",
        dribbble: "https://dribbble.com/olivia_mobile",
      },
      address: "951 Redwood St, Rome, Italy",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/21.jpg",
      username: "chris_security",
      position: "Cybersecurity Engineer",
      skills: ["Ethical Hacking", "Penetration Testing", "Network Security"],
      social: {
        linkedin: "https://linkedin.com/in/chris_security",
        twitter: "https://twitter.com/chris_security",
        facebook: "https://facebook.com/chris_security",
        dribbble: "https://dribbble.com/chris_security",
      },
      address: "753 Oakwood St, Dubai, UAE",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/22.jpg",
      username: "amelia_ml",
      position: "Machine Learning Engineer",
      skills: ["Python", "Deep Learning", "Computer Vision"],
      social: {
        linkedin: "https://linkedin.com/in/amelia_ml",
        twitter: "https://twitter.com/amelia_ml",
        facebook: "https://facebook.com/amelia_ml",
        dribbble: "https://dribbble.com/amelia_ml",
      },
      address: "357 Palm St, Singapore",
    },
  ]);
  return (
    <div className="home-screen flex col">
      <div className="top-welcome flex">
        <h1>Let's Find Perfect.</h1>
      </div>
      <div className="search-bar flex"></div>
      <div className="users-container flex">
        <div className="users-wrapper flex">
          {userData?.map((user) => {
            return (
              <div className="user-card col flex" key={user.username}>
                <div className="top flex col">
                  <img src={user.avatar} alt="" />
                  <h1>{user?.username}</h1>
                  <h2>{user?.position}</h2>
                </div>
                <div className="social flex">
                  {user?.social?.linkedin && (
                    <div className="icon flex">
                      <IoLogoLinkedin />
                    </div>
                  )}
                  
                  {user?.social?.twitter && (
                    <div className="icon flex">
                      <IoLogoTwitter />
                    </div>
                  )}
                  {user?.social?.facebook && (
                    <div className="icon flex">
                      <IoLogoFacebook />
                    </div>
                  )}
                  {user?.social?.dribbble && (
                    <div className="icon flex">
                      <IoLogoDribbble />
                    </div>
                  )}
                  <div className="icon flex">
                    <IoLocationOutline />
                  </div>
                </div>
                <div className="btns flex">
                  <button>Profile</button>
                  <button>Message</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
