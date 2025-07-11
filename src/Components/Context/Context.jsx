import { createContext, useState } from "react"
import emailjs from "@emailjs/browser"

export const DataContext = createContext()

export default function Context({ children }) {
    const [toggleModal, setToggleModal] = useState(false)
    const [pathMessages, setPathMessages] = useState("")

    function formSend(e) {
        e.preventDefault()
        emailjs.sendForm(
            "service_kktgmhp",
            "template_q2hee9j",
            e.target,
            "VdV5xU8-ZJ-T7vPZb"
        )
        setToggleModal(false)
        document.body.style.overflow = "visible"
    }

    function changesModalState(e, link) {
        e.stopPropagation()

        if (link) {
        } else {
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
        pathMessages,
        setPathMessages,
        formSend,
    }

    return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}
