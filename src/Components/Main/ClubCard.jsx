import { Button } from "@mui/material"
import { cardArray } from "../../data/date"

export default function ClubCard() {
    return (
        <section className="club_card_block" id="Card">
            <h3 className="club_card_header">CLUB CARD</h3>
            <article className="club_card_header_border">
                <span className="club_card_header_border_span"></span>
            </article>
            <article className="clubCardBlock">
                {cardArray.map((item) => {
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
