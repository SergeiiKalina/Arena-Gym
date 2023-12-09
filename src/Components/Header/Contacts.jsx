export default function Contacts() {
    return (
        <address className="contacts_block">
            <div>
                <p className="contacts_block_geo">
                    <a href="https://maps.app.goo.gl/YP14Q8eWtkFtgDMB8">
                        M.Драгомирова, 14А <br />
                        «ЖК Дельмар»
                    </a>
                </p>
                <p>
                    <a href="tel:+380931000673">+38(093)-100-06-73</a>
                </p>
            </div>
            <div className="contacts_block_work_time">
                <div>
                    <p>Будні 8:00-21:00 </p>
                    <p>Вихідні 9:00-19:00</p>
                </div>
            </div>
        </address>
    )
}
