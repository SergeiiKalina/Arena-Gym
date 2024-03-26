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
        >
            <article className="schedule_container">
                <header>
                    <h2>Розклад Групових Занять</h2>
                    <div className="schedule_days">
                        {viewerNameDay
                            ? tableSchedule.map((el) => (
                                  <div
                                      key={el.day}
                                      className="schedule_days_item"
                                  >
                                      {el.day.slice(0, 5) + "..."}
                                  </div>
                              ))
                            : tableSchedule.map((el) => (
                                  <div
                                      key={el.day}
                                      className="schedule_days_item"
                                  >
                                      {el.day}
                                  </div>
                              ))}
                    </div>
                    <div className="schedule_table">
                        {tableSchedule.map((el) => {
                            if (el.training) {
                                let firstTimeOfDay = 8
                                const rows = []
                                for (let i = 0; i < 12; i++) {
                                    const currentItem = el.training.find(
                                        (item) =>
                                            parseInt(
                                                item.time.split(":")[0]
                                            ) === firstTimeOfDay
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
                            }
                        })}
                    </div>
                </header>
            </article>
        </section>
    )
}

export default Schedule
