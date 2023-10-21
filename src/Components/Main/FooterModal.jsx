import { Textarea } from "@mui/joy"
import { Button, TextField } from "@mui/material"
import { useContext } from "react"
import { DataContext } from "../Context/Context"

export default function FooterModal({ formSend }) {
    const { changesModalState } = useContext(DataContext)
    return (
        <section className="footer_modal_block">
            <div
                className="PopUpForm"
                onClick={(e) => {
                    changesModalState(e)
                }}
                id="sendForm"
            >
                <form onSubmit={(e) => formSend(e)}>
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
                        className="PopUpForm_item button"
                        color="primary"
                        type="submit"
                        variant="contained"
                    >
                        Відправити
                    </Button>
                </form>
            </div>
        </section>
    )
}
