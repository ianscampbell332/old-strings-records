import type { Metadata } from 'next'
import { LegalPage } from '../legal-page'

export const metadata: Metadata = {
  title: 'Terms of Service · Old Strings Records',
  description:
    'The terms and conditions for using the Old Strings Records website.',
}

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Service"
      lastUpdated="April 9, 2026"
    >
      <p>
        Welcome to Old Strings Records. These Terms of Service (&ldquo;Terms&rdquo;) govern your use of <a href="https://oldstringsrecords.com">oldstringsrecords.com</a> (the &ldquo;Site&rdquo;) and any services, content, or merchandise we offer through it. By using the Site, you agree to these Terms. If you don&rsquo;t agree, please don&rsquo;t use the Site.
      </p>

      <h2>Who we are</h2>
      <p>
        Old Strings Records is an independent record label based in Dover, Vermont. In these Terms, &ldquo;we,&rdquo; &ldquo;us,&rdquo; and &ldquo;our&rdquo; refer to Old Strings Records. &ldquo;You&rdquo; refers to anyone using the Site.
      </p>

      <h2>Use of the Site</h2>
      <p>
        You may use the Site for personal, non-commercial purposes. You agree not to:
      </p>
      <ul>
        <li>Use the Site in any way that violates applicable law</li>
        <li>Attempt to interfere with, disrupt, or compromise the Site&rsquo;s security or functionality</li>
        <li>Scrape, harvest, or collect information about other users</li>
        <li>Use automated systems (bots, crawlers) to access the Site in a way that sends more requests than a human could reasonably make</li>
        <li>Impersonate any person or misrepresent your affiliation with any person or entity</li>
        <li>Upload or transmit any viruses, malware, or harmful code</li>
      </ul>

      <h2>Intellectual property</h2>
      <p>
        All content on the Site — including music, lyrics, recordings, artwork, photography, videos, logos, text, and design — is owned by Old Strings Records or our artists and licensors, and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, create derivative works from, publicly display, or commercially exploit any of this content without our prior written permission.
      </p>
      <p>
        Streaming or sharing our music through official platforms (Spotify, Apple Music, Bandcamp, YouTube, etc.) under those platforms&rsquo; terms is encouraged and welcomed. That&rsquo;s the whole point.
      </p>

      <h2>Purchases and orders</h2>
      <p>
        If you purchase music, merchandise, or other items directly from us through the Site, those purchases are subject to the descriptions, prices, and availability shown at the time of order. We reserve the right to refuse or cancel any order, including after an order has been submitted, if we suspect fraud, pricing errors, or other issues. If we cancel an order, we&rsquo;ll refund any payment you&rsquo;ve made.
      </p>
      <p>
        Shipping, returns, and refunds for physical merchandise are handled on a case-by-case basis. If something arrives damaged or doesn&rsquo;t show up, email us and we&rsquo;ll make it right.
      </p>

      <h2>User submissions</h2>
      <p>
        If you send us demos, ideas, feedback, or other materials (whether through the Site, email, or social media), you grant us a non-exclusive, royalty-free, worldwide license to use, reproduce, and share that material in connection with running the label — with the understanding that unsolicited demos are not a commitment to sign, release, or promote anything. We don&rsquo;t take responsibility for similarities between submitted material and anything we independently develop or release.
      </p>

      <h2>Third-party links</h2>
      <p>
        The Site may contain links to third-party websites, services, or platforms (streaming services, social media, ticket vendors, etc.). We don&rsquo;t control those sites and aren&rsquo;t responsible for their content, policies, or practices. Following a link to a third-party site is at your own risk.
      </p>

      <h2>Disclaimers</h2>
      <p>
        The Site and its content are provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of any kind, express or implied. We don&rsquo;t guarantee that the Site will be uninterrupted, error-free, secure, or free of viruses. To the fullest extent permitted by law, we disclaim all warranties, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, Old Strings Records, its owners, employees, and affiliates will not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Site, even if we&rsquo;ve been advised of the possibility of such damages. Our total liability for any claim related to the Site or these Terms will not exceed the amount you paid us in the twelve months before the claim arose, or $100, whichever is greater.
      </p>

      <h2>Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless Old Strings Records and its affiliates from any claims, damages, losses, or expenses (including reasonable attorneys&rsquo; fees) arising out of your use of the Site, your violation of these Terms, or your violation of any rights of another party.
      </p>

      <h2>Governing law</h2>
      <p>
        These Terms are governed by the laws of the State of Vermont, without regard to conflict of law principles. Any disputes arising out of or related to these Terms or the Site will be resolved in the state or federal courts located in Vermont, and you consent to the jurisdiction of those courts.
      </p>

      <h2>Changes to these Terms</h2>
      <p>
        We may update these Terms from time to time. When we do, we&rsquo;ll update the &ldquo;Last updated&rdquo; date at the top of this page. Continued use of the Site after changes means you accept the updated Terms.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these Terms can be sent to{' '}
        <a href="mailto:dataprotection@oldstringsrecords.com">dataprotection@oldstringsrecords.com</a>.
      </p>
      <p>
        Old Strings Records
        <br />
        Dover, Vermont
        <br />
        United States
      </p>
    </LegalPage>
  )
}
