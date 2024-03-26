import { useLocation } from "react-router-dom"
import { itemMenu } from "../../data/data"
import { Button } from "@mui/material"

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
                        <Button
                            onClick={() => func(item.src, pathname)}
                            variant="contained"
                            className="main_menu_button"
                        >
                            {item.title}
                        </Button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
