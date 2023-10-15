import { useState } from "react"
import emailjs from "@emailjs/browser"
import MainMenu from "./MainMenu"
import MobileSearchPopup from "./MobileSearchPopup"
import MobileNavigation from "./Mobilenavigation"
import OrderVisitButton from "./OrderVisitButton"
import PopUpFormOrder from "./PopUpFormOrder"
import SwiperBlock from "./Swiper"

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
                toggleSearchPopup={toggleSearchPopup}
            />
            <MobileNavigation
                toggleBurger={toggleBurger}
                toggleMenuBurger={toggleMenuBurger}
            />
            <MobileSearchPopup
                toggleSearch={toggleSearch}
                toggleSearchPopup={toggleSearchPopup}
            />
            <SwiperBlock />
            <OrderVisitButton toggleFromPopup={toggleFromPopup} />
            {toggleFormPopUp ? (
                <PopUpFormOrder
                    toggleFromPopup={toggleFromPopup}
                    formSend={formSend}
                />
            ) : null}
        </section>
    )
}
