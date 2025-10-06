import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2 className="header-title">Order your favourite food here!</h2>
        <p className="header-subtitle">
          Experience bold flavors with our diverse menu, featuring international favorites and comforting local classics. Made with fresh ingredients and creative flair, every bite, whether spicy, refreshing, or sweet, delivers a unique and delicious experience.
        </p>
        <button className="header-button">View Menu</button>
      </div>
    </div>
  );
};

export default Header;
