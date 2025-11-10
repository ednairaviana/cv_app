import { useState } from "react";

function NavButtons() {
  const [activeIndex, setActiveIndex] = useState(0);

  const btnTitles = ["General", "Professional", "Education"];

  function handleToggleActiveIndex(index) {
    if (activeIndex !== index) {
      setActiveIndex(index);
    }
  }

  return (
    <ul>
      {btnTitles.map((title, index) => (
        <li key={index}>
          <button
            className={`btn__set ${activeIndex === index ? "active" : ""}`}
            onClick={() => handleToggleActiveIndex(index)}
          >
            {title}
          </button>
        </li>
      ))}
    </ul>
  );
}

function Header() {
  return (
    <header>
      <nav className="main-nav">
        <NavButtons />
      </nav>
    </header>
  );
}

export default Header;
