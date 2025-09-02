import Link from "next/link"

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-semibold text-balance">Terms of Service</h1>
      <p className="mt-3 text-slate-600">Last updated: {new Date().toLocaleDateString()}</p>

      <section className="mt-8 space-y-4 text-pretty leading-relaxed">
        <p>
          These Terms of Service (“Terms”) govern your access to and use of the services provided by Zyronetworks
          (“Zyronetworks,” “we,” “our,” or “us”), including the Songs API and any related websites, dashboards,
          documentation, and tools (collectively, the “Service”). By accessing or using the Service, you agree to be
          bound by these Terms. If you do not agree, do not use the Service.
        </p>

        <h2 className="mt-6 text-xl font-semibold">1. Eligibility</h2>
        <p>
          You must be at least 13 years of age (or the minimum age of digital consent in your jurisdiction) to use the
          Service. If you are using the Service on behalf of an organization, you represent and warrant that you have
          authority to bind that organization to these Terms.
        </p>

        <h2 className="mt-6 text-xl font-semibold">2. Accounts and Security</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>You are responsible for safeguarding your account credentials and API keys.</li>
          <li>You must notify us promptly of any unauthorized use of your account or API keys.</li>
          <li>You are responsible for all activity that occurs under your account.</li>
        </ul>

        <h2 className="mt-6 text-xl font-semibold">3. Acceptable Use</h2>
        <p>You agree not to misuse the Service. Prohibited activities include (without limitation):</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Attempting to gain unauthorized access to the Service or related systems.</li>
          <li>Interfering with or disrupting the integrity or performance of the Service.</li>
          <li>Using the Service for illegal, harmful, infringing, or abusive purposes.</li>
          <li>Reselling or sublicensing the Service without our prior written consent.</li>
          <li>Exceeding documented rate limits or evading usage restrictions.</li>
        </ul>

        <h2 className="mt-6 text-xl font-semibold">4. API Usage and Rate Limits</h2>
        <p>
          Your use of the API is subject to rate limits, quotas, and other usage policies described in our documentation
          or plan details. We may monitor usage to ensure compliance and may throttle, suspend, or terminate access that
          violates these Terms or harms the Service.
        </p>

        <h2 className="mt-6 text-xl font-semibold">5. Plans, Payments, and Taxes</h2>
        <p>
          If you purchase a paid plan, you agree to pay all applicable fees and taxes. Fees are non-refundable unless
          required by law or expressly stated otherwise. We may change pricing or features with reasonable notice; any
          changes will apply beginning with your next billing cycle unless otherwise stated.
        </p>

        <h2 className="mt-6 text-xl font-semibold">6. Ownership and License</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            We retain all rights, title, and interest in and to the Service, including content, software, and
            documentation.
          </li>
          <li>
            We grant you a limited, non-exclusive, non-transferable, revocable license to access and use the Service in
            accordance with these Terms.
          </li>
          <li>
            You retain ownership of your data. You grant us a license to process your data to provide and improve the
            Service, consistent with our Privacy Policy.
          </li>
        </ul>

        <h2 className="mt-6 text-xl font-semibold">7. Third-Party Services</h2>
        <p>
          The Service may depend on or integrate with third-party services. We are not responsible for the content,
          policies, or practices of third-party services, and your use of them is subject to their terms.
        </p>

        <h2 className="mt-6 text-xl font-semibold">8. Privacy</h2>
        <p>
          Your use of the Service is subject to our Privacy Policy. Please review it to understand how we collect, use,
          and protect your information. By using the Service, you consent to our privacy practices.
        </p>

        <h2 className="mt-6 text-xl font-semibold">9. Termination</h2>
        <p>
          We may suspend or terminate your access to the Service at any time, with or without notice, if we believe you
          have violated these Terms, pose a risk to the Service or other users, or as required by law. You may stop
          using the Service at any time. Upon termination, your right to access the Service will immediately cease.
        </p>

        <h2 className="mt-6 text-xl font-semibold">10. Disclaimers</h2>
        <p>
          THE SERVICE IS PROVIDED “AS IS” AND “AS AVAILABLE,” WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED,
          INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
          NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE.
        </p>

        <h2 className="mt-6 text-xl font-semibold">11. Limitation of Liability</h2>
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT WILL ZYRONETWORKS OR ITS AFFILIATES BE LIABLE FOR ANY
          INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS,
          REVENUES, DATA, OR GOODWILL, ARISING OUT OF OR RELATED TO YOUR USE OF THE SERVICE.
        </p>

        <h2 className="mt-6 text-xl font-semibold">12. Indemnification</h2>
        <p>
          You agree to indemnify, defend, and hold harmless Zyronetworks and its affiliates, officers, employees, and
          agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable
          attorneys’ fees) arising out of or in any way connected with your use of the Service or violation of these
          Terms.
        </p>

        <h2 className="mt-6 text-xl font-semibold">13. Changes to the Service or Terms</h2>
        <p>
          We may modify the Service or these Terms from time to time. If we make material changes, we will provide
          notice (for example, by posting an updated version on our website or dashboard). Your continued use of the
          Service after changes become effective constitutes your acceptance of the revised Terms.
        </p>

        <h2 className="mt-6 text-xl font-semibold">14. Governing Law</h2>
        <p>
          These Terms are governed by the laws applicable in your jurisdiction unless otherwise required by mandatory
          law. Any disputes will be subject to the exclusive jurisdiction of the courts located in the applicable venue,
          unless otherwise required by law.
        </p>

        <h2 className="mt-6 text-xl font-semibold">15. Contact</h2>
        <p>
          If you have questions about these Terms or the Service, contact us at{" "}
          <Link href="mailto:zyrosukuna@gmail.com" className="text-blue-600 hover:underline">
            zyrosukuna@gmail.com
          </Link>{" "}
          or via Telegram{" "}
          <Link href="https://t.me/MrZyro" className="text-blue-600 hover:underline">
            @MrZyro
          </Link>
          .
        </p>

        <p className="mt-6 text-slate-600">
          References to “Zyronetworks” include its owners, operators, and affiliates. References to “Service” include
          the Songs API, dashboard, and related components provided by Zyronetworks.
        </p>

        <h2 className="mt-6 text-xl font-semibold">16. Force Majeure</h2>
        <p className="mt-2">
          We will not be liable for any delay or failure in performance resulting from causes beyond our reasonable
          control, including but not limited to acts of God, war, terrorism, riots, embargoes, acts of civil or military
          authorities, fire, floods, accidents, strikes, or shortages of transportation facilities, fuel, energy, labor,
          or materials. If a force majeure event occurs and continues for a period exceeding thirty (30) days, we may
          suspend or terminate the affected Service upon notice to you.
        </p>

        <h2 className="mt-6 text-xl font-semibold">17. Local Law Addendum (India)</h2>
        <div className="mt-2 space-y-3">
          <p>
            For users in India, this document is an electronic record under the Information Technology Act, 2000 and the
            rules thereunder, and does not require physical or digital signatures. By accessing or using the Service,
            you agree to be bound by these Terms and applicable policies as published on our website and dashboard.
          </p>
          <p>
            Governing Law and Jurisdiction: These Terms shall be governed by and construed in accordance with the laws
            of India. All disputes shall be subject to the exclusive jurisdiction of the courts located at Guna, Madhya
            Pradesh.
          </p>
          <p>
            Platform Ownership Notice: The Service (including https://zyronetworks.shop/) is operated by or on behalf of
            ZyroNetworks and may be owned or managed in association with Yash Studios, with a correspondence address at
            Saiyyadpura, Guna, India.
          </p>
        </div>
      </section>
    </main>
  )
}
