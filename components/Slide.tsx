
import React from 'react';
import { SlideProps } from '../types';

const Slide: React.FC<SlideProps> = ({ 
  id, 
  title, 
  subtitle, 
  children, 
  pageNumber, 
  totalPageCount 
}) => {
  return (
    <div className="flex justify-center items-center w-full py-2 md:py-4">
      <div 
        id={`slide-${id}`}
        className="w-full md:max-w-[1123px] md:aspect-[1123/794] bg-white text-zinc-900 flex flex-col shadow-xl border border-zinc-200 rounded-sm relative slide-container mx-2 md:mx-4 min-h-[400px] md:min-h-0"
      >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/50 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-50/50 blur-[120px] rounded-full pointer-events-none" />

      {/* Header section */}
      <div className="px-3 md:px-16 pt-3 md:pt-12 pb-2 md:pb-6 border-b border-zinc-100 bg-zinc-50/30">
        <div className="flex items-center justify-between mb-1 md:mb-2">
          <span className="text-[7px] md:text-xs font-bold tracking-wider md:tracking-widest text-blue-600 uppercase">
            DeepBiz × TheSide Integrated Strategy
          </span>
          <span className="text-zinc-400 text-[6px] md:text-[10px] font-mono">
            CONFIDENTIAL // 2026-01-01
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4">
          <h1 className="text-base md:text-3xl font-black text-zinc-900 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <span className="text-zinc-500 text-xs md:text-lg font-medium md:border-l border-zinc-300 md:pl-4">
              {subtitle}
            </span>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-3 md:px-16 py-3 md:py-8 relative z-10 overflow-auto text-xs md:text-base">
        {children}
      </div>

      {/* Footer */}
      <div className="px-3 md:px-16 py-2 md:py-6 flex justify-between items-center border-t border-zinc-100 bg-zinc-50/30">
        <div className="flex space-x-1 md:space-x-3">
          <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-blue-600" />
          <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-indigo-600" />
          <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-zinc-300" />
        </div>
        <div className="text-zinc-400 text-[8px] md:text-xs font-bold tracking-wider md:tracking-widest">
          {pageNumber} / {totalPageCount}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Slide;
