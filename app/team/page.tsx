import Link from "next/link";

const phone = "9552786566";
const whatsapp = `https://wa.me/91${phone}`;

const doctors = [
  "Dr. Heena A Ansari",
  "Dr. Ayesha A Ansari",
  "Dr. Zainab S Shaikh",
  "Dr. Huzaifa S Shaikh",
  "Dr. Sana A Shaikh",
  "Dr. Shweta N Patil",
  "Dr. Liza F Khan",
  "Dr. Maaz F Khan",
  "Dr. Tina S Nikam",
];

export default function TeamPage() {
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
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/images/logo.jpeg"
              alt="Arfat Dental Centre"
              className="h-14 w-auto object-contain"
            />

            <div>
              <div className="text-lg font-bold tracking-tight text-slate-950">
                Arfat Dental Centre
              </div>

              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-600">
                Dental Care & Specialists
              </div>
            </div>
          </Link>

          {/* DESKTOP NAV */}
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
              className="text-sm font-semibold text-cyan-600"
            >
              Doctor & Team
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

                <Link
                  href="/team"
                  className="font-semibold text-cyan-600"
                >
                  Doctor & Team
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

      {/* PAGE HERO */}
      <section className="relative overflow-hidden bg-slate-950 px-5 py-20 text-white lg:px-6 lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(6,182,212,0.25),transparent_35%),radial-gradient(circle_at_20%_80%,rgba(14,165,233,0.12),transparent_30%)]" />

        <div className="relative mx-auto max-w-7xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
            Our Dental Team
          </p>

          <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl">
            Meet Our Doctors
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Meet the dental professionals at Arfat Dental Centre, dedicated to
            providing quality, comfortable and patient-focused dental care.
          </p>
        </div>
      </section>

      {/* LEAD DOCTOR */}
      <section className="px-5 py-20 lg:px-6 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-600">
              Lead Doctor
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
              Our Main Dentist
            </h2>
          </div>

          <div className="overflow-hidden rounded-[2.5rem] bg-slate-950 shadow-2xl">
            <div className="grid items-center lg:grid-cols-2">
              {/* DOCTOR IMAGE */}
              <div className="h-[500px] overflow-hidden">
                <img
                  src="/images/naushad.jpeg"
                  alt="Dr. Naushad Ansari Mohd Saleem"
                  className="h-full w-full object-cover object-top"
                />
              </div>

              {/* DOCTOR DETAILS */}
              <div className="p-8 text-white sm:p-12 lg:p-14">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
                  Lead Doctor
                </p>

                <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                  Dr. Naushad Ansari Mohd Saleem
                </h2>

                <p className="mt-4 text-xl font-semibold text-cyan-300">
                  B.D.S., P.G.A.D. (USA)
                </p>

                <div className="mt-7 space-y-3 text-slate-300">
                  <p>✓ Cert. Implants</p>
                  <p>✓ Cert. Orthodontics (Braces)</p>
                  <p>✓ Implant & Braces Specialist</p>
                  <p>✓ Patient-focused dental care</p>
                </div>

                <p className="mt-7 max-w-xl leading-7 text-slate-300">
                  Dr. Naushad Ansari Mohd Saleem is the lead dentist at
                  Arfat Dental Centre, providing professional dental care
                  with a focus on implants, braces and complete oral care.
                </p>

                <Link
                  href="/appointment"
                  className="mt-8 inline-block rounded-full bg-cyan-500 px-7 py-4 font-bold text-white hover:bg-cyan-400"
                >
                  Book an Appointment →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OTHER DOCTORS */}
      <section className="bg-slate-50 px-5 py-20 lg:px-6 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-600">
              Our Dental Professionals
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Our Doctors
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Our dental team includes qualified professionals committed to
              providing quality patient care.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {doctors.map((doctor, index) => (
              <div
                key={doctor}
                className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-lg font-bold text-cyan-700">
                  {index + 1}
                </div>

                <h3 className="mt-7 text-xl font-bold text-slate-950">
                  {doctor}
                </h3>

                {/* DEGREE */}
                <p className="mt-2 text-sm font-bold text-cyan-600">
                  B.D.S.
                </p>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Dental Professional
                </p>
              </div>
            ))}
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
                  alt="Arfat Dental Centre"
                  className="h-12 w-12 rounded-xl object-contain"
                />

                <div>
                  <div className="font-bold">
                    Arfat Dental Centre
                  </div>

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

                <Link href="/team" className="hover:text-white">
                  Doctor & Team
                </Link>

                <Link href="/gallery" className="hover:text-white">
                  Gallery
                </Link>

                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>

                <Link href="/appointment" className="hover:text-white">
                  Appointment
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6 text-sm text-slate-500">
            © {new Date().getFullYear()} Arfat Dental Centre. All rights
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
