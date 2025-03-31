import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setError(""); // Réinitialise l'erreur avant chaque soumission

    // Vérification des champs vides
    const formData = new FormData(form.current);
    if (!formData.get("user_name") || !formData.get("user_email") || !formData.get("message")) {
      setError("Please fill in all fields.");
      return;
    }

    // Vérification du format de l'email
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(formData.get("user_email"))) {
      setError("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true); // Afficher une animation de soumission

    emailjs.sendForm("service_1jmpxin", "template_w58ekpb", form.current, "QkBjkZ8S_yJGiLDmQ")
      .then((result) => {
        console.log("Message envoyé !", result.text);
        setMessageSent(true); // Afficher le message de confirmation
        setIsSubmitting(false); // Cacher l'animation de soumission
      }, (error) => {
        console.log("Erreur...", error.text);
        setError("Something went wrong, please try again.");
        setIsSubmitting(false); // Cacher l'animation de soumission
      });
  };

  return (
    <section id="contact" className="py-10 px-5 bg-gray-900">
      <h2 className="text-3xl font-bold text-center text-white mb-6">Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="max-w-lg mx-auto mt-6 space-y-4">
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="w-full p-4 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="w-full p-4 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
        />
        <textarea
          name="message"
          placeholder="Write your message here, but it cannot exceed 1000 characters"
          required
          rows="6"
          maxLength="1000"  // Limite à 1000 caractères
          className="w-full p-4 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 resize-none"  // Désactive le redimensionnement
        ></textarea>

        <button
          type="submit"
          className={`w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition duration-200 transform hover:scale-105 ${isSubmitting ? "cursor-wait opacity-50" : ""}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>

      {error && (
        <p className="mt-4 text-red-500 text-center">
          ❌ {error}
        </p>
      )}

      {messageSent && (
        <p className="mt-4 text-green-500 text-center">
          Your message has been sent successfully! <span role="img" aria-label="thumbs-up">👍</span>
        </p>
      )}
    </section>
  );
};

export default Contact;
