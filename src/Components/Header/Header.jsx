import { useState } from "react"
import Logo from "./Logo"
import Menu from "./Menu"
import MobileMenu from "./MobileMenu"
import Search from "./Search"
import Social from "./Social"
import MobileNavigation from "./Mobilenavigation"
import MobileSearchPopup from "./MobileSearchPopup"
import SwiperBlock from "./Swiper"
import PopUpFormOrder from "./PopUpFormOrder"
import OrderVisitButton from "./OrderVisitButton"

export default function Header() {
    const [toggleBurger, setToggleBurger] = useState(false)
    const [toggleSearch, setToggleSearch] = useState(false)
    const [toggleFormPopUp, setToggleFormPopUp] = useState(false)

    function toggleMenuBurger() {
        setToggleBurger((prev) => !prev)
        if (!toggleBurger) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "visible"
        }
    }
    function toggleSearchPopup() {
        setToggleSearch((prev) => !prev)
        if (!toggleSearch) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "visible"
        }
    }
    function toggleFromPopup(e) {
        e.preventDefault()
        window.scrollTo({
            top: 150,
            behavior: "smooth",
        })

        if (e.target.id === "sendForm" || e.target.type === "button") {
            if (!toggleFormPopUp) {
                document.body.style.overflow = "hidden"
            } else {
                document.body.style.overflow = "visible"
            }
            setToggleFormPopUp((prev) => !prev)
        } else {
            return
        }
    }
    return (
        <section
            style={{
                backgroundImage: `url('./images/HeaderBackground.jpg')`,
                backgroundPosition: "50% 50%",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
            className="headerBackGround"
        >
            <header className="header_wrapper">
                <div className="header_block">
                    <Logo />
                    <Menu />
                    <Search className="searchPc" />
                    <Social />
                </div>
                <div className="mobile_left_panel">
                    <MobileMenu
                        toggleMenuBurger={toggleMenuBurger}
                        toggleBurger={toggleBurger}
                        toggleSearchPopup={toggleSearchPopup}
                    />
                </div>
            </header>
            <MobileNavigation
                toggleBurger={toggleBurger}
                toggleMenuBurger={toggleMenuBurger}
            />
            <MobileSearchPopup
                toggleSearch={toggleSearch}
                toggleSearchPopup={toggleSearchPopup}
            />
            <SwiperBlock toggleFromPopup={toggleFromPopup} />
            <OrderVisitButton toggleFromPopup={toggleFromPopup} />
            {toggleFormPopUp ? (
                <PopUpFormOrder toggleFromPopup={toggleFromPopup} />
            ) : null}
        </section>
    )
}
