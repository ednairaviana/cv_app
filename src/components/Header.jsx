function Header({ tabs, useActiveTab }) {
  const activeTab = useActiveTab.activeTab;
  const setActiveTab = useActiveTab.setActiveTab;

  function handleToggleActiveIndex(tab) {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  }

  return (
    <header>
      <nav className="main-nav">
        <ul>
          {tabs.map((tab, index) => (
            <li key={index}>
              <button
                className={`btn__set ${activeTab === index ? "active" : ""}`}
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
