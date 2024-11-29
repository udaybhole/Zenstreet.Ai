interface CredentialItemProps {
    icon: React.ReactNode;
    text: string;
  }
  
  export default function CredentialItem({ icon, text }: CredentialItemProps) {
    return (
      <div className="flex items-center gap-3.5">
        <div className="text-[#1776DF]">
          {icon}
        </div>
        <span className="font-inter text-lg font-medium text-[#516E89]">
          {text}
        </span>
      </div>
    );
  }