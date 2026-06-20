"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { HiCheckCircle } from "react-icons/hi2";

export default function InquiryForm({ packageName, title = "Request a Custom Quote", compact = false }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const [sent, setSent] = useState(false);

  const onSubmit = async (data) => {
    await new Promise((r) => setTimeout(r, 900));
    setSent(true);
    reset();
  };

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center rounded-3xl bg-emerald-50 p-10 text-center dark:bg-emerald-500/10"
      >
        <HiCheckCircle className="h-12 w-12 text-emerald-500" />
        <h3 className="mt-4 font-display text-lg font-semibold text-deepblue dark:text-cream">
          Inquiry received!
        </h3>
        <p className="mt-2 font-body text-sm text-deepblue/60 dark:text-cream/60">
          Our travel desk will reach out within 24 hours with a tailored plan.
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`rounded-3xl ${compact ? "" : "glass-card p-6 sm:p-8"}`}
    >
      {!compact && (
        <h3 className="font-display text-lg font-semibold text-deepblue dark:text-cream">{title}</h3>
      )}
      {packageName && (
        <p className="mt-1 font-utility text-xs text-deepblue/50 dark:text-cream/50">
          For: {packageName}
        </p>
      )}

      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <input
            placeholder="Full Name"
            {...register("name", { required: true })}
            className="w-full rounded-xl border border-deepblue/15 bg-white/70 px-4 py-3 font-body text-sm text-deepblue outline-none focus:border-sky-400 dark:border-white/15 dark:bg-white/5 dark:text-cream"
          />
          {errors.name && <span className="mt-1 block text-xs text-sunset-600">Name is required</span>}
        </div>
        <div>
          <input
            placeholder="Phone Number"
            {...register("phone", { required: true })}
            className="w-full rounded-xl border border-deepblue/15 bg-white/70 px-4 py-3 font-body text-sm text-deepblue outline-none focus:border-sky-400 dark:border-white/15 dark:bg-white/5 dark:text-cream"
          />
          {errors.phone && <span className="mt-1 block text-xs text-sunset-600">Phone is required</span>}
        </div>
      </div>

      <div className="mt-4">
        <input
          type="email"
          placeholder="Email Address"
          {...register("email", { required: true })}
          className="w-full rounded-xl border border-deepblue/15 bg-white/70 px-4 py-3 font-body text-sm text-deepblue outline-none focus:border-sky-400 dark:border-white/15 dark:bg-white/5 dark:text-cream"
        />
        {errors.email && <span className="mt-1 block text-xs text-sunset-600">Email is required</span>}
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input
          placeholder="Preferred Destination"
          {...register("destination")}
          className="w-full rounded-xl border border-deepblue/15 bg-white/70 px-4 py-3 font-body text-sm text-deepblue outline-none focus:border-sky-400 dark:border-white/15 dark:bg-white/5 dark:text-cream"
        />
        <input
          type="date"
          {...register("travelDate")}
          className="w-full rounded-xl border border-deepblue/15 bg-white/70 px-4 py-3 font-body text-sm text-deepblue outline-none focus:border-sky-400 dark:border-white/15 dark:bg-white/5 dark:text-cream"
        />
      </div>

      <textarea
        placeholder="Tell us more about your trip..."
        rows={4}
        {...register("message")}
        className="mt-4 w-full rounded-xl border border-deepblue/15 bg-white/70 px-4 py-3 font-body text-sm text-deepblue outline-none focus:border-sky-400 dark:border-white/15 dark:bg-white/5 dark:text-cream"
      />

      <button type="submit" disabled={isSubmitting} className="btn-primary mt-5 w-full justify-center disabled:opacity-60">
        {isSubmitting ? "Sending..." : "Send Inquiry"}
      </button>
    </form>
  );
}
