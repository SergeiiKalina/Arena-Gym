import BurgerButton from "./BurgerButton"
import SearchIcon from "@mui/icons-material/Search"

export default function MobileMenu({
    toggleMenuBurger,
    toggleBurger,
    toggleSearchPopup,
}) {
    return (
        <section style={{ position: "relative" }}>
            <div
                style={{ color: "white", position: "absolute", top: "30px" }}
                onClick={toggleSearchPopup}
            >
                <SearchIcon />
            </div>
            <BurgerButton
                toggleMenuBurger={toggleMenuBurger}
                toggleBurger={toggleBurger}
            />
        </section>
    )
}
