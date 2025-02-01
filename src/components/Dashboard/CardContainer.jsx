import React from 'react';
import Card from '../Card/Card';
import { Card1, Card2, Card3, Card4, Card5, Card6 } from '../../../public/consts/consts';

const CardContainer = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-[90%] mt-15">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <Card img={Card1} title={"Whitechapel Rd."} desc={"Tulare County, Los Angeles, CA 23415"} loss={"$1,456,654.00"} />
          <Card img={Card2} title={"Whitechapel Rd."} desc={"Tulare County, Los Angeles, CA 23415"} loss={"$1,456,654.00"} />
          <Card img={Card3} title={"Whitechapel Rd."} desc={"Tulare County, Los Angeles, CA 23415"} loss={"$1,456,654.00"} />
          <Card img={Card4} title={"Whitechapel Rd."} desc={"Tulare County, Los Angeles, CA 23415"} loss={"$1,456,654.00"} />
          <Card img={Card5} title={"Whitechapel Rd."} desc={"Tulare County, Los Angeles, CA 23415"} loss={"$1,456,654.00"} />
          <Card img={Card6} title={"Whitechapel Rd."} desc={"Tulare County, Los Angeles, CA 23415"} loss={"$1,456,654.00"} />
        </div>
      </div>
    </div>
  );
}

export default CardContainer;
