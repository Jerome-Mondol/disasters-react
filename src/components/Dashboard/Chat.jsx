import React, { useState } from "react";
import { Chat } from "../../../public/consts/consts";

const ChatOption = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleClick = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-[90%] flex justify-end items-center mx-auto my-30">
        <button onClick={handleClick} className="w-[90%] md:w-auto">
          <img src={Chat} alt="Chat Icon" className="cursor-pointer" />
        </button>
      </div>

      {isChatOpen && (
        <div className="fixed bottom-5 right-5 md:right-10 bg-white p-5 w-full md:w-[400px] h-[500px] border-2 border-gray-300 rounded-lg shadow-lg">
          <div className="h-full flex flex-col justify-between">
            <div className="flex justify-between items-center border-b pb-2 mb-2">
              <h3 className="text-xl font-semibold">Chat</h3>
              <button onClick={handleClick} className="text-gray-500">
                X
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-2 bg-gray-100 rounded-lg">
            </div>
            <input
              type="text"
              placeholder="Type a message..."
              className="w-full p-2 border-t mt-2 rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatOption;
