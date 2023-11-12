import { useContext } from "react"
import { tableSchedule } from "../../data/date"
import { DataContext } from "../Context/Context"
import FooterModal from "../Main/FooterModal"
import ButtonBackHome from "./ButtonBackHome"

export default function ScheduleBlock() {
    const { changesModalState, setPathMessages, toggleModal } =
        useContext(DataContext)
    return (
        <>
            <article className="schedule_wrapper">
                <div className="schedule_block">
                    {tableSchedule.map((day) => {
                        return (
                            <table className="schedule" key={day.id}>
                                <thead>
                                    <tr className="schedule_row day">
                                        <th key={day.day}>{day.day}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {day.training.map((item) => (
                                        <tr
                                            className="schedule_row body"
                                            key={item.id}
                                        >
                                            <td className="allTraining">
                                                <span>{item.time}</span>
                                                <p className="allTraining_name">
                                                    {item.name}
                                                </p>
                                                <div className="allTraining_tooltip">
                                                    {item.description}
                                                    <button
                                                        type="button"
                                                        className="buttonVisit_block_button"
                                                        onClick={(e) => {
                                                            changesModalState(e)
                                                            setPathMessages(
                                                                day.day +
                                                                    " " +
                                                                    item.name +
                                                                    " " +
                                                                    item.time
                                                            )
                                                        }}
                                                    >
                                                        Записатись
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )
                    })}
                </div>
                <ButtonBackHome />
            </article>
            {toggleModal && <FooterModal />}
        </>
    )
}
