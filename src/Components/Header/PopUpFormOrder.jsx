import { Textarea } from "@mui/joy"
import { TextField } from "@mui/material"
import Button from "@mui/joy/Button"
import { useContext } from "react"
import { DataContext } from "../Context/Context"

export default function PopUpFormOrder({ formSend }) {
    const { changesModalState } = useContext(DataContext)
    return (
        <div
            className="PopUpForm"
            onClick={(e) => {
                changesModalState(e)
            }}
            id="sendForm"
        >
            <form onSubmit={(e) => formSend(e)} id="form">
                <h2 className="PopUpForm_header">Записатись</h2>
                <TextField
                    id="outlined-basic"
                    label="Ім'я"
                    variant="outlined"
                    className="PopUpForm_item"
                    name="to_name"
                />
                <TextField
                    id="outlined-basic"
                    label="Номер телефону"
                    variant="outlined"
                    className="PopUpForm_item"
                    name="phone_number"
                />
                <Textarea
                    placeholder="Коментар"
                    minRows={2}
                    size="lg"
                    className="PopUpForm_item area"
                    name="message"
                />

                <Button
                    type="submit"
                    className="PopUpForm_item button"
                    id="submitButton"
                >
                    Відправити
                </Button>
            </form>
        </div>
    )
}
