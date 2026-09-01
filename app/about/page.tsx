import Link from "next/link";

const features = [
  {
    title: "Patient-Focused Care",
    description:
      "Every treatment is planned around the patient's comfort, needs and dental goals.",
  },
  {
    title: "Modern Approach",
    description:
      "We aim to provide professional dental care using modern techniques and equipment.",
  },
  {
    title: "Clear Guidance",
    description:
      "Treatment options are explained clearly so patients can make informed decisions.",
  },
  {
    title: "Comfortable Environment",
    description:
      "Our goal is to make every visit calm, welcoming and stress-free.",
  },
];

export default function AboutPage() {
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
            About Arfat Dental Centre
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
            Modern dentistry with a personal touch.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Professional dental care focused on your comfort, oral health and
            confidence.
          </p>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-5 py-20 lg:px-6 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          
          {/* IMAGE */}
         <div
  className="min-h-[500px] w-full rounded-[2.5rem] bg-contain bg-center bg-no-repeat bg-slate-100"
  style={{
    backgroundImage: "url('/images/naushad.jpeg')",
  }}
/>

          {/* CONTENT */}
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-600">
              Who We Are
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Dental care built around you.
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              At Arfat Dental Centre, we believe visiting the dentist should be
              a comfortable and positive experience.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              Our focus is on providing professional dental treatment while
              making sure every patient understands their treatment and feels
              comfortable throughout the process.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              From routine dental care to restorative and cosmetic treatments,
              we aim to provide personalised care based on each patient's
              individual needs.
            </p>

            <Link
              href="/appointment"
              className="mt-8 inline-flex rounded-full bg-cyan-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-cyan-600/20 transition hover:bg-cyan-700"
            >
              Book an Appointment →
            </Link>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-slate-50 px-5 py-20 lg:px-6 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-600">
              Why Choose Us
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Care you can feel confident about.
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              We focus on combining professional dental care with a comfortable
              patient experience.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 font-bold text-cyan-600">
                  0{index + 1}
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-950">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="bg-slate-950 px-5 py-20 text-white lg:px-6 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
              Our Approach
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Simple, transparent and patient-focused.
            </h2>

            <p className="mt-6 leading-8 text-slate-300">
              We believe patients should understand what is happening with
              their dental health and why a particular treatment is recommended.
            </p>

            <div className="mt-8 space-y-5">
              {[
                "Understand your dental needs",
                "Explain available treatment options",
                "Create a treatment plan",
                "Provide comfortable dental care",
              ].map((step, index) => (
                <div key={step} className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-600 font-bold">
                    {index + 1}
                  </div>

                  <p className="font-semibold text-slate-200">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-8 sm:p-10">
            <p className="text-2xl font-bold">
              Your comfort matters.
            </p>

            <p className="mt-5 leading-8 text-slate-300">
              Whether you are visiting for a regular check-up or require a
              dental procedure, our goal is to make your experience as smooth
              and comfortable as possible.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-3xl bg-white/5 p-5">
                <div className="text-3xl font-bold text-cyan-400">10+</div>
                <div className="mt-1 text-sm text-slate-400">
                  Years Experience
                </div>
              </div>

              <div className="rounded-3xl bg-white/5 p-5">
                <div className="text-3xl font-bold text-cyan-400">5K+</div>
                <div className="mt-1 text-sm text-slate-400">
                  Happy Patients
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-20 lg:px-6 lg:py-24">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] bg-cyan-600 px-7 py-14 text-center text-white sm:px-12">
          <h2 className="text-4xl font-bold sm:text-5xl">
            Ready to take care of your smile?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-cyan-50">
            Book an appointment with Arfat Dental Centre and take the next step
            toward better dental health.
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
      <footer className="bg-slate-950 px-5 py-10 text-center text-sm text-slate-400 lg:px-6">
        © {new Date().getFullYear()} Arfat Dental Centre. All rights reserved.
      </footer>
    </main>
  );
}
