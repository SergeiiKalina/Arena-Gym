import { Fab } from "@mui/material"
import React from "react"
import { FiPhone } from "react-icons/fi"

function CallBack() {
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
            >
                <FiPhone />
            </Fab>
        </section>
    )
}

export default CallBack
