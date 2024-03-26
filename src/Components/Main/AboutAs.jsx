import React from "react"

export default function AboutAs() {
    return (
        <article className="about_as_wrapper">
            <span>Про нас:</span>
            <div className="about_as_info">
                <p>
                    Давно шукаєш мотивуючу локацію для тренувань в центрі міста?
                </p>
                <p>
                    <span> Ми відкриті саме для тебе.</span>
                    <span>
                        Поринь в атмосферу продуктивності та неймовірних
                        звершень, які обовʼязково принесуть для тебе результат в
                        нашій «арені спорту»
                    </span>
                </p>

                <ul>
                    <li>На тебе чекають:</li>
                    <li>
                        <img src="./images/listPoint.png" alt="logo" />
                        Новітнє професійне обладнання
                    </li>
                    <li>
                        <img src="./images/listPoint.png" alt="logo" />
                        Зони силового та функціонального тренінгу
                    </li>
                    <li>
                        <img src="./images/listPoint.png" alt="logo" />
                        Команда кваліфікованих спеціалістів з різних направлень
                        фітнесу
                    </li>
                    <li>
                        <img src="./images/listPoint.png" alt="logo" />
                        Комфортний простір для групових занять
                    </li>
                    <li>
                        <img src="./images/listPoint.png" alt="logo" />
                        Фітнес-бар в якому ти можеш підживити свій організм або
                        насолодитись ароматною кавою у зоні відпочинку
                    </li>
                    <li>
                        <img src="./images/listPoint.png" alt="logo" />
                        Можливість відчувати себе
                    </li>
                    <li>
                        <img src="./images/listPoint.png" alt="logo" />
                        Комфортно в просторих роздягальнях зі зручними душовими
                    </li>
                    <li>
                        <img src="./images/listPoint.png" alt="logo" />
                        Привітливий та турботливий персонал
                    </li>
                </ul>
                <p className="last_paragraph">
                    Складне та недосяжне - це не про нас. Сила в простоті.
                </p>
            </div>
        </article>
    )
}
