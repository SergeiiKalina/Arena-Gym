import { Textarea } from "@mui/joy"
import { TextField } from "@mui/material"
import Button from "@mui/joy/Button"

export default function PopUpFormOrder({ toggleFromPopup }) {
    return (
        <div
            className="PopUpForm"
            onClick={(e) => {
                toggleFromPopup(e)
            }}
            id="sendForm"
        >
            <form>
                <h2 className="PopUpForm_header">Записатись</h2>
                <TextField
                    id="outlined-basic"
                    label="Ім'я"
                    variant="outlined"
                    className="PopUpForm_item"
                />
                <TextField
                    id="outlined-basic"
                    label="Номер телефону"
                    variant="outlined"
                    className="PopUpForm_item"
                />
                <Textarea
                    placeholder="Коментар"
                    minRows={2}
                    size="lg"
                    className="PopUpForm_item area"
                />

                <Button className="PopUpForm_item button" type="submit">
                    Відправити
                </Button>
            </form>
        </div>
    )
}
