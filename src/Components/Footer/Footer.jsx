import { BiLogoTelegram } from "react-icons/bi"
import InstagramIcon from "@mui/icons-material/Instagram"
import FooterNavigate from "./FooterNavigate"
import Logo from "../Header/Logo"
import Contacts from "../Header/Contacts"
import FooterLogo from "./FooterLogo"

export default function Footer() {
    return (
        <footer
            style={{
                backgroundImage: `url('./images/HeaderBackground.png')`,
                backgroundPosition: "50% 50%",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            <section className="footer_wrapper">
                <article className="footer">
                    <header>
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
                        <FooterLogo />
                    </header>
                    <div className="footer_block">
                        <article className="footer_contacts">
                            <FooterNavigate />
                        </article>
                        <Contacts />
                    </div>
                </article>
            </section>
        </footer>
    )
}
