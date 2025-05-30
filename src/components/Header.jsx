import "../styles/header.css"

export default function Header({children}) {
  return (
    <header className="d-flex align-center">
      <div className="arrow-icon-container d-flex align-center">
        <img src="https://img.icons8.com/sf-black/64/FFFFFF/left.png" alt="left" />
      </div>
      <div className="header-title">{children}</div>
    </header>
  );
}
