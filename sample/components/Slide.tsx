
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
    <div 
      id={`slide-${id}`}
      className="slide-container flex flex-col relative"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/40 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-50/40 blur-[120px] rounded-full pointer-events-none" />

      {/* Header section */}
      <div className="px-16 pt-12 pb-6 border-b border-zinc-100 bg-zinc-50/30 shrink-0">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold tracking-[0.2em] text-blue-600 uppercase">
            DeepBiz × TheSide Integrated Strategy
          </span>
          <span className="text-zinc-400 text-[10px] font-mono">
            CONFIDENTIAL // 2026-01-01
          </span>
        </div>
        <div className="flex items-baseline gap-4">
          <h1 className="text-3xl font-black text-zinc-900 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <span className="text-zinc-500 text-lg font-medium border-l border-zinc-300 pl-4">
              {subtitle}
            </span>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-16 py-8 relative z-10 overflow-hidden flex flex-col">
        {children}
      </div>

      {/* Footer */}
      <div className="px-16 py-6 flex justify-between items-center border-t border-zinc-100 bg-zinc-50/30 shrink-0">
        <div className="flex space-x-3">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
          <div className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
          <div className="w-1.5 h-1.5 rounded-full bg-zinc-300" />
        </div>
        <div className="text-zinc-400 text-xs font-bold tracking-widest">
          {pageNumber} / {totalPageCount}
        </div>
      </div>
    </div>
  );
};

export default Slide;
