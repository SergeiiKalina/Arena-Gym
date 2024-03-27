import { Fab } from "@mui/material"
import React, { useContext } from "react"
import { FiPhone } from "react-icons/fi"
import { DataContext } from "../Context/Context"

function CallBack() {
    const { changesModalState, setPathMessages } = useContext(DataContext)
    return (
        <section className="callback_button">
            <a href="tel:+380931000673">
                <Fab
                    sx={{
                        backgroundColor: "#f2b800",
                        "&:focus": {
                            backgroundColor: "#f2b800",
                        },
                    }}
                    size="large"
                >
                    <FiPhone />
                </Fab>
            </a>
        </section>
    )
}

export default CallBack
