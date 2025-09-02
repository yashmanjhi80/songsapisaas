import Link from "next/link"

export default function RefundPage() {
  return (
    <main className="w-full">
      <section className="mx-auto max-w-3xl px-4 md:px-6 py-10">
        <h1 className="text-3xl font-semibold tracking-tight mb-6 text-pretty">Refund & Cancellation Policy</h1>
        <p className="text-sm text-muted-foreground mb-6">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="space-y-4 leading-relaxed">
          <p>
            This policy outlines how you can cancel or seek a refund for a product or service purchased through our
            Platform.
          </p>

          <h2 className="text-xl font-semibold mt-8">Cancellations</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Cancellation requests will be considered if made within 2 days of placing the order, subject to whether
              the order has already been processed or shipped. If the product is out for delivery, you may choose to
              reject it at the doorstep.
            </li>
            <li>
              Perishable items (e.g., flowers, eatables) are generally not eligible for cancellation.
              Refunds/replacements may be made if product quality is not satisfactory.
            </li>
          </ul>

          <h2 className="text-xl font-semibold mt-8">Damaged/Defective Items</h2>
          <p>
            In case of damaged or defective items, please report to customer service within 2 days of receipt. Requests
            may be entertained after the seller or merchant reviews the claim.
          </p>

          <h2 className="text-xl font-semibold mt-8">Not as Described</h2>
          <p>
            If the product received is not as shown or as per expectations, notify customer service within 2 days of
            receipt for review and an appropriate decision.
          </p>

          <h2 className="text-xl font-semibold mt-8">Manufacturer Warranty</h2>
          <p>
            For items covered by manufacturer warranty, please refer issues directly to the manufacturer under their
            policy.
          </p>

          <h2 className="text-xl font-semibold mt-8">Refund Timeline</h2>
          <p>For approved refunds, processing may take up to 4 days.</p>

          <h2 className="text-xl font-semibold mt-8">Contact</h2>
          <p>
            For questions regarding this policy, contact{" "}
            <a href="mailto:zyrosukuna@gmail.com" className="underline underline-offset-4">
              zyrosukuna@gmail.com
            </a>{" "}
            or Telegram{" "}
            <Link href="https://t.me/MrZyro" className="underline underline-offset-4">
              @MrZyro
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  )
}
