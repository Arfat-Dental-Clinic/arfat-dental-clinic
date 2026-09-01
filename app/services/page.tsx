import Link from "next/link";

const services = [
  {
    title: "Dental Implants",
    description:
      "Advanced implant treatment to replace missing teeth and restore your smile.",
    icon: "🦷",
  },
  {
    title: "Root Canal Treatment",
    description:
      "Comfort-focused treatment to save infected or damaged teeth.",
    icon: "✦",
  },
  {
    title: "Tooth Extraction",
    description:
      "Safe and careful tooth removal when extraction is necessary.",
    icon: "◇",
  },
  {
    title: "Teeth Whitening",
    description:
      "Professional whitening treatments for a brighter and more confident smile.",
    icon: "✧",
  },
  {
    title: "Braces & Aligners",
    description:
      "Orthodontic solutions to help straighten teeth and improve your smile.",
    icon: "⌁",
  },
  {
    title: "Child Treatment",
    description:
      "Gentle and caring dental treatment designed for children.",
    icon: "♡",
  },
  {
    title: "Cosmetic & Aesthetic",
    description:
      "Smile-enhancing treatments focused on appearance, confidence and aesthetics.",
    icon: "✺",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* HEADER */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-6">
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/images/logo.jpeg"
              alt="Arfat Dental Centre"
              className="h-12 w-auto object-contain"
            />

            <div>
              <div className="text-lg font-bold text-slate-950">
                Arfat Dental Centre
              </div>

              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-600">
                Dental Care & Specialists
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
      <section className="bg-slate-950 px-5 py-16 text-white lg:px-6 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
            Our Treatments
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">
            Dental treatments under one roof
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Professional dental care for children and adults, from routine
            treatment to advanced dental procedures.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-5 py-16 lg:px-6 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-cyan-200 hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-50 text-3xl">
                    {service.icon}
                  </div>

                  <span className="text-sm font-bold text-slate-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h2 className="mt-7 text-2xl font-bold text-slate-950">
                  {service.title}
                </h2>

                <p className="mt-4 leading-7 text-slate-600">
                  {service.description}
                </p>

                <Link
                  href="/appointment"
                  className="mt-7 inline-block font-bold text-cyan-600 transition hover:text-cyan-700"
                >
                  Book this treatment →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-20 lg:px-6 lg:pb-28">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-cyan-600 px-7 py-14 text-center text-white sm:px-10 lg:px-14">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-100">
            Book Your Visit
          </p>

          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Ready to take care of your smile?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-cyan-50">
            Choose your treatment and request an appointment with Arfat Dental
            Clinic.
          </p>

          <Link
            href="/appointment"
            className="mt-8 inline-block rounded-full bg-white px-8 py-4 font-bold text-cyan-700 transition hover:bg-cyan-50"
          >
            Book Appointment →
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 px-5 py-10 text-center text-sm text-slate-400 lg:px-6">
        <p>
          © {new Date().getFullYear()} Arfat Dental Centre. All rights
          reserved.
        </p>
      </footer>
    </main>
  );
}


