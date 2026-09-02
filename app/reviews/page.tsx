import Link from "next/link";

const reviews = [
  {
    name: "Priya S.",
    rating: 5,
    review:
      "The entire experience was comfortable and professional. The doctor explained everything clearly and made me feel very comfortable.",
  },
  {
    name: "Rahul M.",
    rating: 5,
    review:
      "A very clean clinic with friendly staff. I was extremely happy with my treatment and the overall experience.",
  },
  {
    name: "Ayesha K.",
    rating: 5,
    review:
      "Excellent service and a very caring team. The treatment was explained properly and I would definitely recommend the clinic.",
  },
  {
    name: "Mohammed A.",
    rating: 5,
    review:
      "The clinic has a very comfortable environment and the staff were helpful throughout my visit.",
  },
  {
    name: "Sneha P.",
    rating: 5,
    review:
      "Very professional experience. I appreciated how clearly everything was explained before the treatment.",
  },
  {
    name: "Vikas R.",
    rating: 5,
    review:
      "I had a great experience at the clinic. The team was friendly, professional and attentive.",
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div
      className="text-lg tracking-[0.2em] text-cyan-500"
      aria-label={`${rating} out of 5 stars`}
    >
      {"★".repeat(rating)}
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HEADER */}
      <header className="border-b border-slate-100 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-600 font-bold text-white">
              A
            </div>

            <div>
              <div className="text-lg font-bold text-slate-950">
                Arfat Dental
              </div>

              <div className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-600">
                Clinic
              </div>
            </div>
          </Link>

          <Link
            href="/"
            className="rounded-full border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-cyan-300 hover:text-cyan-600"
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-slate-950 px-5 py-20 text-white lg:px-6 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
            Patient Reviews
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
            What our patients say.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Hear about the experiences of patients who have visited Arfat
            Dental Clinic.
          </p>
        </div>
      </section>

      {/* RATING SUMMARY */}
      <section className="border-b border-slate-100 bg-white px-5 py-12 lg:px-6">
        <div className="mx-auto grid max-w-5xl items-center gap-8 text-center sm:grid-cols-3">
          <div>
            <div className="text-5xl font-bold text-slate-950">4.9</div>

            <div className="mt-2">
              <Stars rating={5} />
            </div>

            <p className="mt-2 text-sm text-slate-500">
              Patient Rating
            </p>
          </div>

          <div className="hidden h-16 w-px bg-slate-200 sm:block" />

          <div>
            <div className="text-5xl font-bold text-slate-950">5K+</div>

            <p className="mt-2 text-sm text-slate-500">
              Happy Patients
            </p>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="px-5 py-20 lg:px-6 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <article
                key={review.name}
                className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <Stars rating={review.rating} />

                <p className="mt-6 leading-7 text-slate-600">
                  “{review.review}”
                </p>

                <div className="mt-7 flex items-center gap-3 border-t border-slate-100 pt-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-100 font-bold text-cyan-700">
                    {review.name.charAt(0)}
                  </div>

                  <div>
                    <p className="font-bold text-slate-950">
                      {review.name}
                    </p>

                    <p className="text-xs text-slate-400">
                      Patient
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEW CTA */}
      <section className="bg-slate-50 px-5 py-20 lg:px-6 lg:py-24">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] bg-cyan-600 px-7 py-14 text-center text-white sm:px-12">
          <div className="mx-auto flex justify-center">
            <Stars rating={5} />
          </div>

          <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
            Your experience matters to us.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-cyan-50">
            Have a dental concern? Schedule a visit with Arfat Dental Center
            and let our team help you take care of your smile.
          </p>

          <Link
            href="/appointment"
            className="mt-8 inline-flex rounded-full bg-white px-8 py-4 text-sm font-bold text-cyan-700 transition hover:bg-cyan-50"
          >
            Book Appointment →
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 px-5 py-10 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Arfat Dental Center. All rights reserved.
      </footer>
    </main>
  );
}

