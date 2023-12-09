import { useContext, useState } from "react"
import { Button } from "@mui/material"
import { cardServicesArr } from "../../data/date"
import { Link } from "react-router-dom"
import { BsCheckLg } from "react-icons/bs"
import { DataContext } from "../Context/Context"

export default function CardServices() {
    const [arr] = useState(cardServicesArr)
    const { changesModalState, setPathMessages } = useContext(DataContext)

    return (
        <article className="wrapperMainBlock_content" id="CardServices">
            <h3 className="ourPrograms">Наші Программи</h3>
            <div className="ourPrograms_border">
                <span></span>
            </div>
            <div className="blockCards">
                {arr.map((item) => {
                    const {
                        selector,
                        id,
                        img,
                        header1,
                        header2,
                        paragraph1,
                        paragraph2,
                        nameButton,
                        src,
                        list,
                        linkOnForm,
                    } = item

                    return (
                        <div className={`card ${selector}`} key={id}>
                            <div className="card__front">
                                <img
                                    src={img}
                                    alt="crossfit studio"
                                    width="100%"
                                    height="100%"
                                />
                                <h3>
                                    {header1}
                                    <br />
                                    {header2}
                                </h3>
                            </div>
                            <div className="card__back">
                                <img
                                    src={img}
                                    alt="crossfit studio"
                                    width="100%"
                                    height="100%"
                                />
                                <div className="backCardContent">
                                    <h3>
                                        {header1}
                                        <br />
                                        {header2}
                                    </h3>
                                    {paragraph1 ? (
                                        <p>
                                            {paragraph1}
                                            <br />
                                            <br />
                                            {paragraph2}
                                        </p>
                                    ) : (
                                        ""
                                    )}

                                    {list ? (
                                        <ul className="blockCards_list">
                                            {list.map((item, i) => (
                                                <li key={i}>
                                                    <BsCheckLg /> {item}
                                                </li>
                                            ))}
                                        </ul>
                                    ) : null}
                                    {nameButton ? (
                                        src ? (
                                            <Link to={src}>
                                                <Button
                                                    variant="contained"
                                                    sx={{
                                                        backgroundColor:
                                                            "#e4b800",
                                                        width: "186px",
                                                        margin: "0 auto",
                                                        "&:hover": {
                                                            backgroundColor:
                                                                "#000000",
                                                        },
                                                    }}
                                                >
                                                    {nameButton}
                                                </Button>
                                            </Link>
                                        ) : (
                                            <Button
                                                variant="contained"
                                                sx={{
                                                    backgroundColor: "#e4b800",
                                                    width: "186px",
                                                    margin: "0 auto",
                                                    "&:hover": {
                                                        backgroundColor:
                                                            "#000000",
                                                    },
                                                }}
                                                onClick={(e) => {
                                                    changesModalState(e)
                                                    setPathMessages(linkOnForm)
                                                }}
                                            >
                                                {nameButton}
                                            </Button>
                                        )
                                    ) : null}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </article>
    )
}
