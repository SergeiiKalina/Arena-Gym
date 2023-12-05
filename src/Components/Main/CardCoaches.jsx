import { useContext } from "react"
import { DataContext } from "../Context/Context"
import { Button } from "@mui/material"
import { coachArray } from "../../data/date"

export default function CardCoaches() {
    const { changesModalState, setPathMessages } = useContext(DataContext)

    // function expandObject(obj) {
    //     let newArr = []
    //     function recursion(obj) {
    //         for (let i = 0; i < obj.length; i++) {
    //             newArr.push({ id: obj[i].id, ...obj[i].attributes })
    //         }
    //     }

    //     recursion(obj)
    //     return newArr
    // }

    return (
        <section className="coaches_card_block" id="CardCoach">
            <h3 className="coaches_card_header">COACHES</h3>
            <article className="coaches_card_header_border">
                <span className="span"></span>
            </article>
            <article className="coachesCardBlock">
                {coachArray.map((item) => {
                    const { name, id, jobTitle, img, linkOnForm } = item
                    return (
                        <div className="newCard" key={id}>
                            <div className="front">
                                <img src={img} alt="coach" />
                                <footer className="newCard_footer">
                                    <h4 className="coachesCardItem_info_name">
                                        {name}
                                    </h4>
                                    <h4 className="coachesCardItem_info_class">
                                        {jobTitle}
                                    </h4>
                                    <Button
                                        variant="contained"
                                        sx={{
                                            backgroundColor: "#e4b800",

                                            margin: "0 auto",
                                            "&:hover": {
                                                backgroundColor: "#000000",
                                            },
                                        }}
                                        onClick={(e) => {
                                            changesModalState(e)
                                            setPathMessages(linkOnForm)
                                        }}
                                    >
                                        Замовити Тренування
                                    </Button>
                                </footer>
                            </div>
                        </div>
                    )
                })}
            </article>
        </section>
    )
}
