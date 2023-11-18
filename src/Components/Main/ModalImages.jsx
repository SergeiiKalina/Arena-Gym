import { Button } from "@mui/material"
import { itemData } from "../../data/date"
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

    const closeModal = (e) => {}

    return (
        <section
            id="modal"
            className={`modal_img_container ${
                currentPhoto === null ? "" : "active"
            }`}
            onClick={(e) => {
                toggleImage(e.target.id)
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
                    <Button color="primary" size="medium" variant="outlined">
                        <ArrowBackIosIcon />
                    </Button>
                </div>
                <div className="modal_img">
                    <img src={itemData[currentPhoto].img} alt="gym" />
                </div>
                <div
                    id="right"
                    className="arrow_container right"
                    onClick={(e) => incrementIndex(e)}
                >
                    <Button color="primary" size="medium" variant="outlined">
                        <ArrowForwardIosIcon />
                    </Button>
                </div>
            </article>
        </section>
    )
}
