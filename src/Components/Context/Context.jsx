import { createContext, useState } from "react"

export const DataContext = createContext()

export default function Context({ children }) {
    const [toggleModal, setToggleModal] = useState(false)
    const [src, setSrc] = useState("")
    function changesModalState(e, link) {
        e.stopPropagation()

        if (link) {
            setSrc(link)
        } else {
            window.scrollTo({
                top: 150,
                behavior: "smooth",
            })
            if (e.target.id === "sendForm" || e.target.type === "button") {
                setToggleModal((prev) => !prev)
                if (!toggleModal) {
                    document.body.style.overflow = "hidden"
                } else {
                    document.body.style.overflow = "visible"
                }
            } else {
                return
            }
        }
    }

    const value = {
        toggleModal,
        changesModalState,
        src,
    }

    return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}
