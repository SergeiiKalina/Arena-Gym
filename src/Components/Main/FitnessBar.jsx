import { fitnessBarArray } from "../../data/date"

export default function FitnessBar() {
    return (
        <section className="fitnessBar_card_block" id="FitnessBar">
            <h3 className="fitnessBar_card_header">FITNESS BAR</h3>
            <article className="fitnessBar_card_header_border">
                <span className="fitnessBar_card_header_border_span"></span>
            </article>
            <article className="fitnessBarCardBlock">
                {fitnessBarArray.map((item) => {
                    const { id, jobTitle, description, img } = item
                    return (
                        <div className="newCard" key={id}>
                            <div className="front">
                                <img src={img} alt="club card" />
                            </div>
                            <div className="back">
                                <span className="fitnessBar_card_header_border_span"></span>
                                <h4 className="fitnessBarCardItem_info_class">
                                    {jobTitle}
                                </h4>
                                <p className="fitnessBarCardItem_info_text">
                                    {description}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </article>
        </section>
    )
}
