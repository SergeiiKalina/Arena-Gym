import { Button } from "@mui/material"

const fitnessBarArray = [
    {
        id: 0,
        name: "MORNING",
        coast: "2000uan",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Labore reprehenderit adipisci doloremque vel ullam tempora temporibus necessitatibus neque quibusdam dolorem? 
        Veritatis neque nam totam modi non libero quas id placeat.`,
        img: "./images/IMG_6725.jpg",
    },
    {
        id: 1,
        name: "FULL DAY",
        coast: "3000uan",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Labore reprehenderit adipisci doloremque vel ullam tempora temporibus necessitatibus neque quibusdam dolorem? 
        Veritatis neque nam totam modi non libero quas id placeat.`,
        img: "./images/IMG_6714.jpg",
    },
    {
        id: 2,
        name: "DAY",
        coast: "1500uan",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Labore reprehenderit adipisci doloremque vel ullam tempora temporibus necessitatibus neque quibusdam dolorem? 
        Veritatis neque nam totam modi non libero quas id placeat.`,
        img: "./images/IMG_6770(1).jpg",
    },
    {
        id: 3,
        name: "DAY",
        coast: "1500uan",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Labore reprehenderit adipisci doloremque vel ullam tempora temporibus necessitatibus neque quibusdam dolorem? 
        Veritatis neque nam totam modi non libero quas id placeat.`,
        img: "./images/IMG_6770.jpg",
    },
]

export default function MassageOffice() {
    return (
        <section className="massageOffice_card_block">
            <h3 className="massageOffice_card_header">FITNESS BAR</h3>
            <article className="massageOffice_card_header_border">
                <span className="massageOffice_card_header_border_span"></span>
            </article>
            <article className="massageOfficeCardBlock">
                {fitnessBarArray.map((item) => {
                    const {
                        id,
                        jobTitle,
                        description,

                        img,
                    } = item
                    return (
                        <div className="newCard" key={id}>
                            <div className="front">
                                <img src={img} alt="club card" />
                            </div>
                            <div className="back">
                                <span className="massageOffice_card_header_border_span"></span>
                                <h4 className="fitnessBarCardItem_info_class">
                                    {jobTitle}
                                </h4>
                                <p className="massageOfficeCardItem_info_text">
                                    {description}
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
                                    Запис
                                </Button>
                            </div>
                        </div>
                    )
                })}
            </article>
        </section>
    )
}
