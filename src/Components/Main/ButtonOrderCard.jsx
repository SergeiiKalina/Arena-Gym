import { Button } from "@mui/material"
import { useContext, useState } from "react"
import FooterModal from "./FooterModal"
import emailjs from "@emailjs/browser"
import { DataContext } from "../Context/Context"

export default function ButtonOrderCard() {
    const { changesModalState, toggleModal } = useContext(DataContext)

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
                onClick={(e) => changesModalState(e)}
            >
                Замовити гостьовий візит
            </Button>
            {toggleModal && <FooterModal formSend={formSend} />}
        </section>
    )
}
