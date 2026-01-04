import React, { ReactNode } from 'react';

export interface SlideProps {
  title?: string;
  subtitle?: string;
  children?: ReactNode;
  bgGradient?: string;
  titleSize?: 'small' | 'medium' | 'large';
  align?: 'left' | 'center';
}

export const Slide: React.FC<SlideProps> = ({ 
  title, 
  subtitle, 
  children, 
  bgGradient = 'from-blue-50 to-white',
  titleSize = 'large',
  align = 'center'
}) => {
  const titleSizeClass = {
    small: 'text-3xl',
    medium: 'text-4xl',
    large: 'text-5xl'
  }[titleSize];

  const alignClass = align === 'center' ? 'text-center' : 'text-left';

  return (
    <div className={`h-screen w-full flex flex-col justify-center items-center bg-gradient-to-br ${bgGradient} p-12`}>
      <div className="max-w-7xl w-full">
        {title && (
          <h1 className={`${titleSizeClass} font-bold text-gray-900 mb-4 ${alignClass}`}>
            {title}
          </h1>
        )}
        {subtitle && (
          <p className={`text-2xl text-gray-600 mb-8 ${alignClass}`}>
            {subtitle}
          </p>
        )}
        <div className={align === 'center' ? 'flex justify-center' : ''}>
          {children}
        </div>
      </div>
    </div>
  );
};
