import React, { useState } from "react";
import { FaBars, FaBell, FaSearch, FaPlusSquare } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Flag from "react-world-flags";
import "./Topbar.css";
import profile from "../../assets/images/arbaz.jpeg";

const Topbar = () => {
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);

  const languages = [
    { code: "US", name: "English" },
    { code: "TR", name: "Türkçe" },
    { code: "SA", name: "العربية" },
  ];

  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  const navigate = useNavigate();

  const handleCreateStoreClick = () => {
    navigate("/createstore");
  };

  const toggleLanguageDropdown = () => {
    setLanguageDropdownOpen(!languageDropdownOpen);
  };

  const handleLanguageChange = (code, name) => {
    setSelectedLanguage({ code, name });
    setLanguageDropdownOpen(false);
  };

  const availableLanguages = languages.filter(
    (language) => language.code !== selectedLanguage.code
  );

  return (
    <div className="topbar">
      <div className="topbar-left">
        <div className="create-button" onClick={handleCreateStoreClick}>
          <FaPlusSquare className="create-icon" /> Create Store
        </div>
      </div>

      <div className="topbar-center">
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <FaSearch className="search-icon" />
        </div>
      </div>

      <div className="topbar-right">
        <div className="language-selector" onClick={toggleLanguageDropdown}>
          <Flag code={selectedLanguage.code} className="language-flag" />
          {selectedLanguage.name}
          <span className="arrow-down">&#x25BC;</span>
        </div>

        <div
          className={`language-dropdown ${languageDropdownOpen ? "open" : ""}`}
        >
          {availableLanguages.map((language) => (
            <div
              key={language.code}
              className="language-option"
              onClick={() => handleLanguageChange(language.code, language.name)}
            >
              <Flag code={language.code} className="language-flag" />{" "}
              {language.name}
            </div>
          ))}
        </div>

        <FaBell className="topbar-icon notification-icon" />
        <img src={profile} alt="Profile" className="profile-picture" />
      </div>
    </div>
  );
};

export default Topbar;
