export const metadata = {
  title: "About Us | ZyroNetworks",
  description: "Learn about ZyroNetworks and our mission to provide fast, reliable APIs for YouTube data and more.",
}

export default function AboutPage() {
  return (
    <main className="w-full">
      <section className="mx-auto max-w-3xl px-4 md:px-6 py-8 md:py-12">
        <header className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight text-pretty">About Us — ZyroNetworks</h1>
          <p className="mt-2 text-sm text-muted-foreground">Simple, fast, and reliable API solutions.</p>
        </header>

        <div className="space-y-6">
          <p className="text-sm leading-relaxed">
            At ZyroNetworks, we believe in the power of simple, fast, and reliable API solutions.
          </p>

          <p className="text-sm leading-relaxed">
            We specialize in providing developers and businesses with seamless access to YouTube video search and
            metadata through easy-to-use APIs. Whether you're building a video discovery platform, analytics tool, or
            content library, our APIs make it easy to pull real-time data directly from YouTube without the complexity
            of managing third-party integrations yourself.
          </p>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">What We Offer</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm leading-relaxed">
              <li>Clean, fast, and secure API access to YouTube video metadata</li>
              <li>Scalable infrastructure for high-volume requests</li>
              <li>Developer-friendly documentation and support</li>
              <li>Transparent pricing and fair usage</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">Our Mission</h2>
            <p className="text-sm leading-relaxed">
              To empower developers and digital creators with the tools they need to integrate YouTube data into their
              platforms with ease and confidence.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">Who We Serve</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm leading-relaxed">
              <li>Indie developers</li>
              <li>SaaS platforms</li>
              <li>Digital marketing teams</li>
              <li>Educational content tools</li>
              <li>Media and entertainment tech</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">Get in Touch</h2>
            <p className="text-sm leading-relaxed">
              Ready to build something awesome? Reach out to us anytime at{" "}
              <a href="mailto:zyrosukuna@gmail.com" className="underline underline-offset-4">
                zyrosukuna@gmail.com
              </a>{" "}
              or on Telegram at{" "}
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
