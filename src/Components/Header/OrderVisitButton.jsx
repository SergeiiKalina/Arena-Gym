import { Button } from "@mui/joy"

export default function OrderVisitButton({ toggleFromPopup }) {
    return (
        <article className="buttonVisit_block">
            <Button
                variant="contained"
                onClick={toggleFromPopup}
                className="buttonVisit_block_button"
            >
                Замовити гостьовий візит
            </Button>
        </article>
    )
}
