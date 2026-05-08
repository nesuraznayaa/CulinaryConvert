export default function Privacy() {
  const lastUpdated = "January 1, 2025";

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="text-center mb-10">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-500 bg-amber-50 px-3 py-1 rounded-full">Legal</span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mt-3 mb-2">Privacy Policy</h1>
        <p className="text-gray-400 text-xs">Last updated: {lastUpdated}</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100 space-y-8 text-sm text-gray-600 leading-relaxed">

        <section>
          <h2 className="text-lg font-bold text-gray-800 mb-3">1. Introduction</h2>
          <p>
            Welcome to <strong>CulinaryConvert</strong> ("we", "our", or "us"). We are committed to protecting your personal
            information and your right to privacy. This Privacy Policy explains how we collect, use, disclose,
            and safeguard your information when you visit our website <strong>culinaryconvert.app</strong> (the "Site").
          </p>
          <p className="mt-3">
            Please read this policy carefully. If you disagree with its terms, please discontinue use of our Site.
            We reserve the right to make changes to this Privacy Policy at any time. We will notify you of any
            changes by updating the "Last updated" date at the top of this policy.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-800 mb-3">2. Information We Collect</h2>
          <h3 className="font-semibold text-gray-700 mb-2">2.1 Information You Provide Voluntarily</h3>
          <p>
            We collect personal information that you voluntarily provide when you fill out our contact form.
            This may include:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Your name</li>
            <li>Your email address</li>
            <li>The content of your message</li>
          </ul>
          <p className="mt-3">
            We do not require account registration to use any feature of CulinaryConvert. All converter
            tools are available without providing any personal information.
          </p>

          <h3 className="font-semibold text-gray-700 mb-2 mt-4">2.2 Information Collected Automatically</h3>
          <p>
            When you visit our Site, we may automatically collect certain information, including:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>IP address (anonymized where applicable)</li>
            <li>Browser type and version</li>
            <li>Device type (desktop/mobile/tablet)</li>
            <li>Pages visited and time spent on each page</li>
            <li>Referring URL (the page you came from)</li>
            <li>Date and time of your visit</li>
          </ul>
          <p className="mt-3">
            This information is collected through cookies and similar tracking technologies, and may be
            processed by third-party analytics and advertising services (see Section 5).
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-800 mb-3">3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Respond to your contact form submissions and provide customer support</li>
            <li>Monitor and analyze usage patterns to improve the Site's functionality and content</li>
            <li>Detect and prevent fraud, abuse, and security issues</li>
            <li>Comply with legal obligations</li>
            <li>Display relevant advertisements through Google AdSense (see Section 5)</li>
          </ul>
          <p className="mt-3">
            We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties,
            except as described in this policy or where required by law.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-800 mb-3">4. Cookies</h2>
          <p>
            Cookies are small data files stored on your device. We use the following types of cookies:
          </p>
          <div className="mt-3 space-y-3">
            <div className="border border-gray-100 rounded-xl p-4">
              <h4 className="font-semibold text-gray-700">Strictly Necessary Cookies</h4>
              <p className="text-xs text-gray-500 mt-1">Required for the Site to function. They cannot be disabled. These include session management cookies.</p>
            </div>
            <div className="border border-gray-100 rounded-xl p-4">
              <h4 className="font-semibold text-gray-700">Analytics Cookies</h4>
              <p className="text-xs text-gray-500 mt-1">
                We may use Google Analytics to understand how visitors use our Site. These cookies collect
                information anonymously and report website trends without identifying individual visitors.
                You can opt out at: <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-amber-500 underline">tools.google.com/dlpage/gaoptout</a>
              </p>
            </div>
            <div className="border border-gray-100 rounded-xl p-4">
              <h4 className="font-semibold text-gray-700">Advertising Cookies</h4>
              <p className="text-xs text-gray-500 mt-1">
                We use Google AdSense to display advertisements. Google may use cookies to serve ads based on
                your prior visits to this or other websites. You can opt out of personalized advertising at:
                <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-amber-500 underline ml-1">google.com/settings/ads</a>
              </p>
            </div>
          </div>
          <p className="mt-3">
            You can control cookies through your browser settings. Disabling cookies may affect the functionality
            of the Site and the relevance of ads you see.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-800 mb-3">5. Third-Party Services</h2>
          <h3 className="font-semibold text-gray-700 mb-2">5.1 Google AdSense</h3>
          <p>
            We use Google AdSense to display advertisements on our Site. Google, as a third-party vendor,
            uses cookies (including the DoubleClick cookie) to serve ads based on your visits to this and
            other sites on the Internet. You may opt out of the use of the DoubleClick cookie for interest-based
            advertising by visiting{" "}
            <a href="https://www.google.com/ads/preferences/" target="_blank" rel="noopener noreferrer" className="text-amber-500 underline">
              Google Ads Settings
            </a>.
          </p>
          <p className="mt-3">
            Google's use of advertising cookies enables it and its partners to serve ads to you based on your
            visit to this site and/or other sites on the Internet. Google's privacy policy is available at{" "}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-amber-500 underline">
              policies.google.com/privacy
            </a>.
          </p>

          <h3 className="font-semibold text-gray-700 mb-2 mt-4">5.2 Google Analytics</h3>
          <p>
            We may use Google Analytics to analyze the use of our Site. Google Analytics gathers information
            about website use by means of cookies. The information gathered is used to create reports about
            the use of our Site. Google's privacy policy is available at the link above.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-800 mb-3">6. Data Retention</h2>
          <p>
            We retain contact form submissions for up to 12 months to allow us to respond to follow-up questions.
            After this period, the data is permanently deleted. Anonymized analytics data may be retained
            indefinitely in aggregate form.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-800 mb-3">7. Your Rights</h2>
          <p>Depending on your location, you may have the following rights:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li><strong>Access:</strong> The right to request a copy of the personal data we hold about you.</li>
            <li><strong>Rectification:</strong> The right to correct inaccurate or incomplete data.</li>
            <li><strong>Erasure:</strong> The right to request deletion of your personal data.</li>
            <li><strong>Objection:</strong> The right to object to our processing of your personal data.</li>
            <li><strong>Portability:</strong> The right to receive your data in a portable format.</li>
          </ul>
          <p className="mt-3">
            To exercise any of these rights, please contact us using the form on our{" "}
            <a href="/contact" className="text-amber-500 underline">Contact page</a>.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-800 mb-3">8. Children's Privacy</h2>
          <p>
            CulinaryConvert is not directed to children under the age of 13. We do not knowingly collect
            personal information from children. If you are a parent or guardian and believe your child has
            provided us with personal information, please contact us so we can delete it.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-800 mb-3">9. Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal information
            against unauthorized access, alteration, disclosure, or destruction. However, no method of
            transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee
            absolute security.
          </p>
        </section>

      </div>
    </main>
  );
}
