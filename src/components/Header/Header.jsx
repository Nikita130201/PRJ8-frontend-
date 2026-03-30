import logoText from '../../assets/Logo Text.svg';
import './Header.scss';
import { navItems } from '../../data/nav';

function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#top" className="header__logo">
          <img className="header__logo-image" src={logoText} alt="VIDER.BIZ" />
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
