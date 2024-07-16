import React from "react";


const items: string[] = [
  "Help",
  "Status",
  "About",
  "Careers",
  "Press",
  "Blog",
  "Privacy",
  "Terms",
  "Text to speech",
  "Teams"
];

export default function Component() {
  return (
    <div className="">
     <div className="h-[1px] bg-gray-300"></div>
     <div className="flex justify-center">
      <div className="flex flex-wrap gap-3 p-4   mx-auto">
        {items.map((item, index) => (
          <div key={index} className="text-gray-600 font-medium cursor-pointer">
            {item}
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}
