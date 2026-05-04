const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <h2>My App</h2>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;