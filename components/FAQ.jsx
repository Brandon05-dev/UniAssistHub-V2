// 📁 src/components/FAQ.jsx
import React from "react";

const question = [
  {
    question: "What services does UniAssist Hub offer?",
    answer: "We provide academic support including assignments, CV writing, SODEL assistance, reports, and more."
  },
  {
    question: "How do I place an order?",
    answer: "Use the Order section on our website to submit your request."
  },
  {
    question: "Can I track my order?",
    answer: "Yes, use the Track Order feature for real-time updates."
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-16 px-6 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center text-blue-600 dark:text-white mb-8">Frequently Asked Questions</h2>
      <div className="max-w-4xl mx-auto space-y-6">
        {questions.map((q, i) => (
          <div key={i} className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold text-blue-600 dark:text-white">{q.question}</h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">{q.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
