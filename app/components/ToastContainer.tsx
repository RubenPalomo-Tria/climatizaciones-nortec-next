"use client";
import { useEffect, useState } from "react";

export default function ToastContainer() {
  const [toasts, setToasts] = useState<
    { id: number; type: string; message: string }[]
  >([]);
  useEffect(() => {
    function handler(event: Event) {
      const toastEvent = event as CustomEvent<{
        type?: string;
        message?: string;
      }>;
      const type = toastEvent.detail?.type ?? "success";
      const message = toastEvent.detail?.message ?? "";
      if (!message) {
        return;
      }
      setToasts((prev) => [...prev, { id: Date.now(), type, message }]);
    }
    window.addEventListener("toast", handler);
    return () => window.removeEventListener("toast", handler);
  }, []);

  useEffect(() => {
    if (toasts.length > 0) {
      const timer = setTimeout(() => {
        setToasts((prev) => prev.slice(1));
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toasts]);

  return (
    <div
      className="toast-stack"
      aria-live="polite"
      aria-atomic="true"
    >
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`toast ${toast.type === "error" ? "toast-error" : "toast-success"}`}
        >
          {toast.message}
        </div>
      ))}
    </div>
  );
}
