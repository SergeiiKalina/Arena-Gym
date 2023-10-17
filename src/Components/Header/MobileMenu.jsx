import BurgerButton from "./BurgerButton"

export default function MobileMenu({ toggleMenuBurger, toggleBurger }) {
    return (
        <section style={{ position: "relative" }}>
            <BurgerButton
                toggleMenuBurger={toggleMenuBurger}
                toggleBurger={toggleBurger}
            />
        </section>
    )
}
