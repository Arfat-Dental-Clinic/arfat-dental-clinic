"use client";

import { useEffect, useState } from "react";

type Booking = { id: string; name: string; phone: string; treatment: string; date: string; time: string; message: string; createdAt: string; status: string };

export default function AdminPage() {
  const [items, setItems] = useState<Booking[]>([]);
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState("");

  useEffect(() => setItems(JSON.parse(localStorage.getItem("arfat_appointments") || "[]")), []);

  function login(e: React.FormEvent) {
    e.preventDefault();
    if (password === "arfat123") setAuthed(true);
    else alert("Incorrect demo password.");
  }

  function save(next: Booking[]) {
    setItems(next);
    localStorage.setItem("arfat_appointments", JSON.stringify(next));
  }

  if (!authed) return (
    <main className="admin-page">
      <form className="admin-login" onSubmit={login}>
        <span className="eyebrow">ARFAT DENTAL CENTER</span>
        <h1>Admin panel</h1>
        <p>Demo local admin for the first website build.</p>
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        <button className="button primary full">Open dashboard</button>
        <a href="/">← Back to website</a>
      </form>
    </main>
  );

  return (
    <main className="admin-page">
      <div className="admin-head"><div><span className="eyebrow">ARFAT DENTAL CENTER</span><h1>Appointments</h1></div><a href="/">View website</a></div>
      <div className="admin-card">
        <div className="admin-toolbar"><strong>{items.length} appointment{items.length === 1 ? "" : "s"}</strong><button onClick={() => save([])}>Clear demo appointments</button></div>
        {items.length === 0 ? <p className="empty">No appointments yet. Book one from the appointment page to test the dashboard.</p> : items.map(b => (
          <article className="appointment-row" key={b.id}>
            <div><strong>{b.name}</strong><span>{b.phone}</span><small>{b.treatment} · {b.date} · {b.time}</small>{b.message && <small>{b.message}</small>}</div>
            <div><select value={b.status} onChange={e => save(items.map(x => x.id === b.id ? {...x,status:e.target.value} : x))}><option>New</option><option>Confirmed</option><option>Completed</option><option>Cancelled</option></select><a href={`https://wa.me/91${b.phone.replace(/\D/g,"")}?text=Hello%20${encodeURIComponent(b.name)},%20your%20appointment%20at%20Arfat%20Dental%20Center%20is%20${b.status.toLowerCase()}.`} target="_blank">WhatsApp patient</a></div>
          </article>
        ))}
      </div>
      <p className="demo-warning">Demo note: this first version stores appointments in this browser only. Before launch, we should connect a real database, secure admin login, and WhatsApp Business API so bookings work across devices.</p>
    </main>
  );
}
