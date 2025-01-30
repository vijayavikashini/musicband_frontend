import React from "react";

const Events = () => 
  
  //FETCHING API
  // {
  //   const [events, setEvents] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:5000/api/events")
  //     .then((res) => res.json())
  //     .then((data) => setEvents(data));
  // }, []);

  // }
  //OBJ CODE
  {
  const events = [
    {
      id: 1,
      title: "World Tour Kickoff",
      date: "February 25, 2025",
      location: "Madison Square Garden, New York",
      image: "https://media.pitchfork.com/photos/5e28b689e540c400084fddaa/4:3/w_800,h_600,c_limit/BTS.jpg",
      youtubeLink: "https://youtu.be/Ha_xD1ZfI50?si=zNdfEqbRE3XbdZ-O", 
    },
    {
      id: 2,
      title: "Live Concert",
      date: "June 15, 2025",
      location: "Hyde Park, London",
      image: "https://img.koreatimes.co.kr/upload/newsV2/images/202006/e01a1a168d084d72b6337685a9f78411.jpg/dims/resize/740/optimize",
      youtubeLink: "https://youtu.be/IDdLFC5fYts?si=SV_SjvPoEC7WyZ2N", 
    },
    {
      id: 3,
      title: "Fan Meet and Greet",
      date: "August 10, 2025",
      location: "Seoul Olympic Stadium, Seoul",
      image: "https://assets.change.org/photos/5/em/xj/aNeMxJPlXHUNfnm-800x450-noPad.jpg?1515899628",
      youtubeLink: "https://youtu.be/QXtsKkSsZUA?si=DVFxdK6ZlY_q95I4", 
    },
  ];

  return (
    <div>
      <style>
        {`
          .events-container {
            text-align: center;
            padding: 3rem 1rem;
            background: #CBC3E3;
            color: #fff;
          }
          .events-container h1 {
            color: #000;
          }
          .event-card {
            margin: 2rem auto;
            padding: 1.1rem;
            background: #151515;
            border-radius: 15px;
            max-width: 1000px;
            text-align: left;
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
          }
          .event-card img {
            width: 100%;
            border-radius: 5px;
            margin-bottom: 1.5rem;
            max-height: 500px;
            object-fit: cover;
          }
          .event-card h3 {
            color: #00caeb;
            margin: 1rem 0;
          }
          .event-card p {
            margin: 0.5rem 0;
          }
          .youtube-link {
            margin-top: 1rem;
            color: #ff0000;
            font-size: 1.2rem;
            text-decoration: none;
          }
          .youtube-link:hover {
            text-decoration: underline;
          }
        `}
      </style>
      <div className="events-container">
        <h1>Upcoming Events</h1>
        {events.map((event) => (
          <div className="event-card" key={event.id}>
            <img src={event.image} alt={event.title} />
            <h3>{event.title}</h3>
            <p>
              <strong>Date:</strong> {event.date}
            </p>
            <p>
              <strong>Location:</strong> {event.location}
            </p>
            <a
              href={event.youtubeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="youtube-link"
            >
              Watch on YouTube
            </a>
          </div>
        ))}


      </div>
    </div>
  );
};

export default Events;
