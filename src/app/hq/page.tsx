export default function HQ() {
  return (
    <>
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
        textAlign: 'center',
      }}>

        <div style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '10px',
          fontWeight: 500,
          letterSpacing: '0.35em',
          textTransform: 'uppercase',
          color: 'var(--ochre)',
          marginBottom: '24px',
        }}>
          Old Strings Records
        </div>

        <div style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(36px, 6vw, 72px)',
          fontWeight: 900,
          color: 'var(--cream)',
          letterSpacing: '-0.02em',
          lineHeight: 1,
        }}>
          HQ
        </div>

        <div style={{
          width: '40px',
          height: '1px',
          background: 'var(--ochre)',
          margin: '32px auto',
        }} />

        <div style={{
          fontFamily: "'Libre Baskerville', serif",
          fontSize: '14px',
          fontStyle: 'italic',
          color: 'var(--mist)',
          marginBottom: '16px',
        }}>
          Artist management platform — coming soon.
        </div>

        <div style={{
          fontSize: '12px',
          color: 'rgba(122, 140, 125, 0.5)',
          letterSpacing: '0.05em',
        }}>
          For access inquiries: <a href="mailto:ian@oldstringsrecords.com" style={{ color: 'var(--ochre)', textDecoration: 'none' }}>ian@oldstringsrecords.com</a>
        </div>

      </main>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  )
}
