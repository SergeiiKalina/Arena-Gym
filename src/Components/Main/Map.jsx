export default function Map() {
    return (
        <section className="map_block">
            <h3 className="map_block_header">Як Дістатись</h3>
            <div className="map_block_border">
                <span></span>
            </div>
            <div className="map_block_block">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1332.8265035569543!2d30.54382578021742!3d50.411833604426675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cff8b77bba49%3A0x61e790033ea7d4e6!2z0KTRltGC0L3QtdGBINC60LvRg9CxIEFyZW5hIEd5bQ!5e0!3m2!1sru!2sua!4v1697053622159!5m2!1sru!2sua"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </section>
    )
}
