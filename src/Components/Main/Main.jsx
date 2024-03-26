import ButtonOrderCard from "./ButtonOrderCard"
import CardCoaches from "./CardCoaches"
import CardServices from "./CardServices"
import ClubCard from "./ClubCard"
import Gallery from "./Gallery"
import WrapperMain from "./WrapperMain"
import Map from "./Map"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import AboutAs from "./AboutAs"
import CallBack from "./CallBack"
import Schedule from "./Schedule"

export default function Main() {
    return (
        <>
            <Header />
            <WrapperMain>
                <AboutAs />
            </WrapperMain>
            <WrapperMain>
                <CardServices />
            </WrapperMain>
            <CardCoaches />
            <WrapperMain>
                <ClubCard />
            </WrapperMain>
            <Schedule />
            <Gallery />
            <ButtonOrderCard />
            <WrapperMain>
                <Map />
            </WrapperMain>
            <Footer />
            <CallBack />
        </>
    )
}
