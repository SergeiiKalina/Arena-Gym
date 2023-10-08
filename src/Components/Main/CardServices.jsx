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
        className: "half-width one",
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
        className: "half-width two",
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
        className: "full-width",
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
                {cardServicesArr.map((item) => (
                    <div className={`card ${item.className}`} key={item.id}>
                        <div className="card__front">
                            <img
                                src={item.img}
                                alt="crossfit studio"
                                width="100%"
                                height="100%"
                            />
                            <h3>
                                {item.header1}
                                <br />
                                {item.header2}
                            </h3>
                        </div>
                        <div className="card__back">
                            <img
                                src={item.img}
                                alt="crossfit studio"
                                width="100%"
                                height="100%"
                            />
                            <div className="backCardContent">
                                <h3>
                                    {item.header1}
                                    <br />
                                    {item.header2}
                                </h3>
                                <p>
                                    {item.paragraph1}
                                    <br />
                                    <br />
                                    {item.paragraph2}
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
                                    Read More
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </article>
    )
}
