import React, { useState } from "react";

export const Nav = () => {
  const [activeIndex, setActiveIndex] = useState(null); // Track the active tab

  return (
    <div className="px-4 md:px-16 lg:px-32 xl:px-[40rem] my-3">
      <div className="border-t-[1px] pt-2 border-zinc-300 flex justify-between">
        {["Posts", "About", "Content", "Slambook", "Contact"].map((text, ind) => (
          <a
            key={ind} // Add a unique key for each item
            href="#"
            onClick={() => setActiveIndex(ind)} // Set the active tab index
            className={`text-gray-500 ${
              activeIndex === ind ? "font-semibold text-gray-800" : ""
            } font-outfit text-sm md:text-lg transition-colors  duration-300`}
          >
            {text}
          </a>
        ))}
      </div>
    </div>
  );
};
