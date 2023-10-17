import Contacts from "./Contacts"
import Logo from "./Logo"
import Menu from "./Menu"
import MobileMenu from "./MobileMenu"
import Social from "./Social"

export default function MainMenu({
    toggleMenuBurger,
    toggleBurger,
    toggleSearchPopup,
}) {
    return (
        <header className="header_wrapper">
            <div className="header_block">
                <Logo />
                <Menu />
                <Social />
            </div>
            <Contacts />
            <div className="mobile_left_panel">
                <MobileMenu
                    toggleMenuBurger={toggleMenuBurger}
                    toggleBurger={toggleBurger}
                    toggleSearchPopup={toggleSearchPopup}
                />
            </div>
        </header>
    )
}
