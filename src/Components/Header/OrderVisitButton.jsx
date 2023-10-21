import { Button } from "@mui/joy"
import { useContext } from "react"
import { DataContext } from "../Context/Context"

export default function OrderVisitButton() {
    const { changesModalState } = useContext(DataContext)
    return (
        <article className="buttonVisit_block">
            <Button
                variant="contained"
                onClick={changesModalState}
                className="buttonVisit_block_button"
            >
                Замовити гостьовий візит
            </Button>
        </article>
    )
}
