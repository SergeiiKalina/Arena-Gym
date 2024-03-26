import { Button } from "@mui/material"
import { itemData } from "../../data/data"
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import ClearIcon from "@mui/icons-material/Clear"
import { useEffect } from "react"
import { useSwipeable } from "react-swipeable"

export default function ModalImages({
    currentPhoto,
    toggleImage,
    incrementIndex,
    decrementIndex,
    setCurrentPhoto,
}) {
    useEffect(() => {
        const handleKeyDown = (event) => {
            switch (event.key) {
                case "ArrowLeft":
                    decrementIndex()
                    break
                case "ArrowRight":
                    incrementIndex()
                    break
                case "Escape":
                    setCurrentPhoto(null)
                    document.body.style.overflow = "visible"
                    break
                default:
            }
        }

        window.addEventListener("keydown", handleKeyDown)

        return () => {
            window.removeEventListener("keydown", handleKeyDown)
        }
    }, [decrementIndex, incrementIndex, setCurrentPhoto])
    const closeModal = (e) => {
        console.log()
        if (
            e.target.id === "img" ||
            e.target.classList.contains("modal_arrow")
        ) {
            return
        } else {
            setCurrentPhoto(null)
            document.body.style.overflow = "visible"
        }
    }

    return (
        <section
            id="modal"
            className={`modal_img_container ${
                currentPhoto === null ? "" : "active"
            }`}
            onClick={(e) => {
                toggleImage(e.target.id)
                closeModal(e)
            }}
        >
            <header className="modal_img_header">
                <article className="modal_img_header_leftPanel">{`${
                    Number(currentPhoto) + 1
                }/${itemData.length}`}</article>
                <article className="modal_img_header_rightPanel">
                    <Button color="inherit" size="large" variant="text">
                        <ClearIcon
                            id="clear"
                            style={{ width: "50px", height: "50px" }}
                            onClick={() => {
                                setCurrentPhoto(null)
                                document.body.style.overflow = "visible"
                            }}
                        />
                    </Button>
                </article>
            </header>
            <article
                className="modal_img_item"
                {...useSwipeable({
                    onSwipedLeft: incrementIndex,
                    onSwipedRight: decrementIndex,
                })}
            >
                <div
                    id="left"
                    className="arrow_container left"
                    onClick={(e) => decrementIndex(e)}
                >
                    <Button
                        color="primary"
                        size="medium"
                        variant="outlined"
                        className="modal_arrow"
                        id="left"
                        sx={{ width: "30%", padding: "0", height: "80px" }}
                    >
                        <ArrowBackIosIcon className="modal_arrow" />
                    </Button>
                </div>
                <div className="modal_img">
                    <img src={itemData[currentPhoto].img} alt="gym" id="img" />
                </div>
                <div
                    id="right"
                    className="arrow_container right"
                    onClick={(e) => incrementIndex(e)}
                >
                    <Button
                        color="primary"
                        size="medium"
                        variant="outlined"
                        id="right"
                        className="modal_arrow"
                        sx={{ width: "30%", padding: "0" }}
                    >
                        <ArrowForwardIosIcon className="modal_arrow" />
                    </Button>
                </div>
            </article>
        </section>
    )
}
