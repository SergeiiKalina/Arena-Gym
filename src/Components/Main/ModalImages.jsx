import { Button } from "@mui/material"
import { itemData } from "../../data/date"
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import ClearIcon from "@mui/icons-material/Clear"

export default function ModalImages({
    currentPhoto,
    toggleImage,
    incrementIndex,
    decrementIndex,
    setCurrentPhoto,
}) {
    return (
        <section
            id="modal"
            className={`modal_img_container ${
                currentPhoto === null ? "" : "active"
            }`}
            onClick={(e) => toggleImage(e.target.id)}
        >
            <header className="modal_img_header">
                <article className="modal_img_header_leftPanel">{`${
                    Number(currentPhoto) + 1
                }/${itemData.length}`}</article>
                <article className="modal_img_header_rightPanel">
                    <Button
                        color="inherit"
                        size="medium"
                        variant="text"
                        onClick={() => setCurrentPhoto(null)}
                    >
                        <ClearIcon />
                    </Button>
                </article>
            </header>
            <article className="modal_img_item">
                <div
                    id="left"
                    className="arrow_container left"
                    onClick={() => decrementIndex()}
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
                    onClick={() => incrementIndex()}
                >
                    <Button color="primary" size="medium" variant="outlined">
                        <ArrowForwardIosIcon />
                    </Button>
                </div>
            </article>
        </section>
    )
}
