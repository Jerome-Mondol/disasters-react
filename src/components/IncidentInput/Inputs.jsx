// import React from 'react'

// const Inputs = () => {
//   return (
//     <div>
//         <div className='w-full flex justify-center items-center mt-8 md:p-0 p-5'>
//             <div>
//                 <h1 className='text-[24px] text-[#09090B] font-bold pb-2'>Let’s give the incident a title?</h1>
//                 <p className='text-[14px] text-[#72727a] pb-4'>Make a title that will easily identify the incidents</p>
//                 <input className='md:w-[752px] md:h-[50px] w-full h-[50px] bg-[#F4F4F5] rounded-[6px] border-[1px] p-4 outline-[#f26722]' type="text"  placeholder='Add title here'/>



//                 <h1 className='text-[24px] text-[#09090B] font-bold pt-8 pb-2'>Describe what happened during the incident?</h1>
//                 <p className='text-[14px] text-[#72727a] pb-4'>Share some information about the incident. The when, where, how. </p>
//                 <textarea  className='md:w-[752px] md:h-[127px] w-full h-[127px] bg-[#F4F4F5] rounded-[6px] border-[1px] p-4 outline-[#f26722]' placeholder='Type here'></textarea>


//             </div>




//         </div>
//     </div>
//   )
// }

// export default Inputs


import React from 'react';

const Inputs = () => {
  return (
    <div className="w-full flex justify-center items-center mt-8 px-4 md:px-0">
      <div className="max-w-3xl w-full">
        <h1 className="text-2xl text-[#09090B] font-bold pb-2">
          Let’s give the incident a title?
        </h1>
        <p className="text-sm text-[#72727a] pb-4">
          Make a title that will easily identify the incidents
        </p>
        <input
          className="w-full h-12 bg-[#F4F4F5] rounded-md border p-4 outline-[#f26722] focus:ring-2 focus:ring-[#f26722] focus:outline-none transition"
          type="text"
          placeholder="Add title here"
        />

        <h1 className="text-2xl text-[#09090B] font-bold pt-8 pb-2">
          Describe what happened during the incident?
        </h1>
        <p className="text-sm text-[#72727a] pb-4">
          Share some information about the incident. The when, where, how.
        </p>
        <textarea
          className="w-full h-32 bg-[#F4F4F5] rounded-md border p-4 outline-[#f26722] focus:ring-2 focus:ring-[#f26722] focus:outline-none transition resize-none"
          placeholder="Type here"
        ></textarea>
      </div>
    </div>
  );
};

export default Inputs;
