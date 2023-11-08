import { useContext } from "react"
import { DataContext } from "../Context/Context"

export default function Logo() {
    const { changesModalState } = useContext(DataContext)
    return (
        <div
            className="logo_block"
            onClick={() => changesModalState(null, "/")}
        >
            <a href="/">
                <img
                    style={{ width: "81px" }}
                    src="/images/Logo.png"
                    alt="logo"
                />
            </a>
        </div>
    )
}
