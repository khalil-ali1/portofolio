import { useState } from "react";
import "./header.css";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <header className="flex">


      <button onClick={() => {
        setShowModal(true)
      }}
        className="menu icon-menu" />


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

      <button className="mode">
      <span className="icon-moon-o"></span>
      </button>
      

      {showModal && (
        <div className="fixed">
          <ul className="modal">
            <li >
              <button className="icon-clear" onClick={() => {
                setShowModal(false) 
                }}/>
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
