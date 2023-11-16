import ScheduleBlock from "./ScheduleBlock"

export default function ScheduleTraining() {
    return (
        <section
            className="headerBackGround"
            style={{
                backgroundImage: `url('./images/HeaderBackground.jpg')`,
                backgroundPosition: "50% 50%",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            <ScheduleBlock />
        </section>
    )
}
