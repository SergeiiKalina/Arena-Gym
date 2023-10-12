import InstagramIcon from "@mui/icons-material/Instagram"
import { Button } from "@mui/material"
import { BiLogoTelegram } from "react-icons/bi"
import { FaFacebookF } from "react-icons/fa"

const coachArray = [
    {
        id: 0,
        name: "STEVEN AYOKEE",

        jobTitle: "OWNER/HEAD COACH",
        description: `12 Years ago I lost 80lbs with the help of a
personal coach and it completely changed my way of
life. Since then, it’s been my mission to sway other
people to do CrossFit.`,
        instagram: "",
        telegram: "",
        facebook: "",
        img: "./images/home-11-img-4.jpg",
    },
    {
        id: 1,
        name: "VIRGIL COOK",
        jobTitle: "COACH",
        description: `Virgil has been training amateur and professional combat athletes since 1995.
         His skill-set expands to the following combat styles: MMA fighting and Brazilian Jiu-Jitsu.`,
        instagram: "",
        telegram: "",
        facebook: "",
        img: "./images/home-11-img-5.jpg",
    },
    {
        id: 2,
        name: "JULIE COLLINS",
        jobTitle: "COACH",
        description: `I initially took on CrossFit trainings after a spending a lifetime in professional athletics.
         The fact that I loved sports so much contributed a lot to my decision of being coach.`,
        instagram: "",
        telegram: "",
        facebook: "",
        img: "./images/home-11-img-6.jpg",
    },
    {
        id: 3,
        name: "DOMINICA SNYDER",

        jobTitle: "COACH",
        description: `Growing up, I’ve always been involved in sports, 
        fitness and athleticism in general. It got a whole new meaning for me as in 2007 I had an injury.`,
        instagram: "",
        telegram: "",
        facebook: "",
        img: "./images/home-11-img-7.jpg",
    },
    {
        id: 4,
        name: "DOMINICA SNYDER",

        jobTitle: "COACH",
        description: `Growing up, I’ve always been involved in sports, 
        fitness and athleticism in general. It got a whole new meaning for me as in 2007 I had an injury.`,
        instagram: "",
        telegram: "",
        facebook: "",
        img: "./images/home-11-img-4.jpg",
    },
    {
        id: 5,
        name: "DOMINICA SNYDER",

        jobTitle: "COACH",
        description: `Growing up, I’ve always been involved in sports, 
        fitness and athleticism in general. It got a whole new meaning for me as in 2007 I had an injury.`,
        instagram: "",
        telegram: "",
        facebook: "",
        img: "./images/home-11-img-5.jpg",
    },
]

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
