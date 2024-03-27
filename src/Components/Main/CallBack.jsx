import { Fab } from "@mui/material"
import React, { useContext } from "react"
import { FiPhone } from "react-icons/fi"
import { DataContext } from "../Context/Context"

function CallBack() {
    const { changesModalState, setPathMessages } = useContext(DataContext)
    return (
        <section className="callback_button">
            <Fab
                sx={{
                    backgroundColor: "#f2b800",
                    "&:focus": {
                        backgroundColor: "#f2b800",
                    },
                }}
                size="large"
                onClick={(e) => {
                    changesModalState(e)
                    setPathMessages("Кнопка зворотього зв'язку")
                }}
            >
                <FiPhone />
            </Fab>
        </section>
    )
}

export default CallBack
