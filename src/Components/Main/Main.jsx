import ButtonOrderCard from "./ButtonOrderCard"
import CardCoaches from "./CardCoaches"
import CardServices from "./CardServices"
import ClubCard from "./ClubCard"
import FitnessBar from "./FitnessBar"
import Gallery from "./Gallery"
import MassageOffice from "./MassageOffice"
import WrapperMain from "./WrapperMain"
import Map from "./Map"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

export default function Main() {
    return (
        <>
            <Header />
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
            <Gallery />
            <ButtonOrderCard />
            <WrapperMain>
                <Map />
            </WrapperMain>
            <Footer />
        </>
    )
}
