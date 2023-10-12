import { Button } from "@mui/material"

const coachArray = [
    {
        id: 0,
        name: "MORNING",
        coast: "2000uan",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Labore reprehenderit adipisci doloremque vel ullam tempora temporibus necessitatibus neque quibusdam dolorem? 
        Veritatis neque nam totam modi non libero quas id placeat.`,
        img: "./images/719.jpg",
    },
    {
        id: 1,
        name: "FULL DAY",
        coast: "3000uan",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Labore reprehenderit adipisci doloremque vel ullam tempora temporibus necessitatibus neque quibusdam dolorem? 
        Veritatis neque nam totam modi non libero quas id placeat.`,
        img: "./images/719.jpg",
    },
    {
        id: 2,
        name: "DAY",
        coast: "1500uan",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Labore reprehenderit adipisci doloremque vel ullam tempora temporibus necessitatibus neque quibusdam dolorem? 
        Veritatis neque nam totam modi non libero quas id placeat.`,
        img: "./images/719.jpg",
    },
    {
        id: 3,
        name: "FITNESS",
        coast: "1500uan",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Labore reprehenderit adipisci doloremque vel ullam tempora temporibus necessitatibus neque quibusdam dolorem? 
        Veritatis neque nam totam modi non libero quas id placeat.`,
        img: "./images/719.jpg",
    },
]

export default function ClubCard() {
    return (
        <section className="club_card_block" id="Card">
            <h3 className="club_card_header">CLUB CARD</h3>
            <article className="club_card_header_border">
                <span className="club_card_header_border_span"></span>
            </article>
            <article className="clubCardBlock">
                {coachArray.map((item) => {
                    const {
                        name,
                        id,
                        jobTitle,
                        description,

                        img,
                    } = item
                    return (
                        <div className="newCard" key={id}>
                            <div className="front">
                                <img src={img} alt="club card" />
                                <h3 className="club_card_name">{name}</h3>
                            </div>
                            <div className="back">
                                <span></span>
                                <h4 className="clubCardItem_info_name">
                                    {name}
                                </h4>
                                <h4 className="clubCardItem_info_class">
                                    {jobTitle}
                                </h4>
                                <p className="clubCardItem_info_text">
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
                                    Замовити
                                </Button>
                            </div>
                        </div>
                    )
                })}
            </article>
        </section>
    )
}
