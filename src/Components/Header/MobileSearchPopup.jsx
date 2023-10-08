import ClearIcon from "@mui/icons-material/Clear"
import { TextField } from "@mui/material"
import { createTheme } from "@mui/system"
import SearchIcon from "@mui/icons-material/Search"

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 460,
            sm: 560,
            md: 767,
            lg: 1248,
            xl: 1536,
        },
    },
})

export default function MobileSearchPopup({ toggleSearch, toggleSearchPopup }) {
    return (
        <section
            className={`${toggleSearch ? "SearchPopUp active" : "SearchPopUp"}`}
        >
            <div className="clear_icon" onClick={toggleSearchPopup}>
                <ClearIcon style={{ transform: "scale(1.5)" }} />
            </div>

            <div
                style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    color: "white",
                }}
            >
                <div className="mobile_search_block">
                    <TextField
                        sx={{
                            width: "50%",
                            padding: "0 8px",
                            color: "white",
                            [theme.breakpoints.down("md")]: {
                                width: "50%",
                            },
                            [theme.breakpoints.down("xs")]: {
                                width: "75%",
                            },
                            "& .MuiOutlinedInput-root": {
                                "&:hover .MuiInputBase-input ": {
                                    borderBottom: "2px solid #fff",
                                },
                                "&.Mui-focused": {},
                                "& .MuiInputBase-input": {
                                    color: "white",
                                    borderBottom: "2px solid #fff",
                                },
                            },
                            "& .MuiInputLabel-root": {
                                color: "white",
                            },
                            "&:hover .MuiInputLabel-root": {
                                color: "#fff",
                            },
                            "& .MuiOutlinedInput-notchedOutline": {
                                border: "none",
                            },
                        }}
                        id="standard-multiline-flexible"
                        multiline
                        maxRows={4}
                        variant="outlined"
                    />
                    <SearchIcon
                        sx={{ color: "white", margin: "5px 0 0 10px" }}
                    />
                </div>
            </div>
        </section>
    )
}
