import { useState } from "react"
import emailjs from "@emailjs/browser"
import MainMenu from "./MainMenu"
import MobileNavigation from "./Mobilenavigation"

import PopUpFormOrder from "./PopUpFormOrder"
import SwiperBlock from "./Swiper"
import InfoGym from "./InfoGym"

export default function Header() {
    const [toggleBurger, setToggleBurger] = useState(false)
    const [toggleFormPopUp, setToggleFormPopUp] = useState(false)

    function toggleMenuBurger() {
        setToggleBurger((prev) => !prev)
        if (!toggleBurger) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "visible"
        }
    }

    function toggleFromPopup(e) {
        e.stopPropagation()
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
    function formSend(e) {
        e.preventDefault()
        emailjs.sendForm(
            "service_ticrokl",
            "template_ih1dzqr",
            e.target,
            "P_Kl4vBTtPRSGekOp"
        )
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
            <MainMenu
                toggleMenuBurger={toggleMenuBurger}
                toggleBurger={toggleBurger}
            />
            <MobileNavigation
                toggleBurger={toggleBurger}
                toggleMenuBurger={toggleMenuBurger}
            />

            <SwiperBlock toggleFromPopup={toggleFromPopup} />
            <InfoGym />
            {toggleFormPopUp ? (
                <PopUpFormOrder
                    toggleFromPopup={toggleFromPopup}
                    formSend={formSend}
                />
            ) : null}
        </section>
    )
}
