import Navbar from '../components/Navbar';
import TicketCard from '../components/TicketCard';

const MyTickets = () => {
  const tickets = [
    {
      date: 'Mon, 23 Oct 2023',
      title: 'SMILE 2',
      tickets: 'C8, C9, C10',
      time: '14:40',
      movieImage: '/images/7.jpg',
      qrImage: '/images/qr.png',
    },
    {
      date: 'Mon, 23 Oct 2023',
      title: 'HERETIC',
      tickets: 'C8, C9, C10',
      time: '14:40',
      movieImage: '/images/2.jpg',
      qrImage: '/images/qr.png',
    },
  ];

  return (
    <div className="bg-gradient-to-t from-purple-800 via-black to-black min-h-screen flex flex-col">
      <Navbar />
      <div className="px-8 py-6">
        <h1 className="text-center text-3xl font-bold mb-8">MY TICKETS</h1>
        <div className="space-y-8">
          {tickets.map((ticket, index) => (
            <TicketCard
                  key={index}
                  date={ticket.date}
                  title={ticket.title}
                  tickets={ticket.tickets}
                  time={ticket.time}
                  movieImage={ticket.movieImage}
                  qrImage={ticket.qrImage}
                         />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyTickets;
