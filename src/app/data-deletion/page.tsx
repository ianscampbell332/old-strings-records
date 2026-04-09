import type { Metadata } from 'next'
import { LegalPage } from '../legal-page'

export const metadata: Metadata = {
  title: 'Data Deletion · Old Strings Records',
  description:
    'How to request deletion of your personal data from Old Strings Records.',
}

export default function DataDeletionPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Data Deletion Instructions"
      lastUpdated="April 9, 2026"
    >
      <p>
        Old Strings Records respects your right to control your personal information. If you&rsquo;d like us to delete the data we hold about you, follow the steps below. This page also serves as our official data deletion instructions for Meta (Facebook and Instagram) platform requirements.
      </p>

      <h2>What data we may have</h2>
      <p>
        Depending on how you&rsquo;ve interacted with us, we may hold:
      </p>
      <ul>
        <li>Your name and email address (if you&rsquo;ve subscribed to our mailing list)</li>
        <li>Order history and shipping information (if you&rsquo;ve purchased merch or music directly from us)</li>
        <li>Public engagement data from our Facebook and Instagram accounts (comments, likes, shares, messages) retrieved via Meta&rsquo;s Graph API</li>
        <li>Any correspondence you&rsquo;ve sent us directly</li>
      </ul>
      <p>
        For full details on what we collect and why, see our <a href="/privacy">Privacy Policy</a>.
      </p>

      <h2>How to request deletion</h2>
      <p>
        To request deletion of your personal data, email us at{' '}
        <a href="mailto:dataprotection@oldstringsrecords.com">dataprotection@oldstringsrecords.com</a>{' '}
        with the subject line <strong>&ldquo;Data Deletion Request&rdquo;</strong>.
      </p>
      <p>
        In your email, please include:
      </p>
      <ul>
        <li>Your full name</li>
        <li>The email address associated with your account, mailing list subscription, or order</li>
        <li>If applicable, your Facebook or Instagram username / handle</li>
        <li>A brief description of what you&rsquo;d like deleted (e.g. &ldquo;all data,&rdquo; &ldquo;mailing list only,&rdquo; &ldquo;social engagement data&rdquo;)</li>
      </ul>

      <h2>What happens next</h2>
      <p>
        We&rsquo;ll confirm receipt of your request within a few business days, and complete deletion within <strong>30 days</strong>. We&rsquo;ll send a final confirmation once it&rsquo;s done.
      </p>
      <p>
        Please note:
      </p>
      <ul>
        <li>Some information may be retained where required by law (e.g. tax records for completed orders)</li>
        <li>Deleting your data from our systems will not remove content you&rsquo;ve posted publicly on Facebook, Instagram, or other third-party platforms — you&rsquo;ll need to remove that content directly through those platforms</li>
        <li>If you only want to unsubscribe from our mailing list, you can click the unsubscribe link at the bottom of any email we send — no need to submit a full deletion request</li>
      </ul>

      <h2>Meta platform data</h2>
      <p>
        Old Strings Records uses Meta&rsquo;s Graph API to manage and analyze our own Facebook and Instagram accounts. We do not collect data about Meta users who have not publicly interacted with our content. If you&rsquo;ve interacted with our posts and would like any related engagement data deleted from our records, include that in your request above.
      </p>
      <p>
        If you&rsquo;d also like to remove Old Strings Records&rsquo; access to your Facebook data at the platform level, you can do so directly in your Facebook settings under <em>Settings &amp; Privacy → Settings → Apps and Websites</em>.
      </p>

      <h2>Questions</h2>
      <p>
        If you have any questions about this process or about how we handle your data, reach out any time at{' '}
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
