import { Button } from "@mui/material"
import { useEffect, useState } from "react"
import { itemData } from "../../data/date"
import ModalImages from "./ModalImages"
import AddCircleIcon from "@mui/icons-material/AddCircle"

export default function Gallery() {
    const [currentPhotos, setCurrentPhotos] = useState(itemData.slice(0, 8))
    const [numberPages, setNumberPages] = useState(1)
    const [currentPhoto, setCurrentPhoto] = useState(null)
    console.log(currentPhoto)
    function changesImagesOnPages() {
        if (Math.ceil(itemData.length / 8) > numberPages) {
            setNumberPages((prev) => prev + 1)
        } else {
            return
        }
    }

    function toggleImage(index) {
        console.log(index)
        if (index === "left" || index === "right" || index === "modal") return
        if (typeof index === "number") {
            setCurrentPhoto(index.toString())
        }
    }
    function incrementIndex() {
        if (Number(currentPhoto) === itemData.length - 1) return
        setCurrentPhoto((Number(currentPhoto) + 1).toString())
    }
    function decrementIndex() {
        if (Number(currentPhoto) === 0) return
        setCurrentPhoto((Number(currentPhoto) - 1).toString())
    }

    useEffect(() => {
        setCurrentPhotos(itemData.slice((numberPages - 1) * 8, numberPages * 8))
    }, [numberPages])
    return (
        <>
            <section className="gallery_block" id="Gallery">
                <article className="gallery_images_container">
                    {currentPhotos.map((item, i) => (
                        <div
                            className="gallery_images_container_item"
                            key={item.id}
                        >
                            <img src={item.img} alt={item.title} />
                            <div
                                className="modal_img_hoverButton"
                                onClick={() => toggleImage(i)}
                            >
                                <div className="modal_img_hoverButton_background"></div>
                                <Button>
                                    <AddCircleIcon className="modal_img_hoverButton_button" />
                                </Button>
                            </div>
                        </div>
                    ))}
                    {currentPhoto ? (
                        <ModalImages
                            currentPhoto={currentPhoto}
                            toggleImage={toggleImage}
                            incrementIndex={incrementIndex}
                            decrementIndex={decrementIndex}
                            setCurrentPhoto={setCurrentPhoto}
                        />
                    ) : null}
                </article>

                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: "#e4b800",
                        width: "186px",
                        margin: "20px auto 0 auto",
                        "&:hover": {
                            backgroundColor: "#000000",
                        },
                    }}
                    onClick={() => changesImagesOnPages()}
                >
                    Ще
                </Button>
            </section>
        </>
    )
}
