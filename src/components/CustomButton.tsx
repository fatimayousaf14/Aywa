import React from 'react';

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: 'default' | 'lg';
  variant?: 'primary' | 'secondary' | 'ghost' | 'warmth';
}

export function CustomButton({ 
  children, 
  className = '', 
  size = 'default',
  variant = 'primary',
  ...props 
}: CustomButtonProps) {
  const sizeClasses = size === 'lg' ? 'h-12 px-8 text-base' : 'h-10 px-6 text-sm';
  
  const variantClasses = {
    primary: 'bg-[#9AA17C] hover:bg-[#7F8564] text-[#EAE4DB] shadow-cinematic hover:shadow-cinematic-lg',
    secondary: 'bg-[#CBBBA0] hover:bg-[#bbaA8f] text-[#2A241E] shadow-cinematic hover:shadow-cinematic-lg',
    ghost: 'bg-transparent hover:bg-[#CBBBA0]/50 text-[#2A241E] border border-[#2A241E]/20',
    warmth: 'bg-[#D6BFA7] hover:bg-[#c6af97] text-[#2A241E] shadow-warm hover:shadow-cinematic-lg'
  };
  
  return (
    <button
      className={`inline-flex items-center justify-center rounded-full transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 ${sizeClasses} ${variantClasses[variant]} ${className}`}
      style={{
        letterSpacing: '0.015em'
      }}
      {...props}
    >
      {children}
    </button>
  );
}
