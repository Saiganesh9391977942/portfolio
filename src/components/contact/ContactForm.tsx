import React, { useState } from "react";
import { Mail, MapPin, Send, Phone } from "lucide-react";
import toast from "react-hot-toast";

export const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
            toast.error("Please fill in all required fields.");
            return;
        }

        setIsSubmitting(true);

        const phoneNumber = "919391977942"; // Your WhatsApp number
        const messageText = `Hello Sai Ganesh,\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Subject:* ${formData.subject || 'No Subject'}\n\n*Message:*\n${formData.message}`;
        const encodedText = encodeURIComponent(messageText);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;

        // Open WhatsApp in a new tab
        window.open(whatsappUrl, "_blank");

        toast.success("Redirecting to WhatsApp...");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setIsSubmitting(false);
    };

    return (
        <section id="contact" className="py-24 px-6 md:px-12 bg-[#faf9f6]">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                {/* Left Side: Contact Information */}
                <div className="flex flex-col gap-8 max-w-lg mt-4">
                    <h2 className="text-5xl md:text-6xl font-serif font-normal text-[#1c1917] tracking-tight">
                        Get in touch.
                    </h2>
                    <p className="text-stone-600 text-sm md:text-base font-sans font-light leading-relaxed">
                        I'm currently open to new opportunities. Whether you have a question, a project proposal, or just want to say hi, I'll try my best to get back to you.
                    </p>

                    <div className="flex flex-col gap-6 mt-4">
                        {/* Email Detail */}
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-stone-100 flex items-center justify-center border border-stone-200/40 shadow-2xs">
                                <Mail className="w-5 h-5 text-[#5c4738]" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[10px] uppercase font-mono tracking-widest text-stone-400 font-bold">
                                    Email
                                </span>
                                <a
                                    href="mailto:hello@developer.io"
                                    className="text-stone-800 font-sans font-medium border-b border-stone-800/30 hover:border-stone-800 transition-all text-sm md:text-base"
                                >
                                    ganeshthenepalli4@gmail.com                                </a>
                            </div>
                        </div>

                        {/* Location Detail */}
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-stone-100 flex items-center justify-center border border-stone-200/40 shadow-2xs">
                                <MapPin className="w-5 h-5 text-[#5c4738]" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[10px] uppercase font-mono tracking-widest text-stone-400 font-bold">
                                    Location
                                </span>
                                <span className="text-stone-800 font-sans font-medium text-sm md:text-base">
                                    Hyderabad,Telangana
                                </span>
                                <span className="text-stone-400 text-xs font-sans font-light">
                                    (Remote friendly)
                                </span>

                            </div>
                        </div>

                        {/* Phone Detail */}
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-stone-100 flex items-center justify-center border border-stone-200/40 shadow-2xs">
                                <Phone className="w-5 h-5 text-[#5c4738]" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[10px] uppercase font-mono tracking-widest text-stone-400 font-bold">
                                    Phone
                                </span>
                                <a
                                    href="tel:+919391977942"
                                    className="text-stone-800 font-sans font-medium border-b border-stone-800/30 hover:border-stone-800 transition-all text-sm md:text-base"
                                >
                                    +91 93919 77942
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Form Card */}
                <div className="bg-white border border-stone-200/50 rounded-xl p-8 md:p-12 shadow-sm w-full max-w-xl">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-8">

                        {/* Row: Name and Email */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="flex flex-col gap-2">
                                <label className="text-[10px] uppercase font-mono tracking-widest text-stone-400 font-bold">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Jane Doe"
                                    className="border-b border-stone-200 focus:border-stone-600 outline-none pb-2 text-stone-800 text-sm md:text-base font-sans font-light bg-transparent transition-colors placeholder-stone-300"
                                    required
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-[10px] uppercase font-mono tracking-widest text-stone-400 font-bold">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="jane@example.com"
                                    className="border-b border-stone-200 focus:border-stone-600 outline-none pb-2 text-stone-800 text-sm md:text-base font-sans font-light bg-transparent transition-colors placeholder-stone-300"
                                    required
                                />
                            </div>
                        </div>

                        {/* Subject */}
                        <div className="flex flex-col gap-2">
                            <label className="text-[10px] uppercase font-mono tracking-widest text-stone-400 font-bold">
                                Subject
                            </label>
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Project Inquiry"
                                className="border-b border-stone-200 focus:border-stone-600 outline-none pb-2 text-stone-800 text-sm md:text-base font-sans font-light bg-transparent transition-colors placeholder-stone-300"
                            />
                        </div>

                        {/* Message */}
                        <div className="flex flex-col gap-2">
                            <label className="text-[10px] uppercase font-mono tracking-widest text-stone-400 font-bold">
                                Message
                            </label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tell me about your project..."
                                rows={4}
                                className="border-b border-stone-200 focus:border-stone-600 outline-none pb-2 text-stone-800 text-sm md:text-base font-sans font-light bg-transparent resize-none transition-colors placeholder-stone-300"
                                required
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-end mt-4">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="inline-flex items-center justify-center gap-2.5 px-6 py-3 bg-gradient-to-r from-[#5c4738] to-[#453428] hover:from-[#453428] hover:to-[#5c4738] text-white text-sm font-sans font-medium rounded-md shadow-sm hover:shadow-md transition-all duration-300 disabled:opacity-70 group"
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </button>
                        </div>

                    </form>
                </div>

            </div>
        </section>
    );
};
