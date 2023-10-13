import InstagramIcon from "@mui/icons-material/Instagram"
import { Button } from "@mui/material"
import { BiLogoTelegram } from "react-icons/bi"
import { FaFacebookF } from "react-icons/fa"
import { coachArray } from "../../data/date"

export default function CardCoaches() {
    return (
        <section className="coaches_card_block" id="CardCoach">
            <h3 className="coaches_card_header">COACHES</h3>
            <article className="coaches_card_header_border">
                <span className="span"></span>
            </article>
            <article className="coachesCardBlock">
                {coachArray.map((item) => {
                    const {
                        name,
                        id,
                        jobTitle,
                        description,
                        instagram,
                        telegram,
                        facebook,
                        img,
                    } = item
                    return (
                        <div className="newCard" key={id}>
                            <div className="front">
                                <img src={img} alt="coach" />
                            </div>
                            <div className="back">
                                <span></span>
                                <h4 className="coachesCardItem_info_name">
                                    {name}
                                </h4>
                                <h4 className="coachesCardItem_info_class">
                                    {jobTitle}
                                </h4>
                                <p className="coachesCardItem_info_text">
                                    {description}
                                </p>
                                <div className="coachesCardItem_info_social">
                                    <a href={instagram}>
                                        <div className="coachesCardItem_info_social_icon">
                                            <InstagramIcon className="icon_coach_social" />
                                        </div>
                                    </a>
                                    <a href={telegram}>
                                        <div className="coachesCardItem_info_social_icon">
                                            <BiLogoTelegram className="icon_coach_social" />
                                        </div>
                                    </a>
                                    <a href={facebook}>
                                        <div className="coachesCardItem_info_social_icon">
                                            <FaFacebookF className="icon_coach_social" />
                                        </div>
                                    </a>
                                </div>
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
                                    Замовити Тренування
                                </Button>
                            </div>
                        </div>
                    )
                })}
            </article>
        </section>
    )
}
