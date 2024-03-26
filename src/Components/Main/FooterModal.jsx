import { Button } from "@mui/material"
import { useContext } from "react"
import { DataContext } from "../Context/Context"

export default function FooterModal() {
    const { changesModalState, pathMessages, formSend } =
        useContext(DataContext)
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
                    <img
                        src="./images/footerLogo.png"
                        alt="logo"
                        className="pop_up_logo right"
                    />
                    <h2 className="PopUpForm_header">Записатись</h2>
                    <div className="PopUpForm_block_fields">
                        <input
                            style={{ display: "none" }}
                            className="PopUpForm_item"
                            name="hidden_field"
                            value={pathMessages}
                        />
                        <div className="input_block">
                            <input
                                className="PopUpForm_item"
                                name="to_name"
                                id="name"
                            />
                            <label htmlFor="name">*Ім'я та Прізвище</label>
                        </div>
                        <div className="input_block">
                            <input
                                className="PopUpForm_item"
                                name="phone_number"
                                id="phone"
                            />
                            <label htmlFor="phone">*Номер Телефону</label>
                        </div>
                        <div className="input_block">
                            <input
                                className="PopUpForm_item"
                                name="message"
                                id="message"
                            />
                            <label htmlFor="message">Коментар</label>
                        </div>
                    </div>
                    <Button
                        className="PopUpForm_item button"
                        color="primary"
                        type="submit"
                        variant="contained"
                    >
                        Відправити
                    </Button>
                    <img
                        src="./images/footerLogo.png"
                        alt="logo"
                        className="pop_up_logo left"
                    />
                </form>
            </div>
        </section>
    )
}
