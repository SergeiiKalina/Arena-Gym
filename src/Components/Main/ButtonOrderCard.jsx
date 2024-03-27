import { Button } from "@mui/material"
import { useContext } from "react"
import FooterModal from "./FooterModal"

import { DataContext } from "../Context/Context"

export default function ButtonOrderCard() {
    const { changesModalState, toggleModal, setPathMessages } =
        useContext(DataContext)

    return (
        <section className="button_order_card_block">
            <img
                src="./images/dumbbell.png"
                alt="dumbbell"
                className="dumbbell dumbbell_left"
            />
            <Button
                className="button_order_card_item"
                onClick={(e) => {
                    setPathMessages("Замовити Гостьовий візит")
                    changesModalState(e)
                }}
                sx={{
                    "&:hover": {
                        backgroundColor: "#e4b800",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
                    },
                }}
            >
                Замовити гостьовий візит
            </Button>
            <img
                src="./images/dumbbell.png"
                alt="dumbbell"
                className="dumbbell dumbbell_right"
            />
            {toggleModal && <FooterModal />}
        </section>
    )
}
