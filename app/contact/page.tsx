import Link from "next/link";

const phoneNumber = "+91 95527 86566";
const phoneLink = "tel:+919552786566";

const address =
  "1st & 2nd Floor, Shalimar Tower, Above Haji Motors, Next to Bahar-e-Madina Masjid, Vanjar Patti Naka, Gokul Nagar, Bhiwandi, Maharashtra 421302";

const googleMapsLink =
  "https://maps.app.goo.gl/JynrUdbbmGJSWtyH9";

export default function ContactPage() {
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
            Contact Us
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
            We'd love to hear from you.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Have a question or want to schedule a visit? Get in touch with
            Arfat Dental Clinic.
          </p>
        </div>
      </section>

      {/* CONTACT INFORMATION */}
      <section className="px-5 py-20 lg:px-6 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-600">
              Get In Touch
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Visit Arfat Dental Clinic.
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-slate-600">
              For appointments, treatment enquiries or general questions,
              contact our clinic using the details below.
            </p>

            <div className="mt-10 space-y-6">
              {/* ADDRESS */}
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-50 text-xl">
                  📍
                </div>

                <div>
                  <h3 className="font-bold text-slate-950">
                    Clinic Address
                  </h3>

                  <p className="mt-1 max-w-lg text-sm leading-6 text-slate-500">
                    {address}
                  </p>

                  <a
                    href={googleMapsLink}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-block text-sm font-bold text-cyan-600 hover:text-cyan-700"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>

              {/* PHONE */}
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-50 text-xl">
                  ☎
                </div>

                <div>
                  <h3 className="font-bold text-slate-950">
                    Phone
                  </h3>

                  <a
                    href={phoneLink}
                    className="mt-1 block text-sm text-slate-500 transition hover:text-cyan-600"
                  >
                    {phoneNumber}
                  </a>
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-50 text-xl">
                  ✉
                </div>

                <div>
                  <h3 className="font-bold text-slate-950">
                    Email
                  </h3>

                  <a
                    href="mailto:naushad.bds@gmail.com"
                    className="mt-1 block text-sm text-slate-500 transition hover:text-cyan-600"
                  >
                    naushad.bds@gmail.com
                  </a>
                </div>
              </div>

              {/* HOURS */}
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-50 text-xl">
                  🕐
                </div>

                <div>
                  <h3 className="font-bold text-slate-950">
                    Opening Hours
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Monday – Saturday
                    <br />
                    11:00 AM – 3:00 PM
                    <br />
                    6:00 PM – 10:00 PM
                    <br />
                    <span className="font-semibold text-red-500">
                      Sunday Closed
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href={phoneLink}
                className="rounded-full bg-cyan-600 px-7 py-4 text-center text-sm font-bold text-white transition hover:bg-cyan-700"
              >
                Call Clinic
              </a>

              <a
                href={googleMapsLink}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-cyan-200 bg-cyan-50 px-7 py-4 text-center text-sm font-bold text-cyan-700 transition hover:bg-cyan-100"
              >
                Get Directions
              </a>

              <Link
                href="/appointment"
                className="rounded-full border border-slate-200 px-7 py-4 text-center text-sm font-bold text-slate-700 transition hover:border-cyan-300 hover:text-cyan-600"
              >
                Book Appointment
              </Link>
            </div>
          </div>

          {/* MAP */}
          <div className="overflow-hidden rounded-[2.5rem] bg-slate-100 shadow-xl">
            <iframe
              title="Arfat Dental Clinic Location"
              src="https://www.google.com/maps?q=1st%20%26%202nd%20Floor%2C%20Shalimar%20Tower%2C%20Above%20Haji%20Motors%2C%20Next%20to%20Bahar-e-Madina%20Masjid%2C%20Vanjar%20Patti%20Naka%2C%20Gokul%20Nagar%2C%20Bhiwandi%2C%20Maharashtra%20421302&output=embed"
              className="h-[500px] w-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* QUICK CONTACT */}
      <section className="bg-slate-50 px-5 py-20 lg:px-6 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-3">
            <a
              href={phoneLink}
              className="rounded-[2rem] border border-slate-200 bg-white p-7 text-center transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="text-3xl">☎</div>

              <h3 className="mt-4 font-bold text-slate-950">
                Call Us
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                {phoneNumber}
              </p>
            </a>

            <a
              href="mailto:naushad.bds@gmail.com"
              className="rounded-[2rem] border border-slate-200 bg-white p-7 text-center transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="text-3xl">✉</div>

              <h3 className="mt-4 font-bold text-slate-950">
                Email Us
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                naushad.bds@gmail.com
              </p>
            </a>

            <a
              href={googleMapsLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-[2rem] border border-slate-200 bg-white p-7 text-center transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="text-3xl">📍</div>

              <h3 className="mt-4 font-bold text-slate-950">
                Find Us
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Open location in Google Maps
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-20 lg:px-6 lg:py-24">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] bg-cyan-600 px-7 py-14 text-center text-white sm:px-12">
          <h2 className="text-4xl font-bold sm:text-5xl">
            Ready to book your visit?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-cyan-50">
            Choose a convenient appointment time and take the next step toward
            better dental care.
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
        © {new Date().getFullYear()} Arfat Dental Clinic. All rights reserved.
      </footer>
    </main>
  );
}