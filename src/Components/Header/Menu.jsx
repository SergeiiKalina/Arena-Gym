import { itemMenu } from "../../data/date"

export default function Menu() {
    return (
        <nav className="menuList">
            <ul>
                {itemMenu.map((item) => (
                    <li key={item.id}>
                        <a href={item.src ? item.src : ""}>{item.title}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
