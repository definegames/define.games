"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useState } from "react";

const ROOT_URL = "https://define.games";
const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyJ3aVRur8DWT0lbEXYM9AsFPg-D6a2ieAfcnX2xr66mBA8QmZWRXR2JA1sVc7PXppl/exec";

const CLASSES_BY_STATUS = {
  idle: "",
  loading: "",
  success: "bg-green-50 text-green-700 border border-green-200",
  error: "bg-red-50 text-red-700 border border-red-200",
};

export default function B2BAISaaSPage(): JSX.Element {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header searchQuery="B2B AI SaaS" />

      {/* Main Content */}
      <main className="py-4 sm:py-6 flex-grow">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {/* Page Title */}
          <div className="mb-8 sm:mb-12">
            <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm mb-2 flex-wrap text-gray-600">
              <span className="text-gray-700">{ROOT_URL}</span>
              <span className="text-gray-400">›</span>
              <span>tabletop</span>
              <span className="text-gray-400">›</span>
              <span>b2b-ai-saas</span>
            </div>
            <h1 className="text-3xl sm:text-4xl text-gray-900 font-normal mb-2">B2B AI SaaS</h1>
            <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm flex-wrap mb-4">
              <span className="px-2 py-1 bg-orange-50 text-orange-700 rounded">Tabletop</span>
              <span className="px-2 py-1 bg-pink-50 text-pink-700 rounded">Party Game</span>
              <span className="px-2 py-1 bg-yellow-50 text-yellow-700 rounded">3-12 players</span>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              A dynamic and hilarious party game for 3 to 12 players. Join a startup and attempt to build a successful
              product without going bankrupt. Or go bankrupt in a hilarious way! There are many ways to win...
            </p>
            <br />
            <p className="text-lg text-gray-700 leading-relaxed">
              If you want to get notified when there are any news, please leave your email:
            </p>

            {/* Email Collection Form */}
            <EmailCollectionForm />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function EmailCollectionForm(): JSX.Element {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();

    if (!email) {
      setStatus("error");
      setMessage("Please enter a valid email address");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        mode: "no-cors", // Required for Google Apps Script
        body: JSON.stringify({ email: email }),
      });

      // Since we're using no-cors mode, we can't read the response
      // We'll assume success if no error is thrown
      setStatus("success");
      setMessage("Thank you! We'll keep you updated on our progress.");
      setEmail("");
    } catch (error) {
      console.error("Error submitting email:", error);
      setStatus("error");
      setMessage("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="mt-8 p-6 bg-gray-50 rounded-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2
              focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-900
              placeholder-gray-500"
            disabled={status === "loading"}
          />
          <button
            type="submit"
            disabled={status === "loading" || !email}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700
              focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50
              disabled:cursor-not-allowed transition-colors font-medium"
          >
            {status === "loading" ? "Submitting..." : "Notify Me"}
          </button>
        </div>

        {message && <div className={`p-3 rounded-lg text-sm ${CLASSES_BY_STATUS[status]}`}>{message}</div>}
      </form>

      <p className="mt-3 text-xs text-gray-500">
        We respect your privacy. Your email will only be used for game updates and will never be shared.
      </p>
    </div>
  );
}
