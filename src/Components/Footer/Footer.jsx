import { BiLogoTelegram } from "react-icons/bi"
import InstagramIcon from "@mui/icons-material/Instagram"
import FooterNavigate from "./FooterNavigate"
import Logo from "../Header/Logo"

export default function Footer() {
    return (
        <footer className="footer_wrapper">
            <section className="footer">
                <Logo />
                <div className="footer_block">
                    <article className="footer_contacts">
                        <FooterNavigate />
                    </article>
                    <article className="footer_social">
                        <div>
                            <BiLogoTelegram />
                        </div>

                        <div>
                            <a href="https://instagram.com/arenagym.kyiv?igshid=MmU2YjMzNjRlOQ==">
                                <InstagramIcon />
                            </a>
                        </div>
                    </article>
                </div>
            </section>
        </footer>
    )
}
