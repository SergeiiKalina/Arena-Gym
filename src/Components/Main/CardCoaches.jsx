import React from "react"
import { useState } from "react"
import { coachArray } from "../../data/data"
import PopUpCoach from "./PopUpCoach"

export default function CardCoaches() {
    const [togglePopUp, setTogglePopUp] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)

    const showPopUp = (e, index) => {
        const parent = e.target.closest(".pop_up_coach")
        if (parent && parent.id === "popUpCoach") return
        setTogglePopUp((prev) => !prev)
        setCurrentIndex(index)
    }

    return (
        <>
            <section className="coaches_card_block" id="CardCoach">
                <h3 className="coaches_card_header">ТРЕНЕРИ</h3>
                <article className="coaches_card_header_border">
                    <span className="span"></span>
                </article>
                <article className="coachesCardBlock">
                    {coachArray.map((item, index) => {
                        const { name, id, img, experience } = item

                        return (
                            <div
                                className="newCard"
                                key={id}
                                onClick={(e) => showPopUp(e, index)}
                            >
                                <img src={img} alt="coach" />
                                <footer className="newCard_footer">
                                    <h4 className="coachesCardItem_info_name">
                                        {name}
                                    </h4>
                                    <span className="coach_experience">
                                        Досвід Роботи
                                    </span>
                                    <span className="coach_experience_data">
                                        {experience}
                                    </span>
                                </footer>
                            </div>
                        )
                    })}
                </article>
            </section>
            {togglePopUp ? (
                <PopUpCoach showPopUp={showPopUp} currentIndex={currentIndex} />
            ) : null}
        </>
    )
}
