import CardCoaches from "./CardCoaches"
import CardServices from "./CardServices"
import ClubCard from "./ClubCard"
import FitnessBar from "./FitnessBar"
import MassageOffice from "./MassageOffice"
import WrapperMain from "./WrapperMain"

export default function Main() {
    return (
        <>
            <WrapperMain>
                <CardServices />
            </WrapperMain>
            <CardCoaches />
            <WrapperMain>
                <ClubCard />
            </WrapperMain>
            <FitnessBar />
            <WrapperMain>
                <MassageOffice />
            </WrapperMain>
        </>
    )
}
