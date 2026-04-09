import Link from 'next/link'
import type { ReactNode } from 'react'

interface LegalPageProps {
  eyebrow: string
  title: string
  lastUpdated: string
  children: ReactNode
}

/**
 * Shared wrapper for long-form legal pages (privacy, terms, data deletion).
 * Keeps the Old Strings visual language but optimizes for readability.
 */
export function LegalPage({ eyebrow, title, lastUpdated, children }: LegalPageProps) {
  return (
    <>
      {/* Grain overlay — matches home page */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E")`,
          pointerEvents: 'none',
          zIndex: 1000,
          opacity: 0.4,
        }}
      />

      <main
        style={{
          minHeight: '100vh',
          padding: '80px 24px 120px',
          position: 'relative',
        }}
      >
        <div
          style={{
            maxWidth: '720px',
            margin: '0 auto',
          }}
        >
          {/* Back to home */}
          <Link
            href="/"
            style={{
              display: 'inline-block',
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--mist)',
              textDecoration: 'none',
              marginBottom: '48px',
            }}
          >
            ← Old Strings Records
          </Link>

          {/* Eyebrow */}
          <div
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'var(--ochre)',
              marginBottom: '16px',
            }}
          >
            {eyebrow}
          </div>

          {/* Title */}
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(38px, 6vw, 62px)',
              fontWeight: 700,
              lineHeight: 1.05,
              color: 'var(--cream)',
              letterSpacing: '-0.01em',
              marginBottom: '16px',
            }}
          >
            {title}
          </h1>

          {/* Last updated */}
          <div
            style={{
              fontFamily: "'Libre Baskerville', serif",
              fontStyle: 'italic',
              fontSize: '14px',
              color: 'var(--mist)',
              marginBottom: '40px',
            }}
          >
            Last updated {lastUpdated}
          </div>

          {/* Rule */}
          <div
            style={{
              width: '60px',
              height: '1px',
              background: 'var(--ochre)',
              marginBottom: '48px',
            }}
          />

          {/* Body */}
          <div
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '15px',
              fontWeight: 300,
              lineHeight: 1.75,
              color: 'var(--cream-dark)',
            }}
            className="legal-body"
          >
            {children}
          </div>

          {/* Footer */}
          <div
            style={{
              marginTop: '80px',
              paddingTop: '32px',
              borderTop: '1px solid rgba(122, 140, 125, 0.2)',
              fontSize: '10px',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'rgba(122, 140, 125, 0.6)',
              textAlign: 'center',
            }}
          >
            Old Strings Records · Dover, VT
          </div>
        </div>
      </main>

      <style>{`
        .legal-body h2 {
          font-family: 'Playfair Display', serif;
          font-size: 24px;
          font-weight: 700;
          color: var(--cream);
          margin: 48px 0 16px;
          letter-spacing: -0.01em;
        }
        .legal-body h3 {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--ochre);
          margin: 32px 0 12px;
        }
        .legal-body p {
          margin-bottom: 18px;
        }
        .legal-body ul {
          margin: 0 0 18px 0;
          padding-left: 20px;
        }
        .legal-body li {
          margin-bottom: 8px;
        }
        .legal-body a {
          color: var(--ochre);
          text-decoration: underline;
          text-decoration-color: rgba(200, 133, 42, 0.4);
          text-underline-offset: 3px;
        }
        .legal-body a:hover {
          text-decoration-color: var(--ochre);
        }
        .legal-body strong {
          color: var(--cream);
          font-weight: 500;
        }
      `}</style>
    </>
  )
}
