import Link from "next/link";

const treatments = [
  {
    number: "01",
    title: "Dental Implants",
    description:
      "A long-lasting tooth replacement option designed to restore function, comfort and a natural-looking smile.",
  },
  {
    number: "02",
    title: "Root Canal Treatment",
    description:
      "Treatment for infected or damaged teeth that helps preserve the natural tooth and relieve discomfort.",
  },
  {
    number: "03",
    title: "Teeth Whitening",
    description:
      "Professional whitening treatment to help remove stains and give your smile a brighter appearance.",
  },
  {
    number: "04",
    title: "Braces & Aligners",
    description:
      "Orthodontic solutions designed to gradually improve tooth alignment and create a healthier smile.",
  },
  {
    number: "05",
    title: "Dental Cleaning",
    description:
      "Professional cleaning to remove plaque and buildup while helping maintain healthy teeth and gums.",
  },
  {
    number: "06",
    title: "Cosmetic Dentistry",
    description:
      "Smile-enhancing treatments designed around your individual appearance and dental goals.",
  },
  {
    number: "07",
    title: "Dental Extraction",
    description:
      "Careful removal of teeth when necessary, with attention to patient comfort throughout the procedure.",
  },
  {
    number: "08",
    title: "General Dentistry",
    description:
      "Routine dental care, checkups and preventive treatment to help maintain your overall oral health.",
  },
];

export default function TreatmentsPage() {
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
            Our Treatments
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
            Complete care for your smile.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            From preventive care to restorative and cosmetic treatments, we
            provide dental solutions designed around your individual needs.
          </p>

          <Link
            href="/appointment"
            className="mt-8 inline-flex rounded-full bg-cyan-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-cyan-600/20 transition hover:bg-cyan-500"
          >
            Book an Appointment →
          </Link>
        </div>
      </section>

      {/* TREATMENTS */}
      <section className="px-5 py-20 lg:px-6 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-2">
            {treatments.map((treatment) => (
              <div
                key={treatment.number}
                className="group rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl hover:shadow-cyan-900/5 sm:p-9"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-xl font-bold text-cyan-600 transition group-hover:bg-cyan-600 group-hover:text-white">
                    ✦
                  </div>

                  <span className="text-sm font-bold text-slate-300">
                    {treatment.number}
                  </span>
                </div>

                <h2 className="mt-7 text-2xl font-bold text-slate-950">
                  {treatment.title}
                </h2>

                <p className="mt-4 max-w-xl leading-7 text-slate-600">
                  {treatment.description}
                </p>

                <Link
                  href="/appointment"
                  className="mt-7 inline-flex text-sm font-bold text-cyan-600 transition hover:text-cyan-700"
                >
                  Book this treatment →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY TREATMENT MATTERS */}
      <section className="bg-slate-50 px-5 py-20 lg:px-6 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-600">
              Patient First
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Treatment that starts with understanding.
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Every patient's dental needs are different. Before treatment,
              your dental concerns and available options should be discussed
              clearly with you.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Understand your dental concern",
                "Discuss suitable treatment options",
                "Explain the treatment process",
                "Plan your next steps",
              ].map((item, index) => (
                <div key={item} className="flex items-center gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-sm font-bold text-cyan-700">
                    {index + 1}
                  </span>

                  <span className="font-semibold text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2.5rem] bg-slate-950 p-8 text-white sm:p-10">
            <p className="text-2xl font-bold">
              Looking for the right treatment?
            </p>

            <p className="mt-5 leading-8 text-slate-300">
              Book an appointment and discuss your dental needs with the
              clinic. The appropriate treatment can be decided after
              consultation.
            </p>

            <Link
              href="/appointment"
              className="mt-8 inline-flex rounded-full bg-cyan-600 px-7 py-4 text-sm font-bold text-white transition hover:bg-cyan-500"
            >
              Request an Appointment →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-20 lg:px-6 lg:py-24">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] bg-cyan-600 px-7 py-14 text-center text-white sm:px-12">
          <h2 className="text-4xl font-bold sm:text-5xl">
            Take care of your smile today.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-cyan-50">
            Contact Arfat Dental Center or request an appointment online.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/appointment"
              className="rounded-full bg-white px-8 py-4 text-sm font-bold text-cyan-700 transition hover:bg-cyan-50"
            >
              Book Appointment
            </Link>

            <Link
              href="/"
              className="rounded-full border border-white/30 px-8 py-4 text-sm font-bold text-white transition hover:bg-white/10"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 px-5 py-10 text-center text-sm text-slate-400 lg:px-6">
        © {new Date().getFullYear()} Arfat Dental Center. All rights reserved.
      </footer>
    </main>
  );
}
