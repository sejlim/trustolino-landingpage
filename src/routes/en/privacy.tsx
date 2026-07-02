import { createFileRoute, Link } from '@tanstack/react-router'
import { dictionaries } from '@/lib/i18n'

export const Route = createFileRoute('/en/privacy')({
  component: PrivacyPolicy,
  head: () => ({
    meta: [
      { title: 'Privacy Policy | Trustolino' }
    ]
  })
})

function PrivacyPolicy() {
  const t = dictionaries.en

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
      <div className="prose prose-sm sm:prose-base prose-slate max-w-none text-muted-foreground prose-headings:text-foreground prose-a:text-primary">
        <h1>Privacy Policy</h1>
        <p>Status: July 2, 2026</p>
        
        <h2>Data Controller</h2>
        <p>
          Max Mustermann<br />
          Musterstraße 1<br />
          12345 Musterstadt<br />
          Germany
        </p>
        <p>Authorized Representative: Max Mustermann</p>
        <p>Email: <a href="mailto:info@trustolino.de">info@trustolino.de</a></p>
        <p>Legal Notice: <Link to="/en/legal">https://www.trustolino.de/en/legal</Link></p>

        <h2>General Information on Data Storage and Deletion</h2>
        <p>
          We delete personal data that we process in accordance with legal provisions as soon as the underlying consents are revoked or there are no longer any legal bases for the processing. This applies in cases where the original processing purpose ceases to exist or the data is no longer required. Exceptions to this rule exist if legal obligations or special interests require a longer retention or archiving of the data.
        </p>

        <h2>Security Measures</h2>
        <p>
          In accordance with legal requirements and taking into account the state of the art, implementation costs, and the nature, scope, circumstances, and purposes of processing, we take appropriate technical and organizational measures to ensure a level of protection appropriate to the risk.
        </p>
        <p>
          These measures include, in particular, ensuring the confidentiality, integrity, and availability of data by controlling physical and electronic access to the data as well as access, entry, transfer, ensuring availability, and separation. We have also established procedures to guarantee the exercise of data subject rights, the deletion of data, and responses to data endangerment.
        </p>
        <p>
          <strong>Securing online connections using TLS/SSL encryption (HTTPS):</strong> To protect the data of users transmitted via our online services from unauthorized access, we rely on TLS/SSL encryption technology.
        </p>

        <h2>Pre-registration Form</h2>
        <p>
          On our website, we offer the opportunity to pre-register as a caregiver for our app "Trustolino" via a pre-registration form without any obligation. In this context, we collect your data to send you news about the project and to send you an exclusive coupon code at release.
        </p>
        <ul>
          <li><strong>Data types processed:</strong> Inventory data (age, gender); Contact data (email address).</li>
          <li><strong>Data subjects:</strong> Users of our pre-registration form (caregivers).</li>
          <li><strong>Purposes of processing:</strong> Sending project news and distributing the coupon code.</li>
          <li><strong>Retention and Deletion:</strong> All data from the pre-registration will be automatically deleted 24 hours after the final mailing of the coupon codes (after the countdown expires) or immediately upon receiving a deletion request via email.</li>
          <li><strong>Legal Basis:</strong> Consent (Art. 6 (1) (a) GDPR) and pre-contractual measures (Art. 6 (1) (b) GDPR).</li>
        </ul>

        <h2>Provision of Online Services and Web Hosting</h2>
        <p>
          We process the data of users in order to be able to provide them with our online services. For this purpose, we process the IP address of the user, which is necessary to transmit the contents and functions of our online services to the browser or the terminal device of the users.
        </p>
        <ul>
          <li><strong>Data types processed:</strong> Usage data; Meta, communication, and procedural data; Protocol data.</li>
          <li><strong>Data subjects:</strong> Users (e.g., website visitors).</li>
          <li><strong>Purposes of processing and legitimate interests:</strong> Provision of our online offer and user-friendliness; Information technology infrastructure.</li>
          <li><strong>Retention and Deletion:</strong> Deletion in accordance with the "General Information on Data Storage and Deletion" section.</li>
          <li><strong>Legal Basis:</strong> Legitimate interests (Art. 6 (1) (f) GDPR).</li>
        </ul>
        <p><strong>Further details on processing:</strong></p>
        <ul>
          <li><strong>Provision of online services on rented storage space:</strong> We use storage space and computing capacity provided by Hetzner Online GmbH.</li>
          <li><strong>Collection of access data and log files:</strong> Access to our online offer is logged in server log files. These are stored for a maximum of 30 days and then deleted or anonymized.</li>
          <li><strong>Email dispatch and hosting:</strong> We use email servers to receive and send emails.</li>
        </ul>

        <h2>Plugins, Embedded Functions, and Content</h2>
        <p>
          We integrate functional and content elements into our online offer that are obtained from the servers of their respective providers. This requires the third-party providers to process the IP address of the users, as they could not send the content to the browser without it.
        </p>
        <ul>
          <li><strong>Google Fonts:</strong> We use Google Fonts for visually appealing fonts. IP addresses are not logged on Google servers and are not analyzed. Provider: Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland.</li>
        </ul>
      </div>
    </main>
  )
}
