import Link from "next/link";

const galleryImages = [
  {
    src: "/images/waitingarea.jpeg",
    title: "Waiting Area",
    description: "A comfortable waiting area for our patients.",
  },
  {
    src: "/images/ourclinic.jpg",
    title: "Our Clinic",
    description: "A clean and welcoming environment for dental care.",
  },
  {
    src: "/images/treatmentroom.jpg",
    title: "Treatment Room",
    description: "A comfortable and modern dental treatment room.",
  },
  {
    src: "/images/patientcare.jpg",
    title: "Patient Care",
    description: "Focused on comfortable and personalized patient care.",
  },
  {
    src: "/images/clinicinterior.jpg",
    title: "Clinic Interior",
    description: "The interior of Arfat Dental Centre.",
  },
  {
    src: "/images/reception.jpg",
    title: "Reception",
    description: "Our clinic reception area.",
  },
  {
    src: "/images/dental.jpg",
    title: "Dental Care",
    description: "Professional dental treatment and care.",
  },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* TOP BAR */}
      <div className="bg-slate-950 px-5 py-2 text-sm text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 md:flex-row">
          <p className="text-slate-300">
            Advanced Dental Care • Implants • Braces • Complete Dental Care
          </p>

          <a
            href="tel:+919552786566"
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
              Team
            </Link>

            <Link
              href="/gallery"
              className="text-sm font-semibold text-cyan-600"
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

          {/* RIGHT BUTTONS */}
          <div className="hidden items-center gap-3 lg:flex">

            <a
              href="https://wa.me/919552786566"
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

                <Link href="/team" className="font-semibold">
                  Team
                </Link>

                <Link
                  href="/gallery"
                  className="font-semibold text-cyan-600"
                >
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
      <section className="relative overflow-hidden bg-slate-950 px-5 py-20 lg:px-6 lg:py-28">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(6,182,212,0.25),transparent_35%),radial-gradient(circle_at_20%_80%,rgba(14,165,233,0.12),transparent_30%)]" />

        <div className="relative mx-auto max-w-7xl text-center">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
            Our Clinic
          </p>

          <h1 className="mt-4 text-5xl font-bold tracking-tight text-white sm:text-6xl">
            Explore Arfat Dental Centre
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Take a look inside our clinic, treatment rooms and patient care
            areas.
          </p>

        </div>

      </section>

      {/* GALLERY */}
      <section className="px-5 py-20 lg:px-6 lg:py-28">

        <div className="mx-auto max-w-7xl">

          {/* TITLE */}
          <div className="mx-auto max-w-2xl text-center">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-600">
              Clinic Gallery
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              A closer look at our clinic
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Our clinic is designed to provide a clean, comfortable and
              welcoming environment for every patient.
            </p>

          </div>

          {/* IMAGE GRID */}
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {galleryImages.map((image, index) => (

              <div
                key={image.src}
                className={`group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:border-cyan-200 hover:shadow-xl ${
                  index === 0 ? "lg:col-span-2" : ""
                }`}
              >

                {/* IMAGE */}
                <div
                  className={`relative overflow-hidden bg-slate-100 ${
                    index === 0
                      ? "h-[420px]"
                      : "h-[300px]"
                  }`}
                >

                  <img
                    src={image.src}
                    alt={image.title}
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding="async"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  {/* IMAGE NUMBER */}
                  <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-slate-950/75 text-sm font-bold text-white backdrop-blur-md">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                </div>

                {/* DESCRIPTION */}
                <div className="p-6">

                  <h3 className="text-xl font-bold text-slate-950">
                    {image.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {image.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* 360 TOUR */}
      <section className="px-5 pb-20 lg:px-6 lg:pb-28">

        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-cyan-700">

          <div className="p-8 text-center sm:p-12 lg:p-16">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-200">
              Coming Soon
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Explore Arfat Dental Centre in 360°
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-cyan-50">
              An interactive 360° virtual tour of our clinic will be available
              soon.
            </p>

            <div className="mt-7 inline-flex rounded-full bg-white/10 px-6 py-3 font-semibold text-white">
              360° Virtual Tour — Coming Soon
            </div>

          </div>

        </div>

      </section>

      {/* APPOINTMENT CTA */}
      <section className="px-5 pb-20 lg:px-6 lg:pb-28">

        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-slate-950 px-7 py-14 text-center text-white sm:px-10 lg:px-14">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
            Book Your Visit
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Ready to take care of your smile?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">
            Request your appointment online and our clinic team will contact
            you to confirm your visit.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

            <Link
              href="/appointment"
              className="rounded-full bg-cyan-500 px-7 py-4 font-bold text-white hover:bg-cyan-400"
            >
              Book Appointment →
            </Link>

            <a
              href="https://wa.me/919552786566"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 px-7 py-4 font-bold text-white hover:bg-white/10"
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

              <h3 className="font-bold">
                Contact
              </h3>

              <div className="mt-4 space-y-2 text-sm text-slate-400">

                <a
                  href="tel:+919552786566"
                  className="block hover:text-white"
                >
                  +91 95527 86566
                </a>

                <p>
                  Bhiwandi, Maharashtra 421302
                </p>

                <p>
                  Mon – Sat • 11 AM – 3 PM
                </p>

                <p>
                  6 PM – 10 PM
                </p>

              </div>

            </div>

          </div>

          <div className="mt-10 border-t border-white/10 pt-6 text-sm text-slate-500">
            © {new Date().getFullYear()} Arfat Dental Centre. All rights reserved.
          </div>

        </div>

      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        href="https://wa.me/919552786566"
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
