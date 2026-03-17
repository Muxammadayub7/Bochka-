import '../../assets/style/Header.css'
import HeaderLocal from '../../assets/images/header/header__local.svg'
import HeaderCall from '../../assets/images/header/header__call.svg'
import HeaderFlag from '../../assets/images/header/header__flag.svg'
import HeaderArrow from '../../assets/images/header/header__arrow.svg'

function Header() {
  return (
    <header className='header'>
      <div className="header__container container">
        <a href="#" className="header__logo">
          <img src={HeaderLocal} alt="" />
          Tashkent sh, Yunusobod 
        </a>
        <ul className="nav__list">
          <li className="nav__item">
            <a href="" className="nav__link__none">Hamkor bo’lish</a>
          </li>
          <li className="nav__item">
            <a href="" className="nav__link">Savol-javob  </a>
          </li>
          <li className="nav__item">
            <a href="" className="nav__link">Support</a>
          </li>
          <li className="nav__item">
            <a href="" className="nav__link__1"><img src={HeaderCall} alt="" /> +998 90 000 00 00</a>
          </li>
          <li className="nav__item">
            <a href="" className="nav__link__2"><img src={HeaderFlag} alt="" /> O’zbekcha <img src={HeaderArrow} alt="" /> </a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header