
import React from 'react';
import Incident1 from '../../../public/assets/IncidentsPage/Incident1.png'
import Incident2 from '../../../public/assets/IncidentsPage/Incident2.png'
import Incident3 from '../../../public/assets/IncidentsPage/Incident3.png'
import Incident4 from '../../../public/assets/IncidentsPage/Incident4.png'
import Incident5 from '../../../public/assets/IncidentsPage/Incident5.png'
import Incident6 from '../../../public/assets/IncidentsPage/Incident6.png'
import Incident7 from '../../../public/assets/IncidentsPage/Incident7.png'
import Incident8 from '../../../public/assets/IncidentsPage/Incident8.png'
import Incident9 from '../../../public/assets/IncidentsPage/Incident9.png'
import Incident10 from '../../../public/assets/IncidentsPage/Incident10.png'
import Incident11 from '../../../public/assets/IncidentsPage/Incident11.png'
import Incident12 from '../../../public/assets/IncidentsPage/Incident12.png'
import Incident13 from '../../../public/assets/IncidentsPage/Incident13.png'
import Incident14 from '../../../public/assets/IncidentsPage/Incident14.png'
import Incident15 from '../../../public/assets/IncidentsPage/Incident15.png'
import Incident16 from '../../../public/assets/IncidentsPage/Incident16.png'
import Incident17 from '../../../public/assets/IncidentsPage/Incident17.png'
import Incident18 from '../../../public/assets/IncidentsPage/Incident18.png'

const cards = [
  { id: 1, img: Incident1, text: 'Avalanche' },
  { id: 2, img: Incident2, text: 'Biological' },
  { id: 3, img: Incident3, text: 'Blizzard' },
  { id: 4, img: Incident4, text: 'Cold/Freezing' },
  { id: 5, img: Incident5, text: 'Drought' },
  { id: 6, img: Incident6, text: 'Earthquake' },
  { id: 7, img: Incident7, text: 'Flooding' },
  { id: 8, img: Incident8, text: 'Heat Wave' },
  { id: 9, img: Incident9, text: 'Hail' },
  { id: 10, img: Incident10, text: 'Lightning' },
  { id: 11, img: Incident11, text: 'Man Made' },
  { id: 12, img: Incident12, text: 'Mudslide' },
  { id: 13, img: Incident13, text: 'Severe Storm' },
  { id: 14, img: Incident14, text: 'Strong Wind' },
  { id: 15, img: Incident15, text: 'Tornado' },
  { id: 16, img: Incident16, text: 'Tsunami' },
  { id: 17, img: Incident17, text: 'Volcanic Eruption' },
  { id: 18, img: Incident18, text: 'Wildfire' },
];

const IncidentCards = () => {
  return (
    <div className="flex justify-center h-full w-full` items-center bg-red-400">
      <div className="bg-yellow-400" >
        <h1>Which of these best describes the incident?</h1>
        {cards.map((card) => (
          <div
            key={card.id}
            className=""
          >
            {card.img && (
              <img
                src={card.img}
                alt={card.text}
                className=""
              />
            )}
            <h3 className="">{card.text}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IncidentCards;
