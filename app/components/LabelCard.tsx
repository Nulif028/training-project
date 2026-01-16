import React from "react";

export default function LabelCard() {
  return (
    <div className="relative -mb-24 z-20 px-4 pb-16">
      <div className="max-w-7xl mx-auto">
       
        <div className="relative bg-gradient-to-r from-green-500 via-lime-400 to-yellow-400  shadow-xl overflow-hidden">
        
          <img
            src="/images/background/cta-one_bg.png"
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
          
          
          <div className="relative flex items-center justify-between px-8 md:px-16 py-8 md:py-12">
            
            
            
            <div className="flex-1 px-6 md:px-12">
              <h3 className="text-xl md:text-3xl font-bold text-white leading-tight">
                Do Not Let Shaitan Delay You From Starting<br />
                To Learn Your Deen
              </h3>
            </div>
            
        
            <div className="flex-shrink-0">
              <button className="bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-black transition-colors shadow-md">
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


