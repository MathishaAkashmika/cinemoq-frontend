import Image from 'next/image';

interface TicketCardProps {
  date: string;
  title: string;
  tickets: string;
  time: string;
  movieImage: string;
  qrImage: string;
}

const TicketCard: React.FC<TicketCardProps> = ({ date, title, tickets, time, movieImage, qrImage }) => {
    return (
        <div className="flex justify-center w-full py-2">
          <div className="bg-white text-black rounded-lg shadow-lg flex flex-col md:flex-row w-full max-w-[700px] h-auto md:h-[250px]">
 
  <div className="w-full md:w-1/4 rounded-t-lg md:rounded-l-lg overflow-hidden">
    <Image src={movieImage} alt="Movie Poster" width={700} height={200} className="object-cover" />
  </div>
  
  
  <div className="w-full md:w-3/4 p-4 flex flex-col justify-between">
    <div>
      <p><strong>Date:</strong> {date}</p>
      <p><strong>Movie Title:</strong> {title}</p>
      <p><strong>Ticket(s):</strong> {tickets}</p>
      <p><strong>Time:</strong> {time}</p>
    </div>
    
   
    <div className="flex flex-col md:flex-row justify-between items-center mt-4 space-y-4 md:space-y-0">
      <div className="flex justify-center md:justify-start">
        <Image src={qrImage} alt="QR Code" width={60} height={60} />
      </div>
      <button className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-gray-700 font-bold w-full md:w-auto text-center">
        <i className="fa-solid fa-download mr-2 w-5 h-4"></i>
        DOWNLOAD TICKET
      </button>
    </div>
  </div>
</div>

        </div>
      );
      
};

export default TicketCard;
