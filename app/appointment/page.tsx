"use client";

import { useState } from "react";
import Link from "next/link";
import { supabase } from "../lib/supabase";

const treatments = [
  "Dental Cleaning",
  "Root Canal Treatment",
  "Dental Implants",
  "Teeth Whitening",
  "Braces & Aligners",
  "Cosmetic Dentistry",
  "Dental Extraction",
  "Child Treatment",
  "Other",
];

const timeSlots = [
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
  "7:30 PM",
  "8:00 PM",
  "8:30 PM",
  "9:00 PM",
  "9:30 PM",
];

export default function AppointmentPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  function handleDateChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const selectedDate = event.target.value;

    if (!selectedDate) {
      setDate("");
      setError("");
      return;
    }

    const day = new Date(
      `${selectedDate}T12:00:00`
    ).getDay();

    if (day === 0) {
      setDate("");
      setError(
        "Sunday is closed. Please select Monday to Saturday."
      );
      return;
    }

    setDate(selectedDate);
    setError("");
  }

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setError("");

    if (loading) {
      return;
    }

    if (!date) {
      setError("Please select an appointment date.");
      return;
    }

    if (!time) {
      setError("Please select an appointment time.");
      return;
    }

    const formData = new FormData(event.currentTarget);

    const patientName = String(
      formData.get("patient_name") || ""
    ).trim();

    const phone = String(
      formData.get("phone") || ""
    ).trim();

    const email = String(
      formData.get("email") || ""
    ).trim();

    const treatment = String(
      formData.get("treatment") || ""
    ).trim();

    const message = String(
      formData.get("message") || ""
    ).trim();

    if (!patientName) {
      setError("Please enter your full name.");
      return;
    }

    if (!phone) {
      setError("Please enter your phone number.");
      return;
    }

    if (!treatment) {
      setError("Please select a treatment.");
      return;
    }

    setLoading(true);

    try {
      /*
       * STEP 1
       * Check whether the selected slot is already
       * booked or blocked.
       */
      const { data: existing, error: checkError } =
        await supabase
          .from("appointments")
          .select(
            "id, status, is_blocked"
          )
          .eq("appointment_date", date)
          .eq("appointment_time", time)
          .limit(1);

      if (checkError) {
        console.error(
          "CHECK SLOT ERROR:",
          checkError
        );

        setError(
          `Unable to check appointment slot: ${checkError.message}`
        );

        return;
      }

      /*
       * SLOT ALREADY EXISTS
       */
      if (existing && existing.length > 0) {
        const existingAppointment = existing[0];

        if (existingAppointment.is_blocked === true) {
          setError(
            "Sorry, this time slot has been blocked by the clinic. Please choose another time."
          );

          return;
        }

        setError(
          "Sorry, this time slot is already booked. Please choose another time."
        );

        return;
      }

      /*
       * STEP 2
       * Insert the patient appointment.
       *
       * IMPORTANT:
       * message is NEVER null.
       */
      const { data: newAppointment, error: insertError } =
        await supabase
          .from("appointments")
          .insert({
            patient_name: patientName,
            phone: phone,
            email: email || "",
            treatment: treatment,
            appointment_date: date,
            appointment_time: time,
            message: message || "",
            status: "pending",
            is_blocked: false,
          })
          .select()
          .single();

      if (insertError) {
        console.error(
          "APPOINTMENT INSERT ERROR:",
          insertError
        );

        setError(
          `Appointment could not be saved: ${insertError.message}`
        );

        return;
      }

      console.log(
        "APPOINTMENT SAVED:",
        newAppointment
      );

      /*
       * SUCCESS
       */
      setSubmitted(true);
    } catch (err) {
      console.error(
        "APPOINTMENT ERROR:",
        err
      );

      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  function resetForm() {
    setSubmitted(false);
    setLoading(false);
    setError("");
    setDate("");
    setTime("");
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">

      {/* HEADER */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5">

          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <img
              src="/images/logo.jpeg"
              alt="Arfat Dental Clinic"
              className="h-12 w-12 rounded-xl object-contain"
            />

            <div>
              <div className="text-lg font-bold">
                Arfat Dental Clinic
              </div>

              <div className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-600">
                Dental Care & Specialists
              </div>
            </div>
          </Link>

          <Link
            href="/"
            className="rounded-full border border-slate-200 px-5 py-2.5 text-sm font-semibold hover:border-cyan-300 hover:text-cyan-600"
          >
            ← Back to Home
          </Link>

        </div>
      </header>

      {/* HERO */}
      <section className="bg-slate-950 px-5 py-16 text-white">
        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
            Book Your Visit
          </p>

          <h1 className="mt-4 text-4xl font-bold sm:text-6xl">
            Book an Appointment
          </h1>

          <p className="mt-5 max-w-2xl text-lg text-slate-300">
            Choose your treatment, date and preferred
            appointment time.
          </p>

        </div>
      </section>

      {/* APPOINTMENT */}
      <section className="px-5 py-16">

        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">

          {/* LEFT */}
          <div>

            <div className="rounded-[2rem] bg-cyan-600 p-8 text-white shadow-xl">

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-100">
                Arfat Dental Clinic
              </p>

              <h2 className="mt-4 text-3xl font-bold">
                Your smile deserves the best care.
              </h2>

              <p className="mt-5 leading-7 text-cyan-50">
                Request your appointment online and
                our clinic team will contact you to
                confirm your visit.
              </p>

              <div className="mt-8 space-y-5">

                <div>
                  <p className="font-bold">
                    30-minute slots
                  </p>

                  <p className="mt-1 text-sm text-cyan-100">
                    Appointments are scheduled in
                    30-minute slots.
                  </p>
                </div>

                <div>
                  <p className="font-bold">
                    Monday – Saturday
                  </p>

                  <p className="mt-1 text-sm text-cyan-100">
                    11 AM – 3 PM and 6 PM – 10 PM
                  </p>
                </div>

                <div>
                  <p className="font-bold">
                    Sunday Closed
                  </p>

                  <p className="mt-1 text-sm text-cyan-100">
                    No appointments are available on Sunday.
                  </p>
                </div>

              </div>

            </div>

            <div className="mt-6 rounded-[2rem] border border-slate-200 bg-white p-7">

              <h3 className="text-xl font-bold">
                Clinic Information
              </h3>

              <div className="mt-6 space-y-5">

                <div>
                  <p className="text-sm font-bold">
                    Opening Hours
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    Monday – Saturday
                  </p>

                  <p className="text-sm text-slate-500">
                    11:00 AM – 3:00 PM
                  </p>

                  <p className="text-sm text-slate-500">
                    6:00 PM – 10:00 PM
                  </p>

                  <p className="mt-1 text-sm font-semibold text-red-500">
                    Sunday Closed
                  </p>
                </div>

                <div>
                  <p className="text-sm font-bold">
                    Phone
                  </p>

                  <a
                    href="tel:+919552786566"
                    className="mt-1 block text-sm text-cyan-600"
                  >
                    +91 95527 86566
                  </a>
                </div>

                <div>
                  <p className="text-sm font-bold">
                    Email
                  </p>

                  <a
                    href="mailto:naushad.bds@gmail.com"
                    className="mt-1 block text-sm text-cyan-600"
                  >
                    naushad.bds@gmail.com
                  </a>
                </div>

              </div>

            </div>

          </div>

          {/* FORM */}
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl sm:p-9">

            {!submitted ? (

              <>
                <div>

                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-600">
                    Appointment Request
                  </p>

                  <h2 className="mt-3 text-3xl font-bold">
                    Tell us how we can help
                  </h2>

                  <p className="mt-3 text-sm text-slate-500">
                    Fill in your information and select
                    your preferred date and time.
                  </p>

                </div>

                <form
                  onSubmit={handleSubmit}
                  className="mt-8 space-y-5"
                >

                  {/* NAME + PHONE */}
                  <div className="grid gap-5 sm:grid-cols-2">

                    <div>
                      <label className="mb-2 block text-sm font-bold">
                        Full Name
                      </label>

                      <input
                        required
                        type="text"
                        name="patient_name"
                        placeholder="Enter your name"
                        className="w-full rounded-2xl border border-slate-200 px-4 py-3.5 outline-none focus:border-cyan-500"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-bold">
                        Phone Number
                      </label>

                      <input
                        required
                        type="tel"
                        name="phone"
                        placeholder="+91 9876543210"
                        className="w-full rounded-2xl border border-slate-200 px-4 py-3.5 outline-none focus:border-cyan-500"
                      />
                    </div>

                  </div>

                  {/* EMAIL */}
                  <div>

                    <label className="mb-2 block text-sm font-bold">
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      className="w-full rounded-2xl border border-slate-200 px-4 py-3.5 outline-none focus:border-cyan-500"
                    />

                  </div>

                  {/* TREATMENT */}
                  <div>

                    <label className="mb-2 block text-sm font-bold">
                      Treatment
                    </label>

                    <select
                      required
                      name="treatment"
                      defaultValue=""
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 outline-none focus:border-cyan-500"
                    >

                      <option value="" disabled>
                        Select treatment
                      </option>

                      {treatments.map(
                        (treatment) => (
                          <option
                            key={treatment}
                            value={treatment}
                          >
                            {treatment}
                          </option>
                        )
                      )}

                    </select>

                  </div>

                  {/* DATE */}
                  <div>

                    <label className="mb-2 block text-sm font-bold">
                      Preferred Date
                    </label>

                    <input
                      required
                      type="date"
                      value={date}
                      onChange={handleDateChange}
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 outline-none focus:border-cyan-500"
                    />

                  </div>

                  {/* TIME */}
                  <div>

                    <label className="mb-2 block text-sm font-bold">
                      Preferred Time
                    </label>

                    <select
                      required
                      value={time}
                      onChange={(e) =>
                        setTime(e.target.value)
                      }
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 outline-none focus:border-cyan-500"
                    >

                      <option value="">
                        Select appointment time
                      </option>

                      {timeSlots.map(
                        (slot) => (
                          <option
                            key={slot}
                            value={slot}
                          >
                            {slot}
                          </option>
                        )
                      )}

                    </select>

                  </div>

                  {/* MESSAGE */}
                  <div>

                    <label className="mb-2 block text-sm font-bold">
                      Message
                    </label>

                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Tell us anything you'd like the dentist to know..."
                      className="w-full resize-none rounded-2xl border border-slate-200 px-4 py-3.5 outline-none focus:border-cyan-500"
                    />

                  </div>

                  {/* ERROR */}
                  {error && (
                    <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-600">
                      {error}
                    </div>
                  )}

                  {/* BUTTON */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-2xl bg-cyan-600 px-6 py-4 text-sm font-bold text-white shadow-lg transition hover:bg-cyan-700 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {loading
                      ? "Saving Appointment..."
                      : "Request Appointment →"}
                  </button>

                  <p className="text-center text-xs text-slate-400">
                    Your appointment will be saved and
                    reviewed by the clinic.
                  </p>

                </form>

              </>

            ) : (

              <div className="flex min-h-[600px] flex-col items-center justify-center text-center">

                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-cyan-100 text-3xl text-cyan-600">
                  ✓
                </div>

                <h2 className="mt-7 text-3xl font-bold">
                  Appointment Request Sent!
                </h2>

                <p className="mt-4 max-w-md leading-7 text-slate-500">
                  Thank you for contacting Arfat Dental
                  Clinic. Your appointment request has
                  been received.
                </p>

                <div className="mt-8 rounded-2xl bg-slate-50 p-6 text-left">

                  <p className="text-sm text-slate-500">
                    Requested Date
                  </p>

                  <p className="font-bold">
                    {date}
                  </p>

                  <p className="mt-4 text-sm text-slate-500">
                    Requested Time
                  </p>

                  <p className="font-bold text-cyan-600">
                    {time}
                  </p>

                </div>

                <p className="mt-5 text-sm text-slate-400">
                  The clinic will contact you to confirm
                  your appointment.
                </p>

                <div className="mt-8 flex gap-3">

                  <Link
                    href="/"
                    className="rounded-full bg-cyan-600 px-7 py-3.5 text-sm font-bold text-white"
                  >
                    Back to Home
                  </Link>

                  <button
                    type="button"
                    onClick={resetForm}
                    className="rounded-full border border-slate-200 px-7 py-3.5 text-sm font-bold"
                  >
                    Book Another
                  </button>

                </div>

              </div>

            )}

          </div>

        </div>

      </section>

      <footer className="bg-slate-950 px-5 py-10 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Arfat Dental Clinic. All rights reserved.
      </footer>

    </main>
  );
}