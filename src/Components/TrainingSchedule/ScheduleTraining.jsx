import ScheduleBlock from "./ScheduleBlock"

export default function ScheduleTraining() {
    return (
        <section
            className="headerBackGround"
            style={{
                backgroundImage: `url('./images/tekstura_beton_seryj_147070_1920x1080.jpg')`,
                backgroundPosition: "50% 50%",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            <ScheduleBlock />
        </section>
    )
}
