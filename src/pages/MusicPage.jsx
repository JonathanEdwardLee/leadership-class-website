import React from 'react';
import { Container, Tabs, Tab } from 'react-bootstrap';
import '../styles/MusicPage.css';

const MusicPage = () => {
  return (
    <Container className="music-page">
      <h2 className="text-center my-5">Listen to Our Music</h2>
      <Tabs defaultActiveKey="bandcamp" id="music-tabs" className="mb-3 custom-tabs">
        <Tab eventKey="bandcamp" title="Bandcamp" className="custom-tab">
          <div className="embed-container">
            <iframe 
              style={{ border: '0', width: '100%', height: '472px' }} 
              src="https://bandcamp.com/EmbeddedPlayer/album=1843728153/size=large/bgcol=333333/linkcol=e99708/artwork=none/transparent=true/" 
              seamless
              title="Bandcamp">
              <a href="https://leadershipclass.bandcamp.com/album/demos-we-are-recording-ourselves-for-cool-people-to-listen-to">
                Demos We Are Recording Ourselves For Cool People To Listen To by Leadership Class
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
              title="Spotify">
            </iframe>
          </div>
        </Tab>
        <Tab eventKey="amazon" title="Amazon Music" className="custom-tab">
          <div className="embed-container">
            <iframe 
              id='AmazonMusicEmbedB09QNYXHHG' 
              src='https://music.amazon.com/embed/B09QNYXHHG/?id=h02geHzt3M&marketplaceId=ATVPDKIKX0DER&musicTerritory=US' 
              width='100%' 
              height='352px' 
              frameBorder='0' 
              style={{ borderRadius: '20px' }}
              title="Amazon Music">
            </iframe>
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
              title="Apple Music">
            </iframe>
          </div>
        </Tab>
      </Tabs>
    </Container>
  );
}

export default MusicPage;
