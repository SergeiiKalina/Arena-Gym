import { useState } from "react"
import { Button } from "@mui/material"
import { cardServicesArr } from "../../data/date"
import { Link } from "react-router-dom"
import { BsCheckLg } from "react-icons/bs"

export default function CardServices() {
    const [arr, setArr] = useState(cardServicesArr)
    function postman() {
        fetch("http://localhost:1337/api/posts")
            .then((res) => res.json())
            .then((res) => setArr([...arr, res.data[0].attributes]))
    }
    return (
        <article className="wrapperMainBlock_content" id="CardServices">
            <h3 className="ourPrograms">Our pro grams</h3>
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
                                    <p>
                                        {paragraph1}
                                        <br />
                                        <br />
                                        {paragraph2}
                                    </p>
                                    {list ? (
                                        <ul className="blockCards_list">
                                            {list.map((item) => (
                                                <li>
                                                    <BsCheckLg /> {item}
                                                </li>
                                            ))}
                                        </ul>
                                    ) : null}
                                    {nameButton ? (
                                        <Link to={src ? src : "/"}>
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
                                                onClick={() => {
                                                    if (!src) {
                                                        postman()
                                                    }
                                                }}
                                            >
                                                {nameButton}
                                            </Button>
                                        </Link>
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
