import { useLocation } from "react-router-dom"
import { itemMenu } from "../../data/date"

export default function Menu() {
    const { pathname } = useLocation()

    function func(src) {
        let str = src.replace("#", "")
        const ref = document.getElementById(str)
        window.scrollTo({
            top: ref.getBoundingClientRect().top,
            behavior: "smooth",
        })
    }

    return (
        <nav className="menuList">
            <ul>
                {itemMenu.map((item) => (
                    <li key={item.id}>
                        <button onClick={() => func(item.src, pathname)}>
                            {item.title}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
