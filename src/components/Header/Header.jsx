import './Header.scss';
import { navItems } from '../../data/nav';

function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <a href="/" className="header__logo">
          <span className="header__logo-box">VB</span>
          <span className="header__logo-text">VIDER.BIZ</span>
        </a>

        <nav className="header__nav">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="header__link">
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#contacts" className="header__button">Связаться</a>
      </div>
    </header>
  );
}

export default Header;
