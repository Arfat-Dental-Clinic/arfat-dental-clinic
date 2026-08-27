"use client";

import { useMemo, useState } from "react";

const treatments = [
  "Dental Implant",
  "Root Canal",
  "Extraction",
  "Teeth Whitening",
  "Braces & Aligners",
  "Child Treatment",
  "Cosmetic & Aesthetic",
];

function slotsFor(date: string) {
  if (!date) return [];
  const d = new Date(date + "T12:00:00");
  const day = d.getDay();
  if (day === 0) return [];
  const result: string[] = [];
  for (const [start, end] of [[11 * 60, 15 * 60], [18 * 60, 22 * 60]]) {
    for (let m = start; m < end; m += 15) {
      const h = Math.floor(m / 60), min = m % 60;
      result.push(`${String(h).padStart(2, "0")}:${String(min).padStart(2, "0")}`);
    }
  }
  return result;
}

export default function AppointmentPage() {
  const [form, setForm] = useState({ name: "", phone: "", treatment: "", date: "", time: "", message: "" });
  const [done, setDone] = useState(false);

  const slots = useMemo(() => slotsFor(form.date), [form.date]);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const booking = { ...form, id: crypto.randomUUID(), createdAt: new Date().toISOString(), status: "New" };
    const old = JSON.parse(localStorage.getItem("arfat_appointments") || "[]");
    localStorage.setItem("arfat_appointments", JSON.stringify([booking, ...old]));
    setDone(true);
  }

  if (done) {
    const text = `Hello Arfat Dental Center, I booked an appointment.%0AName: ${encodeURIComponent(form.name)}%0ATreatment: ${encodeURIComponent(form.treatment)}%0ADate: ${encodeURIComponent(form.date)}%0ATime: ${encodeURIComponent(form.time)}`;
    return (
      <main className="booking-page">
        <div className="success-card">
          <span className="success-icon">✓</span>
          <span className="eyebrow">APPOINTMENT REQUEST RECEIVED</span>
          <h1>Thank you, {form.name}.</h1>
          <p>Your appointment request has been saved. Please send the WhatsApp message below so the clinic can confirm your booking.</p>
          <a className="button primary" href={`https://wa.me/919552786566?text=${text}`} target="_blank">Send WhatsApp to Clinic</a>
          <a className="back-link" href="/">← Back to website</a>
        </div>
      </main>
    );
  }

  return (
    <main className="booking-page">
      <div className="booking-top"><a href="/">← Arfat Dental Center</a></div>
      <div className="booking-wrap">
        <div className="booking-intro">
          <span className="eyebrow">ONLINE APPOINTMENT</span>
          <h1>Book your visit.</h1>
          <p>15-minute appointment slots. Monday–Saturday, 11 AM–3 PM and 6 PM–10 PM. Sunday closed.</p>
        </div>
        <form className="appointment-form" onSubmit={submit}>
          <label>Full name<input required value={form.name} onChange={e => setForm({...form,name:e.target.value})} /></label>
          <label>Mobile / WhatsApp number<input required pattern="[0-9 +()-]{10,}" value={form.phone} onChange={e => setForm({...form,phone:e.target.value})} /></label>
          <label>Treatment<select required value={form.treatment} onChange={e => setForm({...form,treatment:e.target.value})}><option value="">Select treatment</option>{treatments.map(x => <option key={x}>{x}</option>)}</select></label>
          <label>Date<input required type="date" min={new Date().toISOString().split("T")[0]} value={form.date} onChange={e => setForm({...form,date:e.target.value,time:""})} /></label>
          <label>Available time<select required value={form.time} onChange={e => setForm({...form,time:e.target.value})} disabled={!form.date}><option value="">{form.date && slots.length ? "Select time" : "Choose a date first"}</option>{slots.map(x => <option key={x}>{x}</option>)}</select></label>
          <label>Message / reason for visit <span>(optional)</span><textarea rows={4} value={form.message} onChange={e => setForm({...form,message:e.target.value})} /></label>
          <button className="button primary full" type="submit">Request Appointment</button>
          <p className="form-note">No online payment. Payment is made at the clinic. Appointment is subject to clinic confirmation.</p>
        </form>
      </div>
    </main>
  );
}
