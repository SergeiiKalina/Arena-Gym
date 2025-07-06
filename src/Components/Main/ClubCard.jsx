import { Button } from '@mui/material';
import { cardArray } from '../../data/data';
import { useContext } from 'react';
import { DataContext } from '../Context/Context';

export default function ClubCard() {
  const { changesModalState, setPathMessages } = useContext(DataContext);

  return (
    <section className="club_card_block" id="Card">
      <h3 className="club_card_header">КАРТИ</h3>
      <article className="club_card_header_border">
        <span className="club_card_header_border_span"></span>
      </article>
      <article className="clubCardBlock">
        {cardArray.map((item) => {
          const { name, id, description, linkOnForm } = item;
          return (
            <div className="newCard" key={id}>
              <div className="front">
                <h3 className="club_card_name">{name}</h3>

                <ul className="clubCardItem_info_text">
                  {description.map((el, i) => {
                    if (i === 0) {
                      return (
                        <li key={i} className="clubCardItem_info_time_work">
                          <span>{el}</span>
                          <span>{description[1]}</span>
                        </li>
                      );
                    }
                    if (i === 1) {
                      return '';
                    } else {
                      return (
                        <li key={i}>
                          <img src="./images/listPoint.png" alt="" />
                          {el}
                        </li>
                      );
                    }
                  })}
                </ul>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#e4b800',
                    width: '186px',
                    margin: '12px auto 0 auto',
                    color: 'black',
                    fontWeight: '800',
                    borderRadius: '12px',
                    '&:hover': {
                      backgroundColor: '#000000',
                    },
                  }}
                  onClick={(e) => {
                    setPathMessages(linkOnForm);
                    changesModalState(e);
                  }}
                >
                  Придбати
                </Button>
              </div>
            </div>
          );
        })}
      </article>
    </section>
  );
}
