import { Button } from "@mui/material"

const cardServicesArr = [
    {
        id: 0,
        header1: "CROSSFIT  ",
        header2: "STUDIO",
        img: "./images/home-11-img-1.jpg",
        paragraph1: `At Hardrod, we teach functional movements
        with emphasis on technique, progression, and
efficiency. Our belief is that while
CrossFit isn’t for everyone, anyone can do
CrossFit.`,
        paragraph2: `At Hardrod, we teach functional
movements with emphasis on technique,
progression, and efficiency. Inexhaustible
ways to adapt a workout to individual
athletes’ abilities.`,
        selector: "half-width one",
        nameButton: "Записатись на заняття",
    },
    {
        id: 1,
        header1: "FITNESS",
        header2: "STUDIO",
        img: "./images/home-11-img-2.jpg",
        paragraph1: `At Hardrod, we teach functional movements
    with emphasis on technique, progression, and
    efficiency. Our belief is that while
    CrossFit isn’t for everyone, anyone can do
    CrossFit. `,
        paragraph2: `At Hardrod, we teach functional
    movements with emphasis on technique,
    progression, and efficiency. Inexhaustible
    ways to adapt a workout to individual
    athletes’ abilities.`,
        selector: "half-width two",
        nameButton: "Дивитись Розклад",
    },
    {
        id: 2,
        header1: " PERSONAL",
        header2: "TRAINING",
        img: "./images/home-11-img-3.jpg",
        paragraph1: `At Hardrod, we teach functional movements
    with emphasis on technique, progression, and
    efficiency. Our belief is that while
    CrossFit isn’t for everyone, anyone can do
    CrossFit.`,
        paragraph2: `At Hardrod, we teach functional
    movements with emphasis on technique,
    progression, and efficiency. Inexhaustible
    ways to adapt a workout to individual
    athletes’ abilities.`,
        selector: "full-width",
        nameButton: "Записатись на заняття",
    },
]

export default function CardServices() {
    return (
        <article className="wrapperMainBlock_content" id="CardServices">
            <h3 className="ourPrograms">Our programs</h3>
            <div className="ourPrograms_border">
                <span></span>
            </div>
            <div className="blockCards">
                {cardServicesArr.map((item) => {
                    const {
                        selector,
                        id,
                        img,
                        header1,
                        header2,
                        paragraph1,
                        paragraph2,
                        nameButton,
                    } = item

                    return (
                        <div className={`card ${selector}`} key={id}>
                            <div className="card__front">
                                <img
                                    src={img}
                                    alt="crossfit studio"
                                    width="100%"
                                    height="100%"
                                />
                                <h3>
                                    {header1}
                                    <br />
                                    {header2}
                                </h3>
                            </div>
                            <div className="card__back">
                                <img
                                    src={img}
                                    alt="crossfit studio"
                                    width="100%"
                                    height="100%"
                                />
                                <div className="backCardContent">
                                    <h3>
                                        {header1}
                                        <br />
                                        {header2}
                                    </h3>
                                    <p>
                                        {paragraph1}
                                        <br />
                                        <br />
                                        {paragraph2}
                                    </p>
                                    <Button
                                        variant="contained"
                                        sx={{
                                            backgroundColor: "#e4b800",
                                            width: "186px",
                                            margin: "0 auto",
                                            "&:hover": {
                                                backgroundColor: "#000000",
                                            },
                                        }}
                                    >
                                        {nameButton}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </article>
    )
}
