export const metadata = {
  title: "Privacy Policy | ZyroNetworks",
  description:
    "Learn how ZyroNetworks collects, uses, and protects information for our API services, including YouTube metadata features.",
}

export default function PrivacyPage() {
  // Effective date is set statically for clarity and compliance records.
  const effectiveDate = "September 2, 2025"

  return (
    <main className="w-full">
      <section className="mx-auto max-w-3xl px-4 md:px-6 py-8 md:py-12">
        <header className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight text-pretty">Privacy Policy — ZyroNetworks</h1>
          <p className="mt-2 text-sm text-muted-foreground">Effective Date: {effectiveDate}</p>
        </header>

        <div className="space-y-6 text-sm leading-relaxed">
          <p>
            At ZyroNetworks, your privacy is important to us. This Privacy Policy outlines how we collect, use, and
            protect the information you provide while using our API services, especially those related to searching and
            retrieving YouTube video details.
          </p>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">1. Information We Collect</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <span className="font-medium">API Usage Data:</span> Logs including IP address, timestamps, and
                endpoints accessed to monitor service usage and performance.
              </li>
              <li>
                <span className="font-medium">Account Information (if applicable):</span> Email address, organization
                name, API keys, or other identifiers provided during registration.
              </li>
              <li>
                <span className="font-medium">Third‑party API Data:</span> Metadata retrieved from YouTube via the
                YouTube Data API, such as video titles, thumbnails, channel information, and descriptions.
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">2. How We Use Your Information</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Provide and maintain our API services</li>
              <li>Monitor and improve system performance</li>
              <li>Enforce usage limits or prevent abuse</li>
              <li>Communicate service updates and changes (if you’ve opted in)</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">3. Data Sharing</h2>
            <p>We do not sell or rent your personal information to third parties. We may share data:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>To comply with legal obligations</li>
              <li>To detect and prevent fraudulent or abusive behavior</li>
              <li>With service providers strictly for operations or support</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">4. Third‑party APIs</h2>
            <p>
              Our service depends on the YouTube Data API. When you use our API, you are also subject to{" "}
              <a
                href="https://www.youtube.com/t/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                YouTube’s Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                Google’s Privacy Policy
              </a>
              .
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">5. Security</h2>
            <p>
              We implement reasonable security measures to protect your data. However, no system is completely secure,
              so we encourage you to keep your API keys confidential.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">6. Your Rights</h2>
            <p>Depending on your location, you may have rights to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Access or delete your stored data</li>
              <li>Opt out of analytics (if used)</li>
              <li>Request corrections or changes</li>
            </ul>
            <p>
              To exercise your rights, contact us at{" "}
              <a href="mailto:zyrosukuna@gmail.com" className="underline underline-offset-4">
                zyrosukuna@gmail.com
              </a>{" "}
              or via Telegram at{" "}
              <a
                href="https://t.me/MrZyro"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                @MrZyro
              </a>
              .
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">7. Updates to This Policy</h2>
            <p>
              We may update this policy from time to time. You will be notified of significant changes via email or on
              our website.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">Contact Us</h2>
            <p>
              If you have questions or concerns, reach out at{" "}
              <a href="mailto:zyrosukuna@gmail.com" className="underline underline-offset-4">
                zyrosukuna@gmail.com
              </a>{" "}
              or{" "}
              <a
                href="https://t.me/MrZyro"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                @MrZyro
              </a>
              .
            </p>
          </section>
        </div>
      </section>
    </main>
  )
}
