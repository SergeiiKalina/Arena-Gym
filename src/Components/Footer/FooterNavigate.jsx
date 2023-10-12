import { itemMenu } from "../../data/date"

export default function FooterNavigate() {
    return (
        <ul>
            {itemMenu.map((item) => (
                <li key={item.id}>
                    <a href={item.src}>{item.title}</a>
                </li>
            ))}
        </ul>
    )
}
