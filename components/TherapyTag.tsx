interface TherapyTagProps {
    label: string;
  }
  
  export default function TherapyTag({ label }: TherapyTagProps) {
    return (
      <div className="px-4 py-4 bg-white rounded border border-[#E5E7EB] shadow-sm">
        <span className="font-poppins text-lg font-medium text-[#0A2C4C]">
          {label}
        </span>
      </div>
    );
  }