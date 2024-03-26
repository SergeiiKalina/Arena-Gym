import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Autoplay, Pagination } from "swiper"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { slideArr } from "../../data/data"

SwiperCore.use([Autoplay, Pagination])
export default function SwiperBlock() {
    return (
        <section className="wrapperSlider">
            <article className="sliderBlock">
                <Swiper
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    loop={true}
                    spaceBetween={5}
                    slidesPerView={1}
                >
                    {slideArr.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="slideBlock">
                                <img
                                    alt={item.alt}
                                    src={item.img}
                                    width="100%"
                                    height="100%"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </article>
        </section>
    )
}
