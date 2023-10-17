import ButtonOrderCard from "./ButtonOrderCard"
import CardCoaches from "./CardCoaches"
import CardServices from "./CardServices"
import ClubCard from "./ClubCard"
import Gallery from "./Gallery"
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

            <Gallery />
            <ButtonOrderCard />
            <WrapperMain>
                <Map />
            </WrapperMain>
            <Footer />
        </>
    )
}
