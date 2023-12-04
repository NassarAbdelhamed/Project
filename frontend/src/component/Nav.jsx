import "../styles/Nav.css"
const Nav = ({ links }) => {
    return (
        <>
        <div className="topnav">
          <h1 className="logo">Logo</h1>
          <div className="links">
          {links.map((link, index) => (
          <a key={index} href={link.url}>
            {link.text}
          </a>
        ))}
          </div>
        </div>
      </>
    );
  };
  
  export default Nav;