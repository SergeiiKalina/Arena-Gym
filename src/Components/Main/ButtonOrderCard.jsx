import { Button } from "@mui/material"
import { useState } from "react"
import FooterModal from "./FooterModal"
import emailjs from "@emailjs/browser"

export default function ButtonOrderCard() {
    const [showModalForm, setShowModalForm] = useState(false)
    function toggleModalForm(e) {
        e.stopPropagation()
        if (e.target.id === "sendForm" || e.target.type === "button") {
            if (!showModalForm) {
                document.body.style.overflow = "hidden"
            } else {
                document.body.style.overflow = "visible"
            }
            setShowModalForm((prev) => !prev)
        } else {
            return
        }
    }

    function formSend(e) {
        e.preventDefault()
        emailjs.sendForm(
            "service_ticrokl",
            "template_ih1dzqr",
            e.target,
            "P_Kl4vBTtPRSGekOp"
        )
    }
    return (
        <section className="button_order_card_block">
            <Button
                className="button_order_card_item"
                onClick={(e) => toggleModalForm(e)}
            >
                Замовити гостьовий візит
            </Button>
            {showModalForm && (
                <FooterModal
                    toggleModalForm={toggleModalForm}
                    formSend={formSend}
                />
            )}
        </section>
    )
}
