export default function BurgerButton({ toggleMenuBurger, toggleBurger }) {
    return (
        <section
            onClick={toggleMenuBurger}
            className={`${
                toggleBurger ? "burger_button active" : "burger_button"
            }`}
        >
            <span></span>
        </section>
    )
}
