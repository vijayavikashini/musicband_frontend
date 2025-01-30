import React from "react";

const Discography = () => 
  //fetching API
//   {
//   const [singles, setSingles] = useState([]);
//   const [collaborations, setCollaborations] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:5000/api/discography/singles")
//       .then((res) => res.json())
//       .then((data) => setSingles(data));

//     fetch("http://localhost:5000/api/discography/collaborations")
//       .then((res) => res.json())
//       .then((data) => setCollaborations(data));
//   }, []);

// }
  
//OBJ CODE
  {
  const singles = [
    {
      title: "Dynamite",
      type: "Single",
      releaseDate: "August 21, 2020",
      artwork: "https://m.media-amazon.com/images/M/MV5BYTIwYWIwNjctY2M3Mi00ZGQ4LTg2YWEtYTdjN2ViOTkxYTA4XkEyXkFqcGc@._V1_.jpg",
      streamingLink: "https://open.spotify.com/track/72IwoG8tqvIWV10IHjpNNA?si=cae676cc5c8e4f4e",
    },
    {
      title: "Butter",
      type: "Single",
      releaseDate: "May 21, 2021",
      artwork: "https://upload.wikimedia.org/wikipedia/en/d/db/BTS_-_Butter.png",
      streamingLink: "https://open.spotify.com/track/1mWdTewIgB3gtBM3TOSFhB?si=2ed59a7134ed46d6",
    },
    {
      title: "DNA",
      type: "Single",
      releaseDate: " September 18, 2017",
      artwork: "https://i1.sndcdn.com/artworks-000244087107-wz25d9-t500x500.jpg",
      streamLink:"https://open.spotify.com/track/2ngmiq1KoYn3x25VOmvd8F?si=152d6da8803b4642",
    },
    {
      title: "We are Bulletproof : The Eternal",
      type: "Single",
      releaseDate: "June 10, 2022",
      artwork: "https://ih1.redbubble.net/image.3860821793.2546/st,small,507x507-pad,600x600,f8f8f8.jpg",
      streamLink:"https://open.spotify.com/track/133ocfbXXG4HTk76qgSeUb?si=ac2ac3db394246ff",
    }
  ];

  const collaborations = [
    {
      title: "Boy With Luv (feat. Halsey)",
      type: "Collaboration",
      releaseDate: "April 12, 2019",
      artwork: "https://i.pinimg.com/originals/15/b6/3f/15b63f8f4c32ced043a5ed44bf7bafcd.jpg",
      streamingLink: "https://open.spotify.com/track/4a9tbd947vo9K8Vti9JwcI?si=5563fad706234823",
    },
    {
      title: "My Universe (feat. Coldplay)",
      type: "Collaboration",
      releaseDate: "September 24, 2021",
      artwork: "https://i.pinimg.com/1200x/1a/d6/1f/1ad61fa6027ec863fb240dbbd8583da7.jpg",
      streamingLink: "https://open.spotify.com/track/3FeVmId7tL5YN8B7R3imoM?si=1972e02bd3894e24",
    },
    {
      title: "Danger (feat. Thanh Bui)",
      type: "Collaboration",
      releaseDate: "August 20, 2014",
      artwork: "https://i1.sndcdn.com/artworks-000110065860-dfgldl-t500x500.jpg",
      streamingLink: "https://open.spotify.com/track/0zzRxtfO5FGxKdqq4OKmlw?si=dcecfb52cf4e4de7",
    },
    {
      title: "Idol (feat. Nicki Minaj)",
      type: "Collaboration",
      releaseDate: "August 24, 2018",
      artwork: "https://res.heraldm.com/content/image/2021/04/25/20210425000032_0.jpg",
      streamingLink: "https://open.spotify.com/track/1e8J3XClxZbFmvIHLI8CE4?si=714b030e213e44d5",
    },
  ];

  return (
    <div>
      <style>
        {`
          .discography-container {
            background: #000000;
            color: #000000;
            padding: 4rem 1rem;
            text-align: center;
            font-family: Arial, sans-serif;
          }
          .discography-container h1 {
            color: #fff;
            margin-bottom: 2rem;
            font-size: 500%;
            
          }
          .section {
            margin-bottom: 3rem;
          }
          .section h2 {
            color: #fff;
            margin-bottom: 3.5rem;
            font-size: 300%;
            
          }
          .items-container {
            display: flex;
            justify-content: center;
            gap: 2rem;
            flex-wrap: wrap; /* Ensure the items wrap to the next line if necessary */
          }
          .item {
            max-width: 250px;
            text-align: center;
            background: #CBC3E3;
            border-radius: 10px;
            padding: 2rem;
            box-shadow: 0 20px 10px rgba(0, 0, 0, 0.1);
          }
          .item img {
            max-width: 100%;
            border-radius: 10px;
            margin-bottom: 1rem;
          }
          .item h3 {
            margin: 0.5rem 0;
            font-size: 1.2rem;
            color: #000;
          }
          .streaming-link {
            display: inline-block;
            margin-top: 0.5rem;
            padding: 0.6rem 1rem;
            background-color: #060885;
            color: #fff;
            text-decoration: none;
            border-radius: 5px;
            transition: background-color 0.3s ease;
          }
          .streaming-link:hover {
            background-color: #df3f8b;
          }
        `}
      </style>
      <div className="discography-container">
        <h1>BTS Discography</h1>

        {/* Singles Section */}
        <div className="section">
          <h2>Singles</h2>
          <div className="items-container">
            {singles.map((single, index) => (
              <div key={index} className="item">
                <img src={single.artwork} alt={single.title} />
                <h3>{single.title}</h3>
                <p>Release Date: {single.releaseDate}</p>
                <a
                  className="streaming-link"
                  href={single.streamingLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Listen on Spotify
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Collaborations Section */}
        <div className="section">
          <h2>Collaborations</h2>
          <div className="items-container">
            {collaborations.map((collab, index) => (
              <div key={index} className="item">
                <img src={collab.artwork} alt={collab.title} />
                <h3>{collab.title}</h3>
                <p>Release Date: {collab.releaseDate}</p>
                <a
                  className="streaming-link"
                  href={collab.streamingLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Listen on Spotify
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discography;
