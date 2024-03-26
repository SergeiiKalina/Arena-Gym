import { useState } from "react"
import MainMenu from "./MainMenu"
import MobileNavigation from "./Mobilenavigation"
import SwiperBlock from "./Swiper"

export default function Header() {
    const [toggleBurger, setToggleBurger] = useState(false)

    function toggleMenuBurger() {
        setToggleBurger((prev) => !prev)
        if (!toggleBurger) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "visible"
        }
    }

    return (
        <section
            style={{
                backgroundImage: `url('./images/HeaderBackground.png')`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
            className="headerBackGround"
        >
            <MainMenu
                toggleMenuBurger={toggleMenuBurger}
                toggleBurger={toggleBurger}
            />
            <MobileNavigation
                toggleBurger={toggleBurger}
                toggleMenuBurger={toggleMenuBurger}
            />

            <SwiperBlock />
        </section>
    )
}
