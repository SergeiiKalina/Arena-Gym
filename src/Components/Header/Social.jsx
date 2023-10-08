import InstagramIcon from "@mui/icons-material/Instagram"
import { BiLogoTelegram } from "react-icons/bi"

export default function Social() {
    return (
        <section className="social_block">
            <div>
                <BiLogoTelegram />
            </div>

            <div>
                <a href="https://instagram.com/arenagym.kyiv?igshid=MmU2YjMzNjRlOQ==">
                    <InstagramIcon />
                </a>
            </div>
        </section>
    )
}
