import { useState } from 'react';
import { cardServicesArr } from '../../data/data';
import { v4 as uuidv4 } from 'uuid';

export default function CardServices() {
  const [arr] = useState(cardServicesArr);

  return (
    <article className="wrapperMainBlock_content" id="CardServices">
      <div className="blockCards">
        {arr.map((item) => {
          const {
            img,
            header,
            paragraph1,
            list,
          } = item;

          return (
            <div className="card" key={uuidv4()}>
              <div className="card__front">
                <img
                  src={img}
                  alt="crossfit studio"
                  width="100%"
                  height="100%"
                />
                <h3
                  className={`${
                    header === 'ПЕРСОНАЛЬНІ ТРЕНУВАННЯ' ? 'long_header' : ''
                  }`}
                >
                  {header}
                </h3>
              </div>
              <div className="card__back">
                <img
                  src={img}
                  alt="crossfit studio"
                  width="100%"
                  height="100%"
                />
                <div className="backCardContent">
                  <section className="info_block">
                    <h3
                      className={`${
                        header === 'ПЕРСОНАЛЬНІ ТРЕНУВАННЯ'
                          ? 'back_long_header'
                          : ''
                      }`}
                    >
                      {header}
                    </h3>
                    {paragraph1 ? <p>{paragraph1}</p> : ''}

                    {list ? (
                      <ul
                        className={`blockCards_list ${
                          paragraph1 ? 'with_paragraph' : ''
                        }`}
                      >
                        {list.map((item, i) => (
                          <li key={i}>
                            <span>-</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </section>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
}
