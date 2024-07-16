import React from "react";
import { BiBookmarkAlt } from "react-icons/bi";

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
    <div className="mx-5">
      <div className="text-xl mb-3">Reading List</div>
      <p className="flex  gap-2 mb-4">
        Click on any story to easily add it to your reading list or a custom list that you can share
      </p>
      <div className="flex flex-wrap gap-3">
        {items.map((item, index) => (
          <div key={index} className="text-gray-400 font-medium cursor-pointer">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
