export default function Home() {
  return (
    <>
      {/* Grain overlay */}
      <div style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '100%', height: '100%',
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E")`,
        pointerEvents: 'none',
        zIndex: 1000,
        opacity: 0.4,
      }} />

      <main style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 40px',
        position: 'relative',
        textAlign: 'center',
      }}>

        {/* Eyebrow */}
        <div style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '11px',
          fontWeight: 500,
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: 'var(--ochre)',
          marginBottom: '32px',
          animation: 'fadeUp 0.8s ease forwards 0.2s',
          opacity: 0,
        }}>
          Independent Label
        </div>

        {/* Wordmark */}
        <div style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(52px, 9vw, 120px)',
          fontWeight: 900,
          lineHeight: 0.9,
          color: 'var(--cream)',
          letterSpacing: '-0.02em',
          animation: 'fadeUp 0.8s ease forwards 0.4s',
          opacity: 0,
        }}>
          Old Strings
        </div>
        <div style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(28px, 5vw, 66px)',
          fontWeight: 700,
          fontStyle: 'italic',
          color: 'var(--ochre)',
          letterSpacing: '0.08em',
          marginTop: '8px',
          animation: 'fadeUp 0.8s ease forwards 0.4s',
          opacity: 0,
        }}>
          Records
        </div>

        {/* Rule */}
        <div style={{
          width: '60px',
          height: '1px',
          background: 'var(--ochre)',
          margin: '40px auto',
          animation: 'fadeIn 0.8s ease forwards 0.6s',
          opacity: 0,
        }} />

        {/* Tagline */}
        <div style={{
          fontFamily: "'Libre Baskerville', serif",
          fontSize: 'clamp(16px, 2vw, 22px)',
          fontStyle: 'italic',
          color: 'var(--mist)',
          letterSpacing: '0.05em',
          marginBottom: '32px',
          animation: 'fadeUp 0.8s ease forwards 0.6s',
          opacity: 0,
        }}>
          Done waiting.
        </div>

        {/* Description */}
        <div style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '14px',
          fontWeight: 300,
          color: 'var(--cream-dark)',
          lineHeight: 1.7,
          maxWidth: '480px',
          animation: 'fadeUp 0.8s ease forwards 0.8s',
          opacity: 0,
        }}>
          An independent label built for artists who stopped questioning and started believing.
          Built on the conviction that the best music comes from people who finally went all in.
        </div>

        {/* Footer */}
        <div style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '10px',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          color: 'rgba(122, 140, 125, 0.4)',
          whiteSpace: 'nowrap',
          animation: 'fadeIn 1s ease forwards 1s',
          opacity: 0,
        }}>
          Old Strings Records · Dover, VT
        </div>
      </main>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </>
  )
}
