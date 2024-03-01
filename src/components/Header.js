import NavBar from "./NavBar";

function Header() {
  return (
    <div className="header">
      <div className="home-btn">
        <a href="#HomePage" className="name">
          Allie Soldau
        </a>
      </div>
      <NavBar />
    </div>
  );
}

export default Header;
