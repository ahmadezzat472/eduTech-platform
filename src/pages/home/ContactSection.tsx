import { Mail, MessageSquare, Send, User } from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-50">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">Contact Us</h2>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
          Have questions or feedback? We'd love to hear from you!
        </p>
      </div>

      {/* Contact Form */}
      <div className="max-w-2xl mx-auto bg-white shadow-lg p-8 rounded-lg">
        <form className="flex flex-col gap-4">
          <div className="relative">
            <User className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Your Name"
              className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="relative">
            <MessageSquare
              className="absolute left-3 top-3 text-gray-400"
              size={20}
            />
            <textarea
              placeholder="Your Message"
              className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
            />
          </div>
          <Button className="w-full flex items-center gap-2 justify-center">
            <Send size={16} />
            Send Message
          </Button>
        </form>
      </div>

      {/* Social Icons */}
      <div className="mt-10 ml-4 flex justify-center gap-6">
        <a
          href="https://facebook.com"
          target="_blank"
          className="hover:text-blue-600"
        >
          <FaFacebook size={28} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          className="hover:text-pink-500"
        >
          <FaInstagram size={28} />
        </a>
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          className="hover:text-green-500"
        >
          <FaWhatsapp size={28} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          className="hover:text-blue-700"
        >
          <FaLinkedin size={28} />
        </a>
      </div>
    </section>
  );
}
