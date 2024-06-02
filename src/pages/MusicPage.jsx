import React from 'react';
import { Helmet } from 'react-helmet';
import { Container, Tabs, Tab } from 'react-bootstrap';
import '../styles/MusicPage.css';

const MusicPage = () => {
  return (
    <Container className="music-page">
      <Helmet>
        <title>Listen to Our Music - Leadership Class</title>
        <meta name="description" content="Discover the latest music by Leadership Class, an alternative rock band from Springfield, MO. Listen on Bandcamp, Spotify, Apple Music, and Amazon Music." />
        <meta property="og:title" content="Listen to Our Music - Leadership Class" />
        <meta property="og:description" content="Discover the latest music by Leadership Class, an alternative rock band from Springfield, MO. Listen on Bandcamp, Spotify, Apple Music, and Amazon Music." />
        <meta property="og:image" content="https://leadershipclassmusic.com/assets/mushroom.lady.sticker.1000-DtV3Wjl_.png" />
        <meta property="og:url" content="https://leadershipclassmusic.com/music" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Listen to Our Music - Leadership Class" />
        <meta name="twitter:description" content="Discover the latest music by Leadership Class, an alternative rock band from Springfield, MO. Listen on Bandcamp, Spotify, Apple Music, and Amazon Music." />
        <meta name="twitter:image" content="https://leadershipclassmusic.com/assets/mushroom.lady.sticker.1000-DtV3Wjl_.png" />
      </Helmet>
      <h2 className="text-center my-5">Listen to Our Music</h2>
      <Tabs defaultActiveKey="bandcamp" id="music-tabs" className="mb-3 custom-tabs">
        <Tab eventKey="bandcamp" title="Bandcamp" className="custom-tab">
          <div className="embed-container">
            <iframe
              style={{ border: 0, width: '350px', height: '786px' }}
              src="https://bandcamp.com/EmbeddedPlayer/album=1556870638/size=large/bgcol=333333/linkcol=e32c14/transparent=true/"
              seamless
              title="Bandcamp"
            >
              <a href="https://leadershipclass.bandcamp.com/album/live-rehearsal-at-the-fungeon">
                Live Rehearsal At The Fungeon by Leadership Class
              </a>
            </iframe>
          </div>
        </Tab>
        <Tab eventKey="spotify" title="Spotify" className="custom-tab">
          <div className="embed-container">
            <iframe
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/artist/75gcjhF5ZNIkfZhh1xqbQ2?utm_source=generator&theme=0"
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Spotify"
            ></iframe>
          </div>
        </Tab>
        <Tab eventKey="amazon" title="Amazon Music" className="custom-tab">
          <div className="embed-container">
            <iframe
              id="AmazonMusicEmbedB09QNYXHHG"
              src="https://music.amazon.com/embed/B09QNYXHHG/?id=h02geHzt3M&marketplaceId=ATVPDKIKX0DER&musicTerritory=US"
              width="100%"
              height="352px"
              frameBorder="0"
              style={{ borderRadius: '20px' }}
              title="Amazon Music"
            ></iframe>
          </div>
        </Tab>
        <Tab eventKey="apple" title="Apple Music" className="custom-tab">
          <div className="embed-container">
            <iframe
              allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
              frameBorder="0"
              height="450"
              style={{ width: '100%', maxWidth: '660px', overflow: 'hidden', borderRadius: '10px' }}
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
              src="https://embed.music.apple.com/us/album/here-we-go-single/1659586681"
              title="Apple Music"
            ></iframe>
          </div>
        </Tab>
      </Tabs>
    </Container>
  );
}

export default MusicPage;
