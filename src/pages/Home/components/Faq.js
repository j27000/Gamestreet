
import { Accordion } from "./Accordion";

export const Faq = () => {
  const faqs = [
    {
      id: 1,
      question: "Why should I use GameStreet?",
      answer: "GameStreet offers a vast collection of the latest games across all platforms. With competitive prices, regular updates, and a user-friendly interface, it's your one-stop-shop for all your gaming needs."
    },
    {
      id: 2,
      question: "Can I play games on multiple devices?",
      answer: "Absolutely! GameStreet supports multi-device access, allowing you to play your games on various devices without any hassle."
    },
    {
      id: 3,
      question: "Do you offer refunds?",
      answer: "Yes, we offer refunds under certain conditions. Please refer to our refund policy for detailed information on how to request a refund."
    },
    {
      id: 4,
      question: "Do you support international payments?",
      answer: "Yes, GameStreet supports international payments. You can purchase games from anywhere in the world using various payment methods."
    }
  ];

  return (
    <section className="my-10 p-7 border rounded text-black shadow-sm bg-white dark:bg-gray-800 dark:text-white">
      <h1 className="text-2xl text-center font-semibold text-black dark:text-white mb-3 underline underline-offset-8">Questions in Mind?</h1>
      <div className="" id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white text-black text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
        {faqs.map((faq) => (
          <div key={faq.id}>
            <Accordion product={faq} />
          </div>
        ))}
      </div>
    </section>
  );
}
