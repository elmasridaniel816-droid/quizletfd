
// pages/next.tsx

"use client";

import { useState, ChangeEvent, FormEvent } from "react";

interface NextFormData {
  feedback: string;
  reasonForRefund: string;
  comments: string;
}

export default function Next() {
  const [formData, setFormData] = useState<NextFormData>({
    feedback: "",
    reasonForRefund: "",
    comments: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage("");

    try {
      // Simulating form submission
      // In a real-world scenario, you would send form data to a server or API here
      console.log("Form submitted:", formData);

      setStatusMessage("Your information has been submitted successfully!");
      // Reset the form after submission
      setFormData({
        feedback: "",
        reasonForRefund: "",
        comments: "",
      });
    } catch (error) {
      setStatusMessage("Failed to submit your information. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Next Steps After Refund Request</h1>
      <form onSubmit={handleSubmit}>
        <section>
          <h2>Provide Feedback</h2>
          <label htmlFor="feedback">Would you recommend us?</label>
          <select
            id="feedback"
            value={formData.feedback}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="maybe">Maybe</option>
          </select>
        </section>

        <section>
          <h2>Refund Information</h2>
          <label htmlFor="reasonForRefund">Reason for Refund:</label>
          <input
            type="text"
            id="reasonForRefund"
            value={formData.reasonForRefund}
            onChange={handleChange}
            required
          />
        </section>

        <section>
          <h2>Additional Comments</h2>
          <label htmlFor="comments">Any additional comments or feedback?</label>
          <textarea
            id="comments"
            value={formData.comments}
            onChange={handleChange}
            rows={4}
            required
          />
        </section>

        {statusMessage && <p>{statusMessage}</p>}

        <button type="submit" disabled={isLoading}>
          {isLoading ? "Submitting..." : "Submit Feedback"}
        </button>
      </form>
    </div>
  );
}
