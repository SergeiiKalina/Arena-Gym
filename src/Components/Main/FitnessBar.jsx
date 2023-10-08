const fitnessBarArray = [
    {
        id: 0,
        name: "MORNING",
        coast: "2000uan",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Labore reprehenderit adipisci doloremque vel ullam tempora temporibus necessitatibus neque quibusdam dolorem? 
        Veritatis neque nam totam modi non libero quas id placeat.`,
        img: "./images/IMG_6756-HDR.jpg",
    },
    {
        id: 1,
        name: "FULL DAY",
        coast: "3000uan",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Labore reprehenderit adipisci doloremque vel ullam tempora temporibus necessitatibus neque quibusdam dolorem? 
        Veritatis neque nam totam modi non libero quas id placeat.`,
        img: "./images/IMG_6755.jpg",
    },
    {
        id: 2,
        name: "DAY",
        coast: "1500uan",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Labore reprehenderit adipisci doloremque vel ullam tempora temporibus necessitatibus neque quibusdam dolorem? 
        Veritatis neque nam totam modi non libero quas id placeat.`,
        img: "./images/IMG_6985-HDR.jpg",
    },

    {
        id: 3,
        name: "DAY",
        coast: "1500uan",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Labore reprehenderit adipisci doloremque vel ullam tempora temporibus necessitatibus neque quibusdam dolorem? 
        Veritatis neque nam totam modi non libero quas id placeat.`,
        img: "./images/IMG_6985-HDR(2).jpg",
    },
]

export default function FitnessBar() {
    return (
        <section className="fitnessBar_card_block">
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
