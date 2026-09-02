"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../lib/supabase";

type Appointment = {
  id: string;
  patient_name: string;
  phone: string;
  email: string;
  treatment: string;
  appointment_date: string;
  appointment_time: string;
  message: string | null;
  status: string;
  is_blocked: boolean;
};

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

export default function AdminPage() {
  const router = useRouter();

  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [error, setError] = useState("");

  const [blockDate, setBlockDate] = useState("");
  const [blockTime, setBlockTime] = useState("");
  const [blocking, setBlocking] = useState(false);

  async function checkLogin() {
    setCheckingAuth(true);

    const { data, error: authError } =
      await supabase.auth.getUser();

    if (authError || !data.user) {
      router.replace("/admin/login");
      return;
    }

    setCheckingAuth(false);

    await loadAppointments();
  }

  async function loadAppointments() {
    setLoading(true);
    setError("");

    const { data, error: loadError } =
      await supabase
        .from("appointments")
        .select(
          "id, patient_name, phone, email, treatment, appointment_date, appointment_time, message, status, is_blocked"
        )
        .order("appointment_date", {
          ascending: true,
        })
        .order("appointment_time", {
          ascending: true,
        });

    if (loadError) {
      console.error(
        "LOAD APPOINTMENTS ERROR:",
        loadError
      );

      setError(
        `Unable to load appointments: ${loadError.message}`
      );

      setLoading(false);
      return;
    }

    setAppointments(
      (data || []) as Appointment[]
    );

    setLoading(false);
  }

  useEffect(() => {
    checkLogin();
  }, []);

  async function blockSlot() {
    setError("");

    if (!blockDate) {
      setError("Please select a date.");
      return;
    }

    if (!blockTime) {
      setError("Please select a time.");
      return;
    }

    const selectedDay = new Date(
      `${blockDate}T12:00:00`
    ).getDay();

    if (selectedDay === 0) {
      setError("Sunday is closed.");
      return;
    }

    setBlocking(true);

    try {
      const {
        data: existing,
        error: checkError,
      } = await supabase
        .from("appointments")
        .select(
          "id, is_blocked, patient_name"
        )
        .eq(
          "appointment_date",
          blockDate
        )
        .eq(
          "appointment_time",
          blockTime
        )
        .limit(1);

      if (checkError) {
        console.error(
          "CHECK SLOT ERROR:",
          checkError
        );

        setError(
          `Could not check slot: ${checkError.message}`
        );

        return;
      }

      if (
        existing &&
        existing.length > 0
      ) {
        if (existing[0].is_blocked) {
          setError(
            "This slot is already blocked."
          );
        } else {
          setError(
            "This slot already has a patient appointment."
          );
        }

        return;
      }

      const {
        data: blocked,
        error: insertError,
      } = await supabase
        .from("appointments")
        .insert({
          patient_name: "BLOCKED SLOT",
          phone: "BLOCKED",
          email:
            "blocked@arfatdentalclinic.com",
          treatment: "Blocked",
          appointment_date: blockDate,
          appointment_time: blockTime,
          message:
            "This appointment slot has been blocked by the clinic.",
          status: "blocked",
          is_blocked: true,
        })
        .select(
          "id, patient_name, phone, email, treatment, appointment_date, appointment_time, message, status, is_blocked"
        )
        .single();

      if (insertError) {
        console.error(
          "BLOCK INSERT ERROR:",
          insertError
        );

        setError(
          `Block failed: ${insertError.message}`
        );

        return;
      }

      if (blocked) {
        setAppointments((current) =>
          [...current, blocked as Appointment].sort(
            (a, b) => {
              const dateCompare =
                a.appointment_date.localeCompare(
                  b.appointment_date
                );

              if (dateCompare !== 0) {
                return dateCompare;
              }

              return a.appointment_time.localeCompare(
                b.appointment_time
              );
            }
          )
        );
      }

      setBlockDate("");
      setBlockTime("");
    } catch (err) {
      console.error(
        "BLOCK SLOT ERROR:",
        err
      );

      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong while blocking the slot."
      );
    } finally {
      setBlocking(false);
    }
  }

  async function unblockSlot(
    id: string
  ) {
    setError("");

    const {
      error: deleteError,
    } = await supabase
      .from("appointments")
      .delete()
      .eq("id", id)
      .eq("is_blocked", true);

    if (deleteError) {
      console.error(
        "UNBLOCK ERROR:",
        deleteError
      );

      setError(
        `Unable to unblock slot: ${deleteError.message}`
      );

      return;
    }

    setAppointments((current) =>
      current.filter(
        (appointment) =>
          appointment.id !== id
      )
    );
  }

  async function updateStatus(
    id: string,
    status: string
  ) {
    setError("");

    const {
      error: updateError,
    } = await supabase
      .from("appointments")
      .update({
        status,
      })
      .eq("id", id)
      .eq("is_blocked", false);

    if (updateError) {
      console.error(
        "UPDATE STATUS ERROR:",
        updateError
      );

      setError(
        `Unable to update appointment: ${updateError.message}`
      );

      return;
    }

    setAppointments((current) =>
      current.map((appointment) =>
        appointment.id === id
          ? {
              ...appointment,
              status,
            }
          : appointment
      )
    );
  }

  function openWhatsApp(
    appointment: Appointment
  ) {
    // Remove spaces, +, brackets, hyphens, etc.
    let patientPhone =
      appointment.phone.replace(/\D/g, "");

    // Add Indian country code if a 10-digit
    // Indian mobile number was entered.
    if (patientPhone.length === 10) {
      patientPhone = `91${patientPhone}`;
    }

    if (!patientPhone) {
      setError(
        "This patient does not have a valid phone number."
      );
      return;
    }

    let whatsappMessage = "";

    if (appointment.status === "confirmed") {
      whatsappMessage = `Hello ${appointment.patient_name},

Your appointment at Arfat Dental Center has been CONFIRMED. ✅

📅 Date: ${appointment.appointment_date}
🕐 Time: ${appointment.appointment_time}
🦷 Treatment: ${appointment.treatment}

We look forward to seeing you.

Thank you,
Arfat Dental Center`;
    } else if (
      appointment.status === "cancelled"
    ) {
      whatsappMessage = `Hello ${appointment.patient_name},

We regret to inform you that your appointment request at Arfat Dental Center could not be confirmed. ❌

📅 Requested Date: ${appointment.appointment_date}
🕐 Requested Time: ${appointment.appointment_time}
🦷 Treatment: ${appointment.treatment}

Please contact us or book another convenient appointment time.

Thank you,
Arfat Dental Center`;
    } else {
      whatsappMessage = `Hello ${appointment.patient_name},

Thank you for booking an appointment at Arfat Dental Center. 🦷

Your appointment request is currently PENDING.

📅 Date: ${appointment.appointment_date}
🕐 Time: ${appointment.appointment_time}
🦷 Treatment: ${appointment.treatment}

We will review your appointment and confirm it soon.

Thank you,
Arfat Dental Center`;
    }

    const whatsappUrl =
      `https://wa.me/${patientPhone}?text=` +
      encodeURIComponent(
        whatsappMessage
      );

    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );
  }

  async function logout() {
    await supabase.auth.signOut();

    router.replace("/admin/login");
    router.refresh();
  }

  if (checkingAuth) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-100 px-5">
        <div className="rounded-2xl bg-white p-10 text-center shadow-sm">
          <div className="mx-auto h-8 w-8 animate-spin rounded-full border-4 border-slate-200 border-t-cyan-600" />

          <p className="mt-4 font-semibold text-slate-600">
            Checking admin access...
          </p>
        </div>
      </main>
    );
  }

  const patientAppointments =
    appointments.filter(
      (appointment) =>
        !appointment.is_blocked
    );

  const blockedAppointments =
    appointments.filter(
      (appointment) =>
        appointment.is_blocked
    );

  const pendingCount =
    patientAppointments.filter(
      (appointment) =>
        appointment.status === "pending"
    ).length;

  const confirmedCount =
    patientAppointments.filter(
      (appointment) =>
        appointment.status === "confirmed"
    ).length;

  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">

      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-5 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-600">
              Arfat Dental Center
            </p>

            <h1 className="mt-1 text-2xl font-bold text-slate-950">
              Appointment Dashboard
            </h1>
          </div>

          <div className="flex flex-wrap gap-2">

            <button
              type="button"
              onClick={loadAppointments}
              disabled={loading}
              className="rounded-full bg-cyan-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-cyan-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading
                ? "Refreshing..."
                : "Refresh"}
            </button>

            <button
              type="button"
              onClick={logout}
              className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-bold text-slate-700 transition hover:border-red-300 hover:text-red-600"
            >
              Logout
            </button>

          </div>

        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 py-10">

        {error && (
          <div className="mb-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-600">
            {error}
          </div>
        )}

        <div className="mb-8 rounded-[2rem] bg-white p-7 shadow-sm">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-500">
            Clinic Control
          </p>

          <h2 className="mt-2 text-2xl font-bold text-slate-950">
            Block an Appointment Slot
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
            Block a time when the doctor is
            unavailable. Patients will not be
            able to book a blocked time.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-[1fr_1fr_auto]">

            <div>
              <label
                htmlFor="block-date"
                className="mb-2 block text-sm font-bold text-slate-700"
              >
                Date
              </label>

              <input
                id="block-date"
                type="date"
                value={blockDate}
                onChange={(event) =>
                  setBlockDate(
                    event.target.value
                  )
                }
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10"
              />
            </div>

            <div>
              <label
                htmlFor="block-time"
                className="mb-2 block text-sm font-bold text-slate-700"
              >
                Time
              </label>

              <select
                id="block-time"
                value={blockTime}
                onChange={(event) =>
                  setBlockTime(
                    event.target.value
                  )
                }
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10"
              >
                <option value="">
                  Select time
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

            <div className="flex items-end">

              <button
                type="button"
                onClick={blockSlot}
                disabled={blocking}
                className="w-full rounded-2xl bg-red-600 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50 md:w-auto"
              >
                {blocking
                  ? "Blocking..."
                  : "Block Slot"}
              </button>

            </div>

          </div>
        </div>

        <div className="mb-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">
              Patient Appointments
            </p>

            <p className="mt-2 text-3xl font-bold text-slate-950">
              {patientAppointments.length}
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">
              Pending
            </p>

            <p className="mt-2 text-3xl font-bold text-amber-500">
              {pendingCount}
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">
              Confirmed
            </p>

            <p className="mt-2 text-3xl font-bold text-green-600">
              {confirmedCount}
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">
              Blocked Slots
            </p>

            <p className="mt-2 text-3xl font-bold text-red-600">
              {blockedAppointments.length}
            </p>
          </div>

        </div>

        {blockedAppointments.length > 0 && (
          <div className="mb-10">

            <div className="mb-4">
              <h2 className="text-2xl font-bold text-slate-950">
                Blocked Slots
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                These times cannot be booked
                by patients.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

              {blockedAppointments.map(
                (appointment) => (
                  <div
                    key={appointment.id}
                    className="rounded-2xl border border-red-200 bg-red-50 p-5"
                  >

                    <div className="flex items-start justify-between gap-4">

                      <div>

                        <p className="text-xs font-bold uppercase tracking-wider text-red-500">
                          Blocked by Clinic
                        </p>

                        <p className="mt-2 font-bold text-slate-950">
                          {
                            appointment.appointment_date
                          }
                        </p>

                        <p className="mt-1 text-lg font-bold text-red-600">
                          {
                            appointment.appointment_time
                          }
                        </p>

                      </div>

                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        unblockSlot(
                          appointment.id
                        )
                      }
                      className="mt-4 rounded-xl bg-white px-4 py-2.5 text-sm font-bold text-slate-700 shadow-sm transition hover:text-green-600"
                    >
                      Unblock
                    </button>

                  </div>
                )
              )}

            </div>

          </div>
        )}

        <div>

          <div className="mb-4">
            <h2 className="text-2xl font-bold text-slate-950">
              Patient Appointments
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Manage appointment requests from
              patients.
            </p>
          </div>

          {loading ? (

            <div className="rounded-2xl bg-white p-10 text-center shadow-sm">
              <p className="text-slate-500">
                Loading appointments...
              </p>
            </div>

          ) : patientAppointments.length === 0 ? (

            <div className="rounded-2xl bg-white p-10 text-center shadow-sm">

              <p className="text-lg font-bold text-slate-950">
                No patient appointments yet
              </p>

              <p className="mt-2 text-sm text-slate-500">
                New bookings will appear here.
              </p>

            </div>

          ) : (

            <div className="space-y-5">

              {patientAppointments.map(
                (appointment) => (

                  <div
                    key={appointment.id}
                    className="rounded-2xl bg-white p-6 shadow-sm"
                  >

                    <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">

                      <div className="min-w-0">

                        <div className="flex flex-wrap items-center gap-3">

                          <h3 className="text-xl font-bold text-slate-950">
                            {
                              appointment.patient_name
                            }
                          </h3>

                          <span
                            className={`rounded-full px-3 py-1 text-xs font-bold ${
                              appointment.status ===
                              "confirmed"
                                ? "bg-green-100 text-green-700"
                                : appointment.status ===
                                  "cancelled"
                                ? "bg-red-100 text-red-700"
                                : "bg-amber-100 text-amber-700"
                            }`}
                          >
                            {
                              appointment.status
                            }
                          </span>

                        </div>

                        <div className="mt-4 space-y-2 text-sm text-slate-600">

                          <p>
                            <strong>
                              Phone:
                            </strong>{" "}
                            {
                              appointment.phone
                            }
                          </p>

                          {appointment.email && (
                            <p>
                              <strong>
                                Email:
                              </strong>{" "}
                              {
                                appointment.email
                              }
                            </p>
                          )}

                          <p>
                            <strong>
                              Treatment:
                            </strong>{" "}
                            {
                              appointment.treatment
                            }
                          </p>

                          <p>
                            <strong>
                              Date:
                            </strong>{" "}
                            {
                              appointment.appointment_date
                            }
                          </p>

                          <p>
                            <strong>
                              Time:
                            </strong>{" "}
                            {
                              appointment.appointment_time
                            }
                          </p>

                        </div>

                        {appointment.message && (
                          <div className="mt-5 rounded-xl bg-slate-50 p-4">

                            <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                              Patient Message
                            </p>

                            <p className="mt-2 text-sm leading-6 text-slate-600">
                              {
                                appointment.message
                              }
                            </p>

                          </div>
                        )}

                      </div>

                      <div className="flex flex-wrap gap-2 lg:max-w-md lg:justify-end">

                        <button
                          type="button"
                          onClick={() =>
                            openWhatsApp(
                              appointment
                            )
                          }
                          className="rounded-xl bg-green-600 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-green-700"
                        >
                          WhatsApp
                        </button>

                        <button
                          type="button"
                          onClick={() =>
                            updateStatus(
                              appointment.id,
                              "confirmed"
                            )
                          }
                          className="rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-emerald-700"
                        >
                          Confirm
                        </button>

                        <button
                          type="button"
                          onClick={() =>
                            updateStatus(
                              appointment.id,
                              "cancelled"
                            )
                          }
                          className="rounded-xl bg-red-600 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-red-700"
                        >
                          Cancel
                        </button>

                        <button
                          type="button"
                          onClick={() =>
                            updateStatus(
                              appointment.id,
                              "pending"
                            )
                          }
                          className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 transition hover:border-cyan-400 hover:text-cyan-600"
                        >
                          Pending
                        </button>

                      </div>

                    </div>

                  </div>

                )
              )}

            </div>

          )}

        </div>

      </section>

    </main>
  );
  
}