import React from "react";

const Events = () => {
  const events = [
    {
      _id: "1",
      title: "BTS World Tour 2025",
      date: "2025-09-15T20:00:00Z",
      location: "United States, New York",
      image:
        "https://phinf.wevpstatic.net/MjAyNTAyMTdfMTU3/MDAxNzM5NzczODc2NzAy.oOiaE7k-w7I9bZbs-q7bW5b4n1ukRR5GXuCKGk1eUVYg.Qr_mND1Ix2EbqaMcSwYHPP7emK3bT_H69U6gxlmYjogg.JPEG/83019882177247ceb4abf3a0ddb9250a867.jpg?type=f960_540",
      youtubeLink: "//www.youtube.com/embed/YchqGFJ_ziA?si=iJqMPNeBspdUhKnx",
      description: "This is a last year tour video of BTS World Tour.",
    },
    {
      _id: "2",
      title: "BTS Live in Concert",
      date: "2025-10-01T19:00:00Z",
      location: "South Korea, Seoul",
      image:
        "https://cdn.celluloidjunkie.com/wp-content/uploads/2022/02/16195818/BTS-Permission-To-Dance-Trafalgar-Releasing.jpg",
      youtubeLink: "//www.youtube.com/embed/Iq6RdCTLBd8?si=YhkgO1j0L00zyOZP",
      description: "This is a last year live concert video.",
    },
    {
      _id: "3",
      title: "BTS ARMY Fest 2025",
      date: "2025-12-05T18:00:00Z",
      location: "Los Angeles, California",
      image:
        "https://images.moneycontrol.com/static-mcnews/2024/07/20240709160452_Slideshow-14.jpg",
      youtubeLink: "//www.youtube.com/embed/RFYNuSEpFf8?si=H6hRL-8UMZecgCn4",
      description: "This is a last year ARMY Festa event highlight.",
    },
  ];

  return (
    <div>
      <style>{`
          .events-container {
            text-align: center;
            padding: 3rem 1rem;
            background: #CBC3E3;
            color: #fff;
          }
          .events-container h1 {
            color: black;
          }
          .event-card {
            margin: 3rem auto;
            padding: 2rem;
            background: #151515;
            border-radius: 15px;
            max-width: 1100px;
            text-align: left;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
          }
          .event-card img {
            width: 100%;
            border-radius: 5px;
            margin-bottom: 1.5rem;
            max-height: 600px;
            object-fit: cover;
          }
          .event-card h3 {
            color: #00caeb;
            margin: 1.5rem 0;
          }
          .event-card p {
            margin: 1rem 0;
          }
          .video-frame {
            margin-top: 1rem;
            width: 100%;
            height: 400px;
            border: none;
            border-radius: 10px;
          }
          .description {
            margin-top: 1rem;
            font-style: italic;
            color: #ccc;
          }
        `}</style>

      <div className="events-container">
        <h1>Upcoming Events</h1>
        {events.length === 0 ? (
          <p>No upcoming events available.</p>
        ) : (
          events.map((event) => {
            // Since your links are already embed format, just prepend https: if missing
            const embedLink = event.youtubeLink.startsWith("http")
              ? event.youtubeLink
              : "https:" + event.youtubeLink;

            return (
              <div className="event-card" key={event._id}>
                <img src={event.image} alt={event.title} />
                <h3>{event.title}</h3>
                <p>
                  <strong>Date:</strong>{" "}
                  {new Date(event.date).toLocaleDateString()}
                </p>
                <p>
                  <strong>Location:</strong> {event.location}
                </p>
                <iframe
                  className="video-frame"
                  src={embedLink}
                  title={event.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <p className="description">{event.description}</p>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Events;
