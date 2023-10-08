import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Autoplay, Pagination } from "swiper"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

const slideArr = [
    { id: 0, title: "", img: "./images/IMG_6708.jpg", alt: "photo" },
    { id: 1, title: "", img: "./images/IMG_6822-HDR.jpg", alt: "photo" },
    { id: 2, title: "", img: "./images/IMG_6884.jpg", alt: "photo" },
    { id: 3, title: "", img: "./images/IMG_6893.jpg", alt: "photo" },
    { id: 4, title: "", img: "./images/IMG_7003-HDR.jpg", alt: "photo" },
    { id: 5, title: "", img: "./images/IMG_6988-HDR.jpg", alt: "photo" },
]

SwiperCore.use([Autoplay, Pagination])
export default function SwiperBlock() {
    return (
        <section className="wrapperSlider">
            <article className="sliderBlock">
                <Swiper
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
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
