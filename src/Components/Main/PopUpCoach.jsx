import React, { useEffect, useRef, useState } from "react"
import { Button } from "@mui/material"
import { coachArray } from "../../data/data"
import { BiSolidRightArrow } from "react-icons/bi"
import { BiSolidLeftArrow } from "react-icons/bi"
import { useContext } from "react"
import { DataContext } from "../Context/Context"
import { v4 as uuidv4 } from "uuid"
function PopUpCoach({ showPopUp, currentIndex }) {
    const { changesModalState, setPathMessages } = useContext(DataContext)
    const [startTouch, setStartTouch] = useState(0)
    const coachSlider = useRef()
    const wrapperSliderBlock = useRef()
    useEffect(() => {
        smoothScroll(
            wrapperSliderBlock.current.scrollLeft,
            wrapperSliderBlock.current.scrollLeft +
                coachSlider.current.offsetWidth * currentIndex,
            300
        )
    }, [currentIndex])

    const scrollCoach = (nameArrow) => {
        const wrapperSliderBlockScroll = wrapperSliderBlock.current
        const widthBlock = coachSlider.current.offsetWidth
        const scrollAmount = widthBlock * (nameArrow === "left" ? -1 : 1)

        smoothScroll(
            wrapperSliderBlockScroll.scrollLeft,
            wrapperSliderBlockScroll.scrollLeft + scrollAmount,
            300
        )
    }

    function smoothScroll(start, end, duration) {
        const startTime = performance.now()
        const endTime = startTime + duration

        function scroll() {
            const now = performance.now()
            const timeFraction = Math.min((now - startTime) / duration, 1)
            const scrollLeft = start + (end - start) * timeFraction
            wrapperSliderBlock.current.scrollLeft = scrollLeft
            if (now < endTime) {
                requestAnimationFrame(scroll)
            }
        }

        requestAnimationFrame(scroll)
    }
    const handleTouchStart = (e) => {
        setStartTouch(e.changedTouches[0].clientX)
    }

    const handleTouchEnd = (e) => {
        console.log("call")
        const end = e.changedTouches[0].clientX
        const diffX = end - startTouch
        const wrapperSliderBlockScroll = wrapperSliderBlock.current
        const widthBlock = coachSlider.current.offsetWidth
        const scrollAmount = widthBlock * (diffX >= 50 ? -1 : 1)

        smoothScroll(
            wrapperSliderBlockScroll.scrollLeft,
            wrapperSliderBlockScroll.scrollLeft + scrollAmount,
            300
        )
    }

    return (
        <section
            className="pop_up_coach_wrapper"
            onClick={(e) => showPopUp(e, 0)}
        >
            <article className="pop_up_coach" id="popUpCoach">
                <button
                    type="button"
                    className="pop_up_left_arrow"
                    onClick={() => scrollCoach("left")}
                >
                    <BiSolidLeftArrow className="pop_up_left_arrow_arrow" />
                </button>
                <div
                    className="pop_up_coach_slider_wrapper"
                    ref={wrapperSliderBlock}
                >
                    {coachArray.map((coach, index) => (
                        <div
                            className="pop_up_item"
                            key={uuidv4()}
                            ref={coachSlider}
                            onTouchStart={handleTouchStart}
                            onTouchEnd={(e) => handleTouchEnd(e)}
                        >
                            <img src={coach.img} alt={coach.name} />
                            <div className="pop_up_item_description">
                                <div className="description_name">
                                    {coach.name}
                                </div>
                                <div className="description_experience">
                                    <span> Досвід Роботи: </span>
                                    <span className="description_experience_data">
                                        {coach.experience}
                                    </span>
                                    <div className="description_description">
                                        <span> Напрямки тренування: </span>
                                        <span>{coach.jobTitle}</span>
                                    </div>
                                </div>

                                <Button
                                    variant="contained"
                                    className="pop_up_button"
                                    onClick={(e) => {
                                        changesModalState(e)
                                        setPathMessages(coach.linkOnForm)
                                    }}
                                >
                                    Записатися <span>на тренування</span>
                                </Button>
                                <div className="dumbbell_block">
                                    <img
                                        src="./images/dumbbell.png"
                                        alt="dumbbell"
                                        className="first_dumbbell"
                                    />
                                    <img
                                        src="./images/dumbbell.png"
                                        alt="dumbbell"
                                        className="second_dumbbell"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button
                    type="button"
                    className="pop_up_right_arrow"
                    onClick={() => scrollCoach("right")}
                >
                    <BiSolidRightArrow className="pop_up_right_arrow_arrow" />
                </button>
            </article>
        </section>
    )
}

export default PopUpCoach
