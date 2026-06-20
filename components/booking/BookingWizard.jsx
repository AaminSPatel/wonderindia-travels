"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineMapPin,
  HiOutlineUser,
  HiOutlineCalendarDays,
  HiOutlineCreditCard,
  HiCheckCircle,
} from "react-icons/hi2";
import { packages } from "@/data/packages";
import { formatINR, cn } from "@/lib/utils";

const steps = [
  { id: 1, label: "Package", icon: HiOutlineMapPin },
  { id: 2, label: "Traveler Details", icon: HiOutlineUser },
  { id: 3, label: "Travel Dates", icon: HiOutlineCalendarDays },
  { id: 4, label: "Payment", icon: HiOutlineCreditCard },
  { id: 5, label: "Confirmation", icon: HiCheckCircle },
];

export default function BookingWizard() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    packageSlug: packages[0].slug,
    travelers: 2,
    name: "",
    email: "",
    phone: "",
    startDate: "",
    payment: "card",
  });

  const selectedPackage = packages.find((p) => p.slug === form.packageSlug);
  const total = selectedPackage ? selectedPackage.price * form.travelers : 0;

  const update = (key, value) => setForm((f) => ({ ...f, [key]: value }));

  const next = () => setStep((s) => Math.min(s + 1, 5));
  const back = () => setStep((s) => Math.max(s - 1, 1));

  return (
    <div className="mx-auto max-w-4xl">
      {/* Step indicator */}
      <div className="mb-12 flex items-center justify-between overflow-x-auto">
        {steps.map((s, i) => (
          <div key={s.id} className="flex flex-1 items-center last:flex-none">
            <div className="flex flex-col items-center gap-2">
              <span
                className={cn(
                  "flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full transition-colors duration-300",
                  step >= s.id ? "bg-deepblue text-cream" : "bg-deepblue/5 text-deepblue/40 dark:bg-white/10 dark:text-cream/40"
                )}
              >
                <s.icon className="h-5 w-5" />
              </span>
              <span className="hidden font-utility text-[11px] text-deepblue/50 dark:text-cream/50 sm:block">
                {s.label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <span
                className={cn(
                  "mx-2 h-0.5 flex-1 rounded-full transition-colors duration-500",
                  step > s.id ? "bg-deepblue" : "bg-deepblue/10 dark:bg-white/10"
                )}
              />
            )}
          </div>
        ))}
      </div>

      <div className="glass-card rounded-3xl p-6 sm:p-10">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div key="1" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.35 }}>
              <h2 className="font-display text-xl font-semibold text-deepblue dark:text-cream">Choose Your Package</h2>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {packages.map((p) => (
                  <button
                    key={p.slug}
                    onClick={() => update("packageSlug", p.slug)}
                    className={cn(
                      "rounded-2xl border p-4 text-left transition-all duration-300",
                      form.packageSlug === p.slug
                        ? "border-deepblue bg-deepblue/5 dark:border-cream dark:bg-white/10"
                        : "border-deepblue/10 hover:border-deepblue/30 dark:border-white/10"
                    )}
                  >
                    <p className="font-display text-sm font-semibold text-deepblue dark:text-cream">{p.name}</p>
                    <p className="mt-1 font-utility text-xs text-deepblue/50 dark:text-cream/50">{p.duration}</p>
                    <p className="mt-2 font-display text-sm font-semibold text-sunset-600">{formatINR(p.price)} / person</p>
                  </button>
                ))}
              </div>

              <label className="mt-6 block">
                <span className="font-utility text-xs font-semibold uppercase tracking-wide text-deepblue/50 dark:text-cream/50">
                  Number of Travelers
                </span>
                <input
                  type="number"
                  min={1}
                  max={10}
                  value={form.travelers}
                  onChange={(e) => update("travelers", Number(e.target.value))}
                  className="mt-2 w-32 rounded-xl border border-deepblue/15 bg-white/70 px-4 py-3 font-body text-sm text-deepblue outline-none focus:border-sky-400 dark:border-white/15 dark:bg-white/5 dark:text-cream"
                />
              </label>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div key="2" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.35 }}>
              <h2 className="font-display text-xl font-semibold text-deepblue dark:text-cream">Traveler Details</h2>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  placeholder="Full Name"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  className="w-full rounded-xl border border-deepblue/15 bg-white/70 px-4 py-3 font-body text-sm text-deepblue outline-none focus:border-sky-400 dark:border-white/15 dark:bg-white/5 dark:text-cream"
                />
                <input
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  className="w-full rounded-xl border border-deepblue/15 bg-white/70 px-4 py-3 font-body text-sm text-deepblue outline-none focus:border-sky-400 dark:border-white/15 dark:bg-white/5 dark:text-cream"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  className="sm:col-span-2 w-full rounded-xl border border-deepblue/15 bg-white/70 px-4 py-3 font-body text-sm text-deepblue outline-none focus:border-sky-400 dark:border-white/15 dark:bg-white/5 dark:text-cream"
                />
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div key="3" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.35 }}>
              <h2 className="font-display text-xl font-semibold text-deepblue dark:text-cream">Travel Dates</h2>
              <label className="mt-6 block max-w-xs">
                <span className="font-utility text-xs font-semibold uppercase tracking-wide text-deepblue/50 dark:text-cream/50">
                  Start Date
                </span>
                <input
                  type="date"
                  value={form.startDate}
                  onChange={(e) => update("startDate", e.target.value)}
                  className="mt-2 w-full rounded-xl border border-deepblue/15 bg-white/70 px-4 py-3 font-body text-sm text-deepblue outline-none focus:border-sky-400 dark:border-white/15 dark:bg-white/5 dark:text-cream"
                />
              </label>
              <p className="mt-3 font-utility text-xs text-deepblue/50 dark:text-cream/50">
                Package duration: {selectedPackage?.duration}
              </p>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div key="4" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.35 }}>
              <h2 className="font-display text-xl font-semibold text-deepblue dark:text-cream">Payment Summary</h2>
              <div className="mt-6 space-y-3 rounded-2xl bg-deepblue/[0.04] p-5 dark:bg-white/5">
                <Row label="Package" value={selectedPackage?.name} />
                <Row label="Travelers" value={form.travelers} />
                <Row label="Start Date" value={form.startDate || "Not selected"} />
                <Row label="Price per person" value={formatINR(selectedPackage?.price || 0)} />
                <div className="border-t border-deepblue/10 pt-3 dark:border-white/10">
                  <Row label="Total Amount" value={formatINR(total)} bold />
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                {["card", "upi", "netbanking"].map((m) => (
                  <button
                    key={m}
                    onClick={() => update("payment", m)}
                    className={cn(
                      "chip capitalize",
                      form.payment === m
                        ? "border-deepblue bg-deepblue text-cream"
                        : "border-deepblue/15 text-deepblue/60 dark:border-white/15 dark:text-cream/60"
                    )}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 5 && (
            <motion.div
              key="5"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center py-8 text-center"
            >
              <HiCheckCircle className="h-16 w-16 text-emerald-500" />
              <h2 className="mt-5 font-display text-2xl font-semibold text-deepblue dark:text-cream">
                Booking Confirmed!
              </h2>
              <p className="mt-2 max-w-sm font-body text-sm text-deepblue/60 dark:text-cream/60">
                A confirmation for {selectedPackage?.name} has been sent to {form.email || "your email"}.
                Our travel manager will contact you within 24 hours.
              </p>
              <div className="mt-6 rounded-2xl bg-deepblue/[0.04] px-6 py-3 font-display text-sm font-semibold text-deepblue dark:bg-white/5 dark:text-cream">
                Booking ID: WI-{Math.floor(100000 + Math.random() * 900000)}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {step < 5 && (
          <div className="mt-10 flex items-center justify-between">
            <button
              onClick={back}
              disabled={step === 1}
              className="font-display text-sm font-medium text-deepblue/60 disabled:opacity-30 dark:text-cream/60"
            >
              ← Back
            </button>
            <button onClick={next} className="btn-primary !px-8">
              {step === 4 ? "Confirm & Pay" : "Continue"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function Row({ label, value, bold }) {
  return (
    <div className="flex items-center justify-between">
      <span className="font-body text-sm text-deepblue/60 dark:text-cream/60">{label}</span>
      <span className={cn("font-body text-sm text-deepblue dark:text-cream", bold && "font-display text-base font-semibold")}>
        {value}
      </span>
    </div>
  );
}
