import React from "react";
import { BsLinkedin, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://www.linkedin.com/in/gen%C3%ADs-pic%C3%B3-cordo-4ba45019b/" target="_blank" rel="noopener noreferrer">
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a href="mailto:genis.pico@hotmail.com" target="_blank" rel="noopener noreferrer">
          <MdOutlineEmail />
        </a>
      </div>
      <div>
        <a href="https://github.com/GenisPicoCordo" target="_blank" rel="noopener noreferrer">
          <AiFillGithub />
        </a>
      </div>
      <div>
        <a href="https://www.facebook.com/genis.cordo" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/geniswine/" target="_blank" rel="noopener noreferrer">
          <BsInstagram />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
