import React, { useEffect, useState } from "react"
import { tableSchedule } from "../../data/data"
import { v4 as uuidv4 } from "uuid"

function Schedule() {
    const [viewerNameDay, setViewerNameDay] = useState(false)
    useEffect(() => {
        const handleResize = () => {
            const windowWidth = window.innerWidth
            if (windowWidth > 460) {
                setViewerNameDay(false)
            } else {
                setViewerNameDay(true)
            }
        }

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    return (
        <section
            style={{
                backgroundImage: `url('./images/cover_concrete.jpg')`,
                backgroundPosition: "50% 50%",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
            className="schedule_wrapper"
            id="Schedule"
        >
            <article className="schedule_container">
                <header>
                    <h2>Розклад групових занять</h2>
                    <div className="schedule_days">
                        {tableSchedule.map((el) => (
                            <div key={el.day} className="schedule_days_item">
                                {viewerNameDay ? el.day[1] : el.day[0]}
                            </div>
                        ))}
                    </div>
                    <div className="schedule_table">
                        {tableSchedule.map((el, index) => {
                            if (el.training && el.training.length !== 0) {
                                let firstTimeOfDay = 11
                                const rows = []

                                for (let i = 0; i < 10; i++) {
                                    const currentItem = el.training.find(
                                        (item) => {
                                            return (
                                                parseInt(
                                                    item.time.split(":")[0]
                                                ) === firstTimeOfDay
                                            )
                                        }
                                    )

                                    if (currentItem) {
                                        rows.push(
                                            <div
                                                className="schedule_row_item"
                                                key={currentItem.id}
                                            >
                                                <div className="schedule_row_item_time">
                                                    {currentItem.time}
                                                </div>
                                                <div className="schedule_row_item_name">
                                                    {currentItem.name}
                                                </div>
                                            </div>
                                        )

                                        firstTimeOfDay++
                                    } else {
                                        rows.push(
                                            <div
                                                className="schedule_row_item void"
                                                key={uuidv4()}
                                            ></div>
                                        )

                                        firstTimeOfDay++
                                    }
                                }
                                return (
                                    <div className="schedule_row" key={el.id}>
                                        {rows}
                                    </div>
                                )
                            } else {
                                return ""
                            }
                        })}
                    </div>
                </header>
                <div className="block_background_dumbbell">
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
                    <img
                        src="./images/dumbbell.png"
                        alt="dumbbell"
                        className="third_dumbbell"
                    />
                </div>
            </article>
        </section>
    )
}

export default Schedule
