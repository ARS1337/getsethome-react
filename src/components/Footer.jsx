import "../styles/footer.css"

export default function Footer({ icons }) {
  return (
    <footer className="d-flex">
      {icons.map((icon) => (
        <div className="d-flex flex-col align-center" key={icon.uri}>
          <img src={icon.uri} alt="bed" />
          <div>{icon.name}</div>
        </div>
      ))}
    </footer>
  );
}
