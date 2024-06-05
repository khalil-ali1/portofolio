import { useState } from "react";
import "./header.css";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <header className="flex">
      <button onClick={() => {
        setShowModal(true)
      }}
        className="menu">show modal</button>
      <div />
      <nav>
        <ul className="flex">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Articles</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Speaking</a>
          </li>
          <li>
            <a href="#">Uses</a>
          </li>
        </ul>
      </nav>
      <button>light</button>


      {showModal && (
        <div className="fixed">
          <ul className="modal">
            <li>
              <button onClick={() => { setShowModal(false) }}>close</button>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Articles</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Speaking</a>
            </li>
            <li>
              <a href="#">Uses</a>
            </li>
          </ul>
        </div>
      )}

    </header>
  );
};

export default Header;
