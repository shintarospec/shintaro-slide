
import React, { useEffect, useRef, useState } from 'react';
import { SlideProps } from '../types';

const Slide: React.FC<SlideProps> = ({ 
  id, 
  title, 
  subtitle, 
  children, 
  pageNumber, 
  totalPageCount 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      if (!containerRef.current) return;
      
      const slideWidth = 1123; // A4 landscape width in px
      const viewportWidth = window.innerWidth;
      const margin = 32; // 16px margin on each side
      
      if (viewportWidth < slideWidth + margin) {
        const newScale = (viewportWidth - margin) / slideWidth;
        setScale(newScale);
      } else {
        setScale(1);
      }
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  return (
    <div className="flex justify-center items-center w-full" style={{ padding: '8px', minHeight: `${794 * scale}px` }}>
      <div 
        ref={containerRef}
        id={`slide-${id}`}
        className="a4-landscape bg-white text-zinc-900 flex flex-col shadow-xl border border-zinc-200 rounded-sm relative slide-container"
        style={{
          transform: `scale(${scale})`,
          transformOrigin: 'center center'
        }}
      >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/50 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-50/50 blur-[120px] rounded-full pointer-events-none" />

      {/* Header section */}
      <div className="px-16 pt-12 pb-6 border-b border-zinc-100 bg-zinc-50/30">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">
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
      <div className="flex-1 px-16 py-8 relative z-10 overflow-hidden">
        {children}
      </div>

      {/* Footer */}
      <div className="px-16 py-6 flex justify-between items-center border-t border-zinc-100 bg-zinc-50/30">
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
    </div>
  );
};

export default Slide;
