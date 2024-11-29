interface DurationButtonProps {
    duration: string;
    isSelected?: boolean;
    onClick?: () => void;
  }
  
  export default function DurationButton({ duration, isSelected = false, onClick }: DurationButtonProps) {
    return (
      <button
        onClick={onClick}
        className={`px-3 py-1.5 text-sm border rounded-sm transition-colors
          ${isSelected 
            ? 'border-white text-white font-semibold' 
            : 'border-white/60 text-white/80 font-medium hover:border-white hover:text-white'
          }`}
      >
        {duration}
      </button>
    );
  }