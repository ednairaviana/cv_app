function Header() {
  return (
    <header>
      <nav className="main-nav">
        <ul>
          <li className="active">
            <button className="btn__set active">General</button>
          </li>
          <li>
            <button className="btn__set">Professional</button>
          </li>
          <li>
            <button className="btn__set">Styling</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
