import { useState } from "react";
import { MessageCircle, ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is GeSIM?",
    answer:
      "GeSIM is a global eSIM platform for Web3 users, remote workers, and IoT devices, offering seamless connectivity in 180+ countries.",
  },
  {
    question: "How do I activate my GeSIM?",
    answer:
      "Simply choose a plan, scan the QR code, and your eSIM will be instantly activated on your device.",
  },
  {
    question: "Can I pay with crypto?",
    answer:
      "Yes! GeSIM supports both crypto (USDC, ETH, etc.) and fiat top-ups for maximum flexibility.",
  },
  {
    question: "Who can use GeSIM?",
    answer:
      "Anyone who needs reliable, borderless mobile data—crypto nomads, remote workers, IoT projects, and more.",
  },
  {
    question: "Is my data private?",
    answer:
      "Absolutely. GeSIM uses ZK identity and encrypted, user-owned data for maximum privacy.",
  },
];

export default function FAQChat() {
  const [open, setOpen] = useState<number[]>([]);

  const handleClick = (idx: number) => {
    setOpen((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <section className="w-full min-h-[60vh] bg-black flex flex-col items-center justify-center py-24">
      <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-12 text-center tracking-tight">
        FAQs
      </h2>
      <div className="w-full max-w-2xl flex flex-col gap-6">
        {faqs.map((faq, idx) => (
          <div key={idx} className="flex flex-col gap-2">
            {/* Question bubble */}
            <div className="flex justify-end">
              <button
                className="relative group bg-gradient-to-r from-blue-500 via-blue-600 to-emerald-400 text-white px-6 py-3 rounded-2xl shadow-lg font-semibold text-lg max-w-[80%] text-right transition-all hover:scale-105 focus:outline-none"
                onClick={() => handleClick(idx)}
              >
                <span>{faq.question}</span>
                <ChevronDown className={`inline ml-2 w-5 h-5 transition-transform ${open.includes(idx) ? 'rotate-180' : ''}`} />
              </button>
            </div>
            {/* Answer bubble */}
            {open.includes(idx) && (
              <div className="flex justify-start animate-fade-in">
                <div className="relative bg-white/10 backdrop-blur-md border border-blue-200/20 text-blue-100 px-6 py-3 rounded-2xl shadow-lg font-medium max-w-[80%] text-left">
                  <MessageCircle className="absolute -left-7 top-1 text-blue-400 w-6 h-6" />
                  {faq.answer}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

// Add this to your main page before the Footer:
// <FAQChat /> 