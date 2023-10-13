import { itemMenu } from "../../data/date"
import ClearIcon from "@mui/icons-material/Clear"

export default function MobileNavigation({ toggleBurger, toggleMenuBurger }) {
    return (
        <nav
            className={`${
                toggleBurger ? "mobile_navigation active" : "mobile_navigation"
            }`}
        >
            <div className="clear_icon">
                <ClearIcon onClick={() => toggleMenuBurger()} />
            </div>
            <ul>
                {itemMenu.map((item) => (
                    <li key={item.id} onClick={() => toggleMenuBurger()}>
                        <a href={item.src}>{item.title}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
