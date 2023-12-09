import { Link } from "react-scroll"
import { itemMenu } from "../../data/date"

export default function FooterNavigate() {
    return (
        <nav className="menuList">
            <ul>
                {itemMenu.map((item) => (
                    <li key={item.id}>
                        <Link
                            to={item.src.replace("#", "")}
                            smooth="true"
                            duration={500}
                            className="main_menu_button"
                        >
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
