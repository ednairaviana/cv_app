import { useState } from "react";

function Header({ tabs }) {
  const [activeIndex, setActiveIndex] = useState(0);

  function handleToggleActiveIndex(index) {
    if (activeIndex !== index) {
      setActiveIndex(index);
    }
  }

  return (
    <header>
      <nav className="main-nav">
        <ul>
          {tabs.map((tab, index) => (
            <li key={index}>
              <button
                className={`btn__set ${activeIndex === index ? "active" : ""}`}
                onClick={() => handleToggleActiveIndex(index)}
              >
                {tab.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
