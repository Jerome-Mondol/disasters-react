import React from 'react'
import Card from '../Card/Card';
import { Card1, Card2, Card3, Card4, Card5, Card6 } from '../../../public/consts/consts';

const CardContainer = () => {
  return (
    <div className="w-full flex justify-center items-center">
        <div className="cards w-[90%] flex flex-wrap gap-10 flex-row mt-15">
            <Card img={Card1} title={"Whitechapel Rd."} desc={"Tulare County,  Los Angles, CA 23415"} loss={"$1,456,654.00"}/>
            <Card img={Card2} title={"Whitechapel Rd."} desc={"Tulare County,  Los Angles, CA 23415"} loss={"$1,456,654.00"}/>
            <Card img={Card3} title={"Whitechapel Rd."} desc={"Tulare County,  Los Angles, CA 23415"} loss={"$1,456,654.00"}/>
            <Card img={Card4} title={"Whitechapel Rd."} desc={"Tulare County,  Los Angles, CA 23415"} loss={"$1,456,654.00"}/>
            <Card img={Card5} title={"Whitechapel Rd."} desc={"Tulare County,  Los Angles, CA 23415"} loss={"$1,456,654.00"}/>
            <Card img={Card6} title={"Whitechapel Rd."} desc={"Tulare County,  Los Angles, CA 23415"} loss={"$1,456,654.00"}/>
        </div>
    </div>
  )
}

export default CardContainer
