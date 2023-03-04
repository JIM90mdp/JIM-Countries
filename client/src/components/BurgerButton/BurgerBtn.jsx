import { useState } from 'react';
import { Link } from 'react-router-dom';
import './BurgerButton.css';

function BurgerBtn() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="BurgerButton">
      <button className="BurgerButton__button" onClick={handleClick}>
        <div className={`BurgerButton__line ${isOpen ? 'BurgerButton__line--open' : ''}`}></div>
        <div className={`BurgerButton__line ${isOpen ? 'BurgerButton__line--open' : ''}`}></div>
        <div className={`BurgerButton__line ${isOpen ? 'BurgerButton__line--open' : ''}`}></div>
      </button>
      {isOpen && (
        <div className="BurgerButton__menu">
          <ul className="BurgerButton__list">
            <li>
              <Link to="/" onClick={handleClick}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={handleClick}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={handleClick}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default BurgerBtn;