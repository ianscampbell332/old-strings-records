import type { Metadata } from 'next'
import { LegalPage } from '../legal-page'

export const metadata: Metadata = {
  title: 'Privacy Policy · Old Strings Records',
  description:
    'How Old Strings Records collects, uses, and protects your information.',
}

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      lastUpdated="April 9, 2026"
    >
      <p>
        Old Strings Records (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is an independent record label based in Dover, Vermont. This Privacy Policy explains what information we collect when you visit <a href="https://oldstringsrecords.com">oldstringsrecords.com</a>, subscribe to our mailing list, or otherwise interact with us, and how we use and protect that information.
      </p>
      <p>
        We believe in collecting only what we actually need. We do not sell your personal information, and we do not share it with third parties except as described below.
      </p>

      <h2>Information we collect</h2>

      <h3>Information you give us</h3>
      <p>
        When you sign up for our mailing list or contact us, we collect the information you provide — typically your name and email address. If you purchase merchandise or music directly from us, our payment processor collects the billing and shipping details needed to fulfill your order; we never see or store full payment card numbers.
      </p>

      <h3>Information collected automatically</h3>
      <p>
        When you visit our website, we collect basic analytics data to understand how the site is used. This includes things like pages viewed, time on page, referring source, approximate location (city / region), and device type. We use <strong>PostHog</strong> as our analytics provider. We do not use analytics data to identify you personally.
      </p>

      <h3>Information from social platforms</h3>
      <p>
        If you interact with us on Facebook, Instagram, or other social platforms, those platforms may share limited information with us — such as your public profile, engagement with our posts, and basic audience insights. This information is governed by the privacy policies of those platforms in addition to this one. We use Meta&rsquo;s Graph API to read performance data on our own posts and to publish content to our own accounts; we do not access information about users who have not interacted with our content.
      </p>

      <h2>How we use information</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Send you emails you&rsquo;ve asked to receive (new releases, show announcements, updates from the label)</li>
        <li>Fulfill orders you&rsquo;ve placed with us</li>
        <li>Understand which parts of our site and content are resonating so we can do more of what works</li>
        <li>Respond to questions, feedback, or requests you send us</li>
        <li>Comply with legal obligations</li>
      </ul>

      <h2>Email and marketing</h2>
      <p>
        Our mailing list is powered by <strong>Mission Suite</strong>. Every email we send includes an unsubscribe link at the bottom. Clicking it immediately removes you from the list. You can also email us at any time and ask to be removed — no questions asked.
      </p>

      <h2>How we share information</h2>
      <p>
        We do not sell, rent, or trade your personal information. We share information only with the service providers we rely on to run the label — for example, our email platform, our analytics provider, our payment processor, and our hosting provider. These providers are contractually required to handle your information securely and only for the purposes we specify.
      </p>
      <p>
        We may disclose information if required by law, to protect our rights or the safety of others, or in connection with a business transfer (e.g. if the label is sold or restructured).
      </p>

      <h2>Your rights and choices</h2>
      <p>
        You have the right to:
      </p>
      <ul>
        <li><strong>Access</strong> the personal information we hold about you</li>
        <li><strong>Correct</strong> information that&rsquo;s inaccurate or out of date</li>
        <li><strong>Delete</strong> your personal information (see our <a href="/data-deletion">Data Deletion page</a> for instructions)</li>
        <li><strong>Unsubscribe</strong> from our mailing list at any time</li>
        <li><strong>Object</strong> to how we&rsquo;re using your information</li>
      </ul>
      <p>
        To exercise any of these rights, email us at <a href="mailto:dataprotection@oldstringsrecords.com">dataprotection@oldstringsrecords.com</a>. We&rsquo;ll respond within 30 days.
      </p>

      <h2>Data retention</h2>
      <p>
        We keep your information only as long as we need it for the purposes described above. Mailing list data is retained until you unsubscribe. Order records are retained as long as required for tax and accounting purposes. Analytics data is retained in aggregated form.
      </p>

      <h2>Security</h2>
      <p>
        We take reasonable steps to protect your information from loss, misuse, and unauthorized access. No method of transmission over the internet is perfectly secure, but we work with established providers and follow industry-standard practices.
      </p>

      <h2>Children</h2>
      <p>
        Our website and mailing list are not directed to children under 13. We do not knowingly collect personal information from children under 13. If you believe we have, please contact us and we will delete it.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this Privacy Policy from time to time. When we do, we&rsquo;ll update the &ldquo;Last updated&rdquo; date at the top of this page. Material changes will be communicated via email to our subscribers or a notice on our site.
      </p>

      <h2>Contact</h2>
      <p>
        Questions, concerns, or requests related to your privacy can be sent to{' '}
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
