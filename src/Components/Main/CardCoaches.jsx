import React, { useEffect } from 'react';
import { useState } from 'react';
import PopUpCoach from './PopUpCoach';

export default function CardCoaches() {
  const [togglePopUp, setTogglePopUp] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [coaches, setCoaches] = useState([]);

  useEffect(() => {
    const fetchCoaches = async () => {
      const res = await fetch('https://arena-tg-bot.pp.ua/api/coaches');
      const data = await res.json();

      if (data && data.length > 0) {
        console.log(data);
        setCoaches(data);
      }
    };

    fetchCoaches();
  }, []);

  const showPopUp = (e, index) => {
    const parent = e.target.closest('.pop_up_coach');
    if (parent && parent.id === 'popUpCoach') return;
    setTogglePopUp((prev) => {
      if (!prev) {
        document.body.style.overflow = 'hidden';
        return true;
      } else {
        document.body.style.overflow = 'visible';
        return false;
      }
    });
    setCurrentIndex(index);
  };

  return (
    <>
      <section className="coaches_card_block" id="CardCoach">
        <h3 className="coaches_card_header">ТРЕНЕРИ</h3>
        <article className="coaches_card_header_border">
          <span className="span"></span>
        </article>
        <article className="coachesCardBlock">
          {coaches.map((item, index) => {
            const { name, _id, img, experience } = item;

            return (
              <div
                className="newCard"
                key={_id}
                onClick={(e) => showPopUp(e, index)}
              >
                <img src={`data:image/jpeg;base64,${img}`} alt="coach" />
                <footer className="newCard_footer">
                  <h4 className="coachesCardItem_info_name">{name}</h4>
                  <span className="coach_experience">Досвід роботи</span>
                  <span className="coach_experience_data">{experience}</span>
                </footer>
              </div>
            );
          })}
        </article>
      </section>
      {togglePopUp ? (
        <PopUpCoach
          showPopUp={showPopUp}
          currentIndex={currentIndex}
          coachArray={coaches}
        />
      ) : null}
    </>
  );
}
