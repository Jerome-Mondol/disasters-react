

// import React, { useState } from 'react';
// import Incident1 from '../../../public/assets/IncidentsPage/Incident1.png';
// import Incident2 from '../../../public/assets/IncidentsPage/Incident2.png';
// import Incident3 from '../../../public/assets/IncidentsPage/Incident3.png';
// import Incident4 from '../../../public/assets/IncidentsPage/Incident4.png';
// import Incident5 from '../../../public/assets/IncidentsPage/Incident5.png';
// import Incident6 from '../../../public/assets/IncidentsPage/Incident6.png';
// import Incident7 from '../../../public/assets/IncidentsPage/Incident7.png';
// import Incident8 from '../../../public/assets/IncidentsPage/Incident8.png';
// import Incident9 from '../../../public/assets/IncidentsPage/Incident9.png';
// import Incident10 from '../../../public/assets/IncidentsPage/Incident10.png';
// import Incident11 from '../../../public/assets/IncidentsPage/Incident11.png';
// import Incident12 from '../../../public/assets/IncidentsPage/Incident12.png';
// import Incident13 from '../../../public/assets/IncidentsPage/Incident13.png';
// import Incident14 from '../../../public/assets/IncidentsPage/Incident14.png';
// import Incident15 from '../../../public/assets/IncidentsPage/Incident15.png';
// import Incident16 from '../../../public/assets/IncidentsPage/Incident16.png';
// import Incident17 from '../../../public/assets/IncidentsPage/Incident17.png';
// import Incident18 from '../../../public/assets/IncidentsPage/Incident18.png';

// const cards = [
//   { id: 1, img: Incident1, text: 'Avalanche' },
//   { id: 2, img: Incident2, text: 'Biological' },
//   { id: 3, img: Incident3, text: 'Blizzard' },
//   { id: 4, img: Incident4, text: 'Cold/Freezing' },
//   { id: 5, img: Incident5, text: 'Drought' },
//   { id: 6, img: Incident6, text: 'Earthquake' },
//   { id: 7, img: Incident7, text: 'Flooding' },
//   { id: 8, img: Incident8, text: 'Heat Wave' },
//   { id: 9, img: Incident9, text: 'Hail' },
//   { id: 10, img: Incident10, text: 'Lightning' },
//   { id: 11, img: Incident11, text: 'Man Made' },
//   { id: 12, img: Incident12, text: 'Mudslide' },
//   { id: 13, img: Incident13, text: 'Severe Storm' },
//   { id: 14, img: Incident14, text: 'Strong Wind' },
//   { id: 15, img: Incident15, text: 'Tornado' },
//   { id: 16, img: Incident16, text: 'Tsunami' },
//   { id: 17, img: Incident17, text: 'Volcanic Eruption' },
//   { id: 18, img: Incident18, text: 'Wildfire' },
// ];

// const IncidentCards = () => {
// //   const [selectedCard, setSelectedCard] = useState(null);

// //   return (
// //     <div className="flex flex-col items-center p-4">
// //       <h1 className="text-2xl font-bold mb-6 mt-15">Which of these best describes the incident?</h1>
// //       <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
// //         {cards.map((card) => (
// //           <button
// //             key={card.id}
// //             onClick={() => setSelectedCard(card.id)}
// //             className={`flex items-center justify-start px-10 gap-3 py-4 border border-gray-300 rounded-lg transition duration-200 ${
// //               selectedCard === card.id ? 'bg-orange-500 text-white' : 'bg-gray-100'
// //             }`}
// //           >
// //             <img src={card.img} alt={card.text} className="h-12 w-12 object-contain mb-2" />
// //             <span>{card.text}</span>
// //           </button>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// return (
//     <div className="flex justify-center md:px-0 px-4 md:mb-0 mb-4">
//       <div>
//         <h1 className="text-[24px] font-bold py-5 text-center sm:text-left">
//           Which of these best describes the incident?
//         </h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//           {cards.map((incident, index) => (
//             <Which
//               key={index}
//               icon={incident.icon}
//               name={incident.name}
//               isActive={index === activeIndex}
//               onClick={() => setActiveIndex(index)}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );


// export default IncidentCards;



import React, { useState } from 'react';

// Which component
const Which = ({ icon, name, isActive, onClick }) => {
  return (

    <div onClick={onClick}
      className={`w-full sm:w-[180px] overflow-hidden h-[69px] text-[#71717A] rounded-md border-[1px] bg-[#f5f5f5] border-[#E4E4E7] box flex gap-[10px] py-6 pl-4 items-center hover:bg-[#f26722] hover:text-[#fff] transition-colors hover:scale-105 transition-transform`}
    >
      <p className="img">{icon}</p>
      <p className="text-[14px]">{name}</p>
    </div>
  );
};

// Parent component
const Incident2 = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const incidents = [
    { icon: <img src="../../../public/assets/IncidentsPage/Incident1.png" alt=""/>, name: "Avalanche" },
    { icon: <img src="../../../public/assets/IncidentsPage/Incident2.png" alt=""/>, name: "Biological" },
    { icon: <img src="../../../public/assets/IncidentsPage/Incident3.png" alt=""/>, name: "Blizzard" },
    { icon: <img src="../../../public/assets/IncidentsPage/Incident4.png" alt=""/>, name: "Cold/Freezing" },
    { icon: <img src="../../../public/assets/IncidentsPage/Incident5.png" alt=""/>, name: "Drought" },
    { icon: <img src="../../../public/assets/IncidentsPage/Incident6.png" alt=""/>, name: "Earthquake" },
    { icon: <img src="../../../public/assets/IncidentsPage/Incident7.png" alt=""/>, name: "Flooding" },
    { icon: <img src="../../../public/assets/IncidentsPage/Incident8.png" alt=""/>, name: "Heat Wave" },
    { icon: <img src="../../../public/assets/IncidentsPage/Incident9.png" alt=""/>, name: "Hail" },
    { icon: <img src="../../../public/assets/IncidentsPage/Incident10.png" alt=""/>, name: "Lightning" },
    { icon: <img src="../../../public/assets/IncidentsPage/Incident11.png" alt=""/>, name: "Man Made" },
    { icon: <img src="../../../public/assets/IncidentsPage/Incident12.png" alt=""/>, name: "Mudslide" },
    { icon: <img src="../../../public/assets/IncidentsPage/Incident13.png" alt=""/>, name: "Severe Storm" },
    { icon: <img src="../../../public/assets/IncidentsPage/Incident14.png" alt=""/>, name: "Strong Wind" },
    { icon: <img src="../../../public/assets/IncidentsPage/Incident15.png" alt=""/>, name: "Tornado" },
    { icon: <img src="../../../public/assets/IncidentsPage/Incident16.png" alt=""/>, name: "Tsunami" },
    { icon: <img src="../../../public/assets/IncidentsPage/Incident17.png" alt=""/>, name: "Volcanic Eruption" },
    { icon: <img src="../../../public/assets/IncidentsPage/Incident18.png" alt=""/>, name: "Wildfire" },
  ];

  return (
    <div className="flex justify-center md:px-0 px-4 md:mb-0 mb-4">
      <div>
        <h1 className="text-[24px] font-bold py-5 text-center sm:text-left">
          Which of these best describes the incident?
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {incidents.map((incident, index) => (
            <Which
              key={index}
              icon={incident.icon}
              name={incident.name}
              isActive={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Incident2;
