import { Button } from "@mui/material"
import { useContext } from "react"
import FooterModal from "./FooterModal"

import { DataContext } from "../Context/Context"

export default function ButtonOrderCard() {
    const { changesModalState, toggleModal, setPathMessages } =
        useContext(DataContext)

    return (
        <section className="button_order_card_block">
            <Button
                className="button_order_card_item"
                onClick={(e) => {
                    setPathMessages("Замовити Гостьовий візит")
                    changesModalState(e)
                }}
            >
                Замовити гостьовий візит
            </Button>
            {toggleModal && <FooterModal />}
        </section>
    )
}
