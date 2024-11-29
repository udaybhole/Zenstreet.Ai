interface TestimonialCardProps {
    quote: string;
    author: string;
  }
  
  export default function TestimonialCard({ quote, author }: TestimonialCardProps) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1.5">
            <div className="flex gap-1">
              <span className="text-[#318BF0] text-4xl">"</span>
              <span className="text-[#318BF0] text-4xl">"</span>
            </div>
            <div className="px-2.5">
              <p className="font-poppins text-base font-medium leading-6">
                {quote}
              </p>
            </div>
          </div>
          <div>
            <p className="font-poppins text-base font-medium">
              {author}
            </p>
          </div>
        </div>
      </div>
    );
  }