import { BiLogoTelegram } from "react-icons/bi"
import InstagramIcon from "@mui/icons-material/Instagram"
import FooterNavigate from "./FooterNavigate"
import Logo from "../Header/Logo"
import Contacts from "../Header/Contacts"

export default function Footer() {
    return (
        <footer
            style={{
                backgroundImage: `url('./images/HeaderBackground.jpg')`,
                backgroundPosition: "50% 50%",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            <section className="footer_wrapper">
                <article className="footer">
                    <header>
                        <Logo />
                        <Contacts />
                    </header>
                    <div className="footer_block">
                        <article className="footer_contacts">
                            <FooterNavigate />
                        </article>
                        <article className="footer_social">
                            <div>
                                <a href="https://t.me/arenagym_kyiv">
                                    <BiLogoTelegram />
                                </a>
                            </div>

                            <div>
                                <a href="https://instagram.com/arenagym.kyiv?igshid=MmU2YjMzNjRlOQ==">
                                    <InstagramIcon />
                                </a>
                            </div>
                        </article>
                    </div>
                </article>
            </section>
        </footer>
    )
}
