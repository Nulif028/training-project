import React, { useState } from 'react';
import { Book, Award, User } from 'lucide-react';

export default function ThreeIconsRow() {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const icons = [
    {
      id: 1,
      Icon: Book,
      title: "Learn quick",
      subtitle: "Quran Classes"
    },
    {
      id: 2,
      Icon: Award,
      title: "ISO certified",
      subtitle: "islamic institution"
    },
    {
      id: 3,
      Icon: User,
      title: "Online Arabic",
      subtitle: "Classes For Kids"
    }
  ];

  return (
    <div className="w-full bg-gradient-to-b from-green-50 to-green-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20">
          {icons.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-5 cursor-pointer"
              onMouseEnter={() => setHoveredIcon(item.id)}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              {/* Yellow Circle with Icon */}
              <div 
                className={`w-28 h-28 bg-yellow-500 rounded-full flex items-center justify-center border-4 border-gray-800 transition-transform duration-700 ${
                  hoveredIcon === item.id ? 'animate-spin' : ''
                }`}
              >
                <item.Icon className="w-12 h-12 text-white" strokeWidth={2.5} />
              </div>
              
              {/* Text Content */}
              <div className="text-left">
                <div className="text-xl font-bold text-gray-900 leading-tight">
                  {item.title}
                </div>
                <div className="text-xl font-bold text-gray-900 leading-tight">
                  {item.subtitle}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}