"use client";

import Link from "next/link";

const phone = "9552786566";
const whatsapp = `https://wa.me/91${phone}`;

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
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* TOP BAR */}
      <div className="bg-slate-950 px-5 py-2 text-sm text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 md:flex-row">
          <p className="text-slate-300">
            Advanced Dental Care • Implants • Braces • Complete Dental Care
          </p>

          <a
            href={`tel:+91${phone}`}
            className="font-semibold text-cyan-300 hover:text-white"
          >
            ☎ +91 95527 86566
          </a>
        </div>
      </div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-6">
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/images/logo.jpeg"
              alt="Arfat Dental Center"
              className="h-14 w-auto object-contain"
            />

            <div>
              <div className="text-lg font-bold tracking-tight text-slate-950">
                Arfat Dental Center
              </div>

              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-600">
                Dental Care & Specialists
              </div>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden items-center gap-7 lg:flex">
            <Link
              href="/"
              className="text-sm font-semibold hover:text-cyan-600"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="text-sm font-semibold hover:text-cyan-600"
            >
              About
            </Link>

            <Link
              href="/services"
              className="text-sm font-semibold hover:text-cyan-600"
            >
              Treatments
            </Link>

           
            <Link
              href="/team"
              className="text-sm font-semibold hover:text-cyan-600"
            >
             Docter & Team
            </Link>

            <Link
              href="/gallery"
              className="text-sm font-semibold hover:text-cyan-600"
            >
              Gallery
            </Link>

            <Link
              href="/contact"
              className="text-sm font-semibold hover:text-cyan-600"
            >
              Contact
            </Link>
          </nav>

          {/* DESKTOP BUTTONS */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-green-200 px-5 py-2.5 text-sm font-bold text-green-700 hover:bg-green-50"
            >
              WhatsApp
            </a>

            <Link
              href="/appointment"
              className="rounded-full bg-cyan-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-cyan-600/20 hover:bg-cyan-700"
            >
              Book Appointment
            </Link>
          </div>

          {/* MOBILE MENU */}
          <details className="relative lg:hidden">
            <summary className="cursor-pointer list-none rounded-xl border border-slate-200 p-3">
              <span className="block h-0.5 w-5 bg-slate-900" />
              <span className="my-1.5 block h-0.5 w-5 bg-slate-900" />
              <span className="block h-0.5 w-5 bg-slate-900" />
            </summary>

            <div className="absolute right-0 top-14 z-50 w-64 rounded-2xl border border-slate-200 bg-white p-5 shadow-xl">
              <div className="flex flex-col gap-4">
                <Link href="/" className="font-semibold">
                  Home
                </Link>

                <Link href="/about" className="font-semibold">
                  About
                </Link>

                <Link href="/services" className="font-semibold">
                  Treatments
                </Link>

                <Link href="/doctor" className="font-semibold">
                  Doctor
                </Link>

                <Link href="/team" className="font-semibold">
                  Team
                </Link>

                <Link href="/gallery" className="font-semibold">
                  Gallery
                </Link>

                <Link href="/contact" className="font-semibold">
                  Contact
                </Link>

                <Link
                  href="/appointment"
                  className="rounded-full bg-cyan-600 px-6 py-3 text-center font-bold text-white"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </details>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(6,182,212,0.25),transparent_35%),radial-gradient(circle_at_20%_80%,rgba(14,165,233,0.12),transparent_30%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:px-6 lg:py-24">
          {/* HERO TEXT */}
          <div>
            <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-cyan-200">
              ● Trusted Dental Care in Bhiwandi
            </div>

            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl">
              Your smile.
              <span className="block text-cyan-400">
                Our priority.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
              Welcome to Arfat Dental Center — providing professional,
              comfortable and modern dental care for you and your family.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/appointment"
                className="rounded-full bg-cyan-500 px-7 py-4 text-center text-sm font-bold text-white shadow-xl hover:bg-cyan-400"
              >
                Book an Appointment →
              </Link>

              <a
                href={`tel:+91${phone}`}
                className="rounded-full border border-white/15 bg-white/5 px-7 py-4 text-center text-sm font-bold text-white hover:bg-white/10"
              >
                Call +91 95527 86566
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 text-sm text-slate-300">
              <span>✓ Experienced Dental Team</span>
              <span>✓ Modern Treatment</span>
              <span>✓ Patient-Focused Care</span>
            </div>
          </div>

          {/* HERO IMAGE */}
          <div className="relative">
            <div className="absolute -inset-5 rounded-[3rem] bg-cyan-500/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-900 shadow-2xl">
              <img
                src="/images/naushad.jpeg"
                alt="Dr. Naushad Ansari"
                className="h-[520px] w-full object-cover object-top"
              />

              <div className="absolute inset-x-5 bottom-5 rounded-3xl border border-white/10 bg-slate-950/75 p-5 backdrop-blur-xl">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
                  Main Dentist
                </p>

                <p className="mt-2 text-xl font-bold text-white">
                  Dr. Naushad Ansari Mohd Saleem
                </p>

                <p className="mt-1 text-sm text-slate-300">
                  B.D.S., P.G.A.D. (USA)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK INFO */}
      <section className="border-b border-slate-100 bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-10 md:grid-cols-3 lg:px-6">
          <div className="rounded-3xl bg-cyan-50 p-6">
            <div className="text-2xl">📍</div>

            <h3 className="mt-3 font-bold">Our Location</h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Shalimar Tower, Vanjar Patti Naka, Gokul Nagar, Bhiwandi
            </p>
          </div>

          <div className="rounded-3xl bg-cyan-50 p-6">
            <div className="text-2xl">🕐</div>

            <h3 className="mt-3 font-bold">Opening Hours</h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Mon – Sat
              <br />
              11 AM – 3 PM
              <br />
              6 PM – 10 PM
            </p>
          </div>

          <div className="rounded-3xl bg-cyan-50 p-6">
            <div className="text-2xl">📞</div>

            <h3 className="mt-3 font-bold">Call Us</h3>

            <a
              href={`tel:+91${phone}`}
              className="mt-2 block text-sm font-bold text-cyan-700"
            >
              +91 95527 86566
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="px-5 py-20 lg:px-6 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-600">
                Our Treatments
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
                Dental care under one roof
              </h2>
            </div>

            <Link
              href="/services"
              className="font-bold text-cyan-600 hover:text-cyan-700"
            >
              View all treatments →
            </Link>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-2xl">
                  {service.icon}
                </div>

                <h3 className="mt-7 text-xl font-bold text-slate-950">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOCTOR PREVIEW */}
      <section className="bg-slate-950 px-5 py-20 text-white lg:px-6 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
              Our Main Doctor
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Meet Dr. Naushad Ansari Mohd Saleem
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-slate-300">
              B.D.S., P.G.A.D. (USA), with certifications in implants and
              orthodontic treatment.
            </p>

            <Link
              href="/doctor"
              className="mt-7 inline-block rounded-full bg-cyan-500 px-7 py-4 font-bold text-white hover:bg-cyan-400"
            >
              Meet the Doctor →
            </Link>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <div className="space-y-4 text-slate-300">
              <p>✓ Cert. Implants</p>
              <p>✓ Cert. Orthodontics (Braces)</p>
              <p>✓ Implant & Braces Specialist</p>
              <p>✓ Patient-focused dental care</p>
            </div>
          </div>
        </div>
      </section>

      {/* APPOINTMENT CTA */}
      <section className="px-5 py-20 lg:px-6 lg:py-24">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-cyan-600 px-7 py-14 text-center text-white sm:px-10 lg:px-14">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-100">
            Book Your Visit
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Ready to take care of your smile?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-cyan-50">
            Request your appointment online and our clinic team will contact
            you to confirm your visit.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/appointment"
              className="rounded-full bg-white px-7 py-4 font-bold text-cyan-700 hover:bg-cyan-50"
            >
              Book Appointment →
            </Link>

            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/30 px-7 py-4 font-bold text-white hover:bg-white/10"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 px-5 py-12 text-white lg:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-8 md:flex-row">
            <div>
              <div className="flex items-center gap-3">
                <img
                  src="/images/logo.jpeg"
                  alt="Arfat Dental Center"
                  className="h-12 w-12 rounded-xl object-contain"
                />

                <div>
                  <div className="font-bold">Arfat Dental Center</div>

                  <div className="text-xs uppercase tracking-[0.2em] text-cyan-400">
                    Your Smile, Our Priority
                  </div>
                </div>
              </div>

              <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
                Professional dental care in Bhiwandi with a focus on comfort,
                quality and patient care.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Quick Links</h3>

              <div className="mt-4 grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-slate-400">
                <Link href="/about" className="hover:text-white">
                  About
                </Link>

                <Link href="/services" className="hover:text-white">
                  Treatments
                </Link>

                <Link href="/doctor" className="hover:text-white">
                  Doctor
                </Link>

                <Link href="/team" className="hover:text-white">
                  Team
                </Link>

                <Link href="/gallery" className="hover:text-white">
                  Gallery
                </Link>

                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6 text-sm text-slate-500">
            © {new Date().getFullYear()} Arfat Dental Center. All rights
            reserved.
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        href={whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-xl text-white shadow-2xl hover:bg-green-600"
      >
        ☎
      </a>
    </main>
  );
}
