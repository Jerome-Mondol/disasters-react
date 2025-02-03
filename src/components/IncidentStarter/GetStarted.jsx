import React from 'react'
import { Bars, Symbol1, Symbol2, Symbol3 } from '../../../public/consts/consts';

const GetStarted = () => {

    const cards = [
        {
            id: 1,
            image: Symbol1,
            title: "What type of Incident",
            desc: "Choose the category that best describes the incident."
        },
        {
            id: 2,
            image: Symbol2,
            title: "Tell us about the incident?",
            desc: "Let’s connect the dots and see where to start."
        },
        {
            id: 3,
            image: Symbol3,
            title: "Where did the incident occur?",
            desc: "Lorem ipsum dolar sit general sac mascho werho"
        }
    ]

  return (
    <div className="h-full w-full">
        <div className="flex justify-center items-center flex-col h-full w-full py-40">
            <h1 className="font-bold text-3xl">Let's Get Started</h1>
            <p className="mt-3 text-gray-500">Lorem ipsum dolar sit general sac mascho werhoLorem ipsum <br/> dolar sit general sac mascho werhoLorem ipsum dolar sit gene</p>
            <img src={Bars} alt="" className="mt-5"/>
            <div className="cards mt-10 flex gap-10 ">
                {cards.map((card) => (
                    <div className="card bg-secondary rounded-xl w-50 p-5" key={card.id}>
                        <img src={card.image} alt="" />
                        <h3 className="font-bold text-xl mt-19">{card.title}</h3>
                        <p className="text-sm mt-3">{card.desc}</p>
                    </div>
                ))}
            </div>
            <button className="mt-20 bg-primary px-6 py-3 text-sm rounded-lg text-white font-bold">Get started</button>
        </div>
    </div>
  )
}

export default GetStarted
