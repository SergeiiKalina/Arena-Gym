import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';

SwiperCore.use([Autoplay, Pagination]);
export default function SwiperBlock() {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const fetchCoaches = async () => {
      const res = await fetch('https://arena-tg-bot.pp.ua/api/slides');
      const data = await res.json();

      if (data && data.length > 0) {
        console.log(data);
        setSlides(data);
      }
    };

    fetchCoaches();
  }, []);
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
          {slides.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="slideBlock">
                <img
                  alt={item.alt}
                  src={`data:image/jpeg;base64,${item.img}`}
                  width="100%"
                  height="100%"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </article>
    </section>
  );
}
