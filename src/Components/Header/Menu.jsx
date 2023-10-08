export const itemMenu = [
    {
        id: 101,
        title: "Головна",
        src: "#CardServices",
    },
    {
        id: 102,
        title: "Послуги",
    },
    {
        id: 103,
        title: "Тренери",
    },
    {
        id: 104,
        title: "Новини",
    },
    {
        id: 105,
        title: "Влог",
    },
    {
        id: 106,
        title: "Галерея",
    },
]
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
