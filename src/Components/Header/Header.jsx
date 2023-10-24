import { useContext, useState } from "react"
import emailjs from "@emailjs/browser"
import MainMenu from "./MainMenu"
import MobileNavigation from "./Mobilenavigation"
import PopUpFormOrder from "./PopUpFormOrder"
import SwiperBlock from "./Swiper"
import InfoGym from "./InfoGym"
import { DataContext } from "../Context/Context"
import OrderVisitButton from "./OrderVisitButton"

export default function Header() {
    const [toggleBurger, setToggleBurger] = useState(false)

    const { toggleModal } = useContext(DataContext)

    // fetch("https://reassuring-fitness-fb7824de49.strapiapp.com/api/coaches")
    //     .then((res) => res.json())
    //     .then((res) => console.log(res))

    function toggleMenuBurger() {
        setToggleBurger((prev) => !prev)
        if (!toggleBurger) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "visible"
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

            <SwiperBlock />
            <OrderVisitButton />
            <InfoGym />
            {toggleModal ? <PopUpFormOrder formSend={formSend} /> : null}
        </section>
    )
}
