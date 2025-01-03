import Footer from '../components/Footer';
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
      <div className="px-4 py-6 md:px-8 md:py-10">
        <h1 className="text-center text-3xl font-bold mb-8 text-white">MY TICKETS</h1>
        <div className="space-y-8 md:space-y-10">
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
      <Footer />
    </div>
  );
};

export default MyTickets;
