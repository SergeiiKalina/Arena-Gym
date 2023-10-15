import { tableSchedule } from "../../data/date"

export default function ScheduleBlock() {
    return (
        <article className="schedule_block">
            {tableSchedule.map((day) => {
                return (
                    <table className="schedule">
                        <thead>
                            <tr className="schedule_row day">
                                <th key={day.day}>{day.day}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {day.training.map((item) => (
                                <tr className="schedule_row body">
                                    <td className="allTraining">
                                        <span>{item.time}</span>
                                        <div className="allTraining_name">
                                            {item.name}
                                        </div>
                                        <div className="allTraining_tooltip">
                                            {item.description}
                                            <button className="buttonVisit_block_button">
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
        </article>
    )
}
