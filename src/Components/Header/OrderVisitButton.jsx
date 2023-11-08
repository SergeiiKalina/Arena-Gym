import { Button } from "@mui/joy"
import { useContext } from "react"
import { DataContext } from "../Context/Context"

export default function OrderVisitButton() {
    const { changesModalState, setPathMessages } = useContext(DataContext)
    return (
        <article className="buttonVisit_block">
            <Button
                variant="contained"
                onClick={(e) => {
                    setPathMessages("Під слайдером")
                    changesModalState(e)
                }}
                className="buttonVisit_block_button"
            >
                Замовити гостьовий візит
            </Button>
        </article>
    )
}
