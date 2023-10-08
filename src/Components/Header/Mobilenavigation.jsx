import { itemMenu } from "./Menu"
import ClearIcon from "@mui/icons-material/Clear"

export default function MobileNavigation({ toggleBurger, toggleMenuBurger }) {
    console.log(toggleBurger)
    return (
        <nav
            className={`${
                toggleBurger ? "mobile_navigation active" : "mobile_navigation"
            }`}
        >
            <div className="clear_icon">
                <ClearIcon onClick={toggleMenuBurger} />
            </div>
            <ul>
                {itemMenu.map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </nav>
    )
}
