import { useContext } from "react"
import { DataContext } from "../Context/Context"
import { Button } from "@mui/material"
import { coachArray } from "../../data/date"

export default function CardCoaches() {
    const { changesModalState } = useContext(DataContext)
    // useEffect(() => {
    //     fetch("https://reassuring-fitness-fb7824de49.strapiapp.com/api/coaches")
    //         .then((res) => res.json())
    //         .then((res) => setArrCoaches(expandObject(res.data)))
    // }, [])
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
    // console.log(arrCoaches)
    return (
        <section className="coaches_card_block" id="CardCoach">
            <h3 className="coaches_card_header">COACHES</h3>
            <article className="coaches_card_header_border">
                <span className="span"></span>
            </article>
            <article className="coachesCardBlock">
                {coachArray.map((item) => {
                    const {
                        name,
                        id,
                        jobTitle,
                        description,

                        img,
                    } = item
                    return (
                        <div className="newCard" key={id}>
                            <div className="front">
                                <img src={img} alt="coach" />
                            </div>
                            <div className="back">
                                <span></span>
                                <h4 className="coachesCardItem_info_name">
                                    {name}
                                </h4>
                                <h4 className="coachesCardItem_info_class">
                                    {jobTitle}
                                </h4>
                                <p className="coachesCardItem_info_text">
                                    {description}
                                </p>

                                <Button
                                    variant="contained"
                                    sx={{
                                        backgroundColor: "#e4b800",
                                        width: "186px",
                                        margin: "0 auto",
                                        "&:hover": {
                                            backgroundColor: "#000000",
                                        },
                                    }}
                                    onClick={(e) => changesModalState(e)}
                                >
                                    Замовити Тренування
                                </Button>
                            </div>
                        </div>
                    )
                })}
            </article>
        </section>
    )
}
