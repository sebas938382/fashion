import "./header.css"
import BtnMenu from "../btn/BtnMenu"

export default function Header() {
    return (
        <header className="header__app">
            <nav className="header__navbar__app mx-container-app">
                <span className="logo__header">Fashion</span>
                <div className="header__menu__app"></div>
                <BtnMenu/>
            </nav>
        </header>
    )
}
