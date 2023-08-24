import type { Podcast } from '../models/Podcast'

function PodcastRenderer(props: { podcast: Podcast }) {
  const podcast = props.podcast
  const maxWidth = '48rem'

  return <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{podcast.title}</title>
      {podcast.rss
        && <link
          type="application/rss+xml"
          href={podcast.rss}
          title={podcast.title}
          rel="alternate"
        />
      }
      <meta name="viewport" content="width=device-width" />
      <meta name="apple-itunes-app" content="app-id=993490336" />
      <style>
        {
          `*,
          ::before,
          ::after {
            box-sizing: border-box;
            border-width: 0;
            border-style: solid;
            border-color: #e5e7eb;
          }
          .prose {
            line-height: 1.6rem;
          }
          .prose a {
            color: black;
          }
          .prose h1, .prose h2, .prose h3, .prose h4, .prose h5, .prose h6 {
            margin-top: 1.5rem;
            margin-bottom: 1.5rem;
          }
          .prose p {
            margin-top: 1.5rem;
            margin-bottom: 1.5rem;
          }
          .prose img {
            margin-top: 1.5rem;
            margin-bottom: 1.5rem;
            border-radius: 0.375rem;
            margin-left: auto;
            margin-right: auto;
          }
          .prose br {
            display: none;
          }`
        }
      </style>
    </head>
    <body style={{
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      fontFamily: 'Satoshi, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      margin: 0,
      lineHeight: 'inherit',
      backgroundColor: 'gray',
    }}>
      <section style={{
        position: 'relative',
        display: 'flex',
        paddingTop: '4rem',
        paddingBottom: '4rem',
      }}>
        <div style={{
          position: 'relative',
          zIndex: 10,
          margin: 'auto',
          maxWidth,
        }}>
          <div style={{
            display: 'flex',
          }}>
            <img
              style={{
                margin: 'auto',
                height: '16rem',
                width: '16rem',
                borderRadius: '0.375rem',
                border: '0.125rem solid #e5e7eb',
                objectFit: 'cover',
                boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
              }}
              alt={podcast.title}
              src={podcast.image}
            />
          </div>
          <div style={{
            marginTop: '1.5rem',
            paddingLeft: '2.5rem',
            paddingRight: '2.5rem',
            color: 'white',
          }}>
            <h1
              style={{
                textAlign: 'center',
                fontSize: '1.25rem',
                fontWeight: 600,
              }}
            >
              {podcast.title}
            </h1>
            <p style={{
              marginTop: '1.25rem',
              lineHeight: '1.5rem',
            }}>
              {podcast.description}
            </p>
            <a
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: 'auto',
                marginTop: '2rem',
                padding: '0.5rem 1rem',
                borderRadius: '0.375rem',
                backgroundColor: 'white',
                boxShadow: '0 1px 2px 0 rgb(0 0 0 / 5%)',
                fontSize: '0.875rem',
                fontWeight: 500,
                lineHeight: '1.25rem',
                color: 'black',
                textDecoration: 'none',
                width: 'max-content',
              }}
              href={podcast.link}
            >
              <svg
                style={{
                  height: '1rem',
                  width: '1rem',
                  fill: 'black',
                  marginRight: '0.5rem',
                }}
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M11 22v-8.275q-.45-.275-.725-.712T10 12q0-.825.588-1.413T12 10q.825 0 1.413.588T14 12q0 .575-.275 1.025t-.725.7V22h-2Zm-5.9-2.75q-1.425-1.375-2.262-3.238T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.15-.838 4.025T18.9 19.25l-1.4-1.4q1.15-1.1 1.825-2.613T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 1.725.675 3.225t1.85 2.6L5.1 19.25Zm2.825-2.825q-.875-.825-1.4-1.963T6 12q0-2.5 1.75-4.25T12 6q2.5 0 4.25 1.75T18 12q0 1.325-.525 2.475t-1.4 1.95L14.65 15q.625-.575.988-1.35T16 12q0-1.65-1.175-2.825T12 8q-1.65 0-2.825 1.175T8 12q0 .9.363 1.663T9.35 15l-1.425 1.425Z" /></svg>
              <div>S'abonner au podcast</div>
            </a>
          </div>
        </div>
        <img
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: -10,
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            filter: 'blur(1rem)',
          }}
          src={podcast.image}
        />
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgb(75 85 99 / 0.5)',
        }}></div>
      </section>
      <section style={{
        position: 'relative',
        zIndex: 10,
        marginTop: '-1rem',
        backgroundColor: 'rgb(75 85 99 / 0.5)',
        paddingLeft: '4rem',
        paddingRight: '4rem',
        paddingTop: '1.5rem',
        paddingBottom: '1.5rem',
        backgroundImage: 'linear-gradient(to bottom, #c7d2fe, #e9d5ff, #fbcfe8)',
        minHeight: 'calc(100vh - 4rem)',
      }}>
        <ul style={{
          listStyle: 'none',
          margin: 0,
          padding: 0,
        }}>
          {podcast.episodes?.map((episode, i) => {
            return <li
              style={{
                marginTop: '1.5rem',
                marginBottom: '1.5rem',
                marginInline: 'auto',
                width: '100%',
                maxWidth,
                borderRadius: '0.375rem',
                backgroundColor: 'white',
                padding: '2.5rem',
                boxShadow: '0 1px 2px 0 rgb(0 0 0 / 5%)',
              }}
              key={i}>
              <a
                href={episode.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: 'none',
                  color: '#428bca',
                }}
              >
                <h2
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    marginTop: 0,
                  }}
                >
                  {episode.title}
                </h2>
              </a>
              <p style={{
                marginTop: '0.25rem',
                fontSize: '0.75rem',
              }}>
                {episode.author} / Posté le {episode.pubDate}
              </p>
              <div
                style={{
                  marginTop: '1.5rem',
                }}
                className='prose'
              >
                {episode.description && <div
                  dangerouslySetInnerHTML={{ __html: episode.description }}
                />}
              </div>
              <hr />
              <div style={{
                marginTop: '0.75rem',
              }}>
                <div style={{
                  fontSize: '0.75rem',
                }}>Tous droits réservés {podcast.copyright}</div>
                <div style={{
                  marginTop: '1.25rem',
                }}>
                  <a
                    style={{
                      display: 'block',
                      fontSize: '0.75rem',
                    }}
                    href={episode.enclosure?.url}
                    target="_blank"
                    download
                  >
                    Télécharger l'épisode
                  </a>
                  <div style={{
                    marginTop: '1.25rem',
                  }}>
                    <audio
                      style={{
                        width: '100%',
                      }}
                      controls
                      preload="none"
                    >
                      <source type="audio/mpeg" src={episode.enclosure?.url} />
                    </audio>
                  </div>
                </div>
              </div>
            </li>
          })}
        </ul>
      </section>
    </body>
  </html >
}

export default PodcastRenderer
