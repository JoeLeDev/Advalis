"use client";

interface ScrollArrowProps {
  targetId: string;
}

export function ScrollArrow({ targetId }: ScrollArrowProps) {
  const handleScroll = () => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
      <div className="animate-bounce">
        <button 
          onClick={handleScroll}
          className="w-8 h-8 text-white opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
        >
          <svg 
            className="w-full h-full" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </div>
  );
}
