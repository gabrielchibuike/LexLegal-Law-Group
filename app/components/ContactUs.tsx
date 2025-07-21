"use client";

import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  User,
  MessageSquare,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<{
    name?: string;
    phoneNumber?: string;
    email?: string;
    message?: string;
  }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Validation function
  const validateForm = () => {
    const newErrors: {
      name?: string;
      phoneNumber?: string;
      email?: string;
      message?: string;
    } = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Phone number validation
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!/^\+?[\d\s-()]{10,}$/.test(formData.phoneNumber.trim())) {
      newErrors.phoneNumber = "Please enter a valid phone number";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Please describe your legal issue";
    } else if (formData.message.trim().length < 10) {
      newErrors.message =
        "Please provide more details (at least 10 characters)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_ID as string;

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phoneNumber,
          message: formData.message,
        },
        PUBLIC_KEY
      );

      setIsSubmitted(true);
      setFormData({ name: "", phoneNumber: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS send error:", error);
      alert("There was a problem sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Success message component
  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="max-w-6xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Left side - Image */}
            <div className="lg:w-1/2 bg-gradient-to-br from-orange-400 via-red-500 to-purple-600 p-12 flex items-center justify-center">
              <div className="text-center text-white">
                <CheckCircle size={80} className="mx-auto mb-6" />
                <h2 className="text-3xl font-bold mb-4">Thank You!</h2>
                <p className="text-lg opacity-90">
                  We've received your legal consultation request and will
                  contact you within 24 hours.
                </p>
              </div>
            </div>

            {/* Right side - Success message */}
            <div className="lg:w-1/2 p-12 flex items-center">
              <div className="w-full text-center">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Your Request Has Been Submitted
                </h3>
                <p className="text-gray-600 mb-8">
                  Our experienced legal team will review your case and get back
                  to you soon with professional advice tailored to your
                  situation.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setErrors({});
                  }}
                  className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Submit Another Request
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen  flex items-center justify-center p-4">
      <div className="max-w-7xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          {/* Left side - Image and branding */}
          <div className="lg:w-1/2 relative max-lg:hidden">
            {/* Background image */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 via-red-500/20 to-purple-600/20"></div>
            <img
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Professional woman holding scales of justice"
              className="w-full h-full object-cover"
            />

            {/* Overlay content */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
              <div className="p-8 text-white">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-lg flex items-center justify-center mr-4">
                    ⚖️
                  </div>
                  <span className="text-xl font-semibold">Legal Experts</span>
                </div>
                <h2 className="text-2xl font-bold mb-2">
                  Professional Legal Consultation
                </h2>
                <p className="text-white/90">
                  Get expert legal advice from our experienced attorneys
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="lg:w-1/2 p-8 lg:p-12">
            <div className="max-w-md mx-auto">
              {/* Header */}
              <div className="text-center mb-8">
                <p className="text-orange-500 text-sm font-medium uppercase tracking-wide mb-2">
                  CONTACT US
                </p>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 leading-tight">
                  Need Professional Legal Advice?
                </h1>
                <p className=" text-lg text-center text-muted-foreground">
                  Fill in the form, describe your legal issue, and we will get
                  in touch with you soon.
                </p>
              </div>

              {/* Form */}
              <div className="space-y-6">
                {/* Full Name */}
                <div>
                  <div className="relative">
                    <User
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                      size={20}
                    />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name*"
                      className={`w-full pl-12 pr-4 py-4 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 ${
                        errors.name
                          ? "border-red-500 bg-red-50"
                          : "border-gray-300 bg-gray-50"
                      }`}
                    />
                  </div>
                  {errors.name && (
                    <p className="mt-2 text-sm text-red-600 flex items-center">
                      <AlertCircle size={16} className="mr-1" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <div className="relative">
                    <Phone
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                      size={20}
                    />
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number*"
                      className={`w-full pl-12 pr-4 py-4 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 ${
                        errors.phoneNumber
                          ? "border-red-500 bg-red-50"
                          : "border-gray-300 bg-gray-50"
                      }`}
                    />
                  </div>
                  {errors.phoneNumber && (
                    <p className="mt-2 text-sm text-red-600 flex items-center">
                      <AlertCircle size={16} className="mr-1" />
                      {errors.phoneNumber}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <div className="relative">
                    <Mail
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                      size={20}
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your e-mail*"
                      className={`w-full pl-12 pr-4 py-4 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 ${
                        errors.email
                          ? "border-red-500 bg-red-50"
                          : "border-gray-300 bg-gray-50"
                      }`}
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-600 flex items-center">
                      <AlertCircle size={16} className="mr-1" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <div className="relative">
                    <MessageSquare
                      className="absolute left-3 top-4 text-gray-400"
                      size={20}
                    />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Type your message"
                      className={`w-full pl-12 pr-4 py-4 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 resize-none ${
                        errors.message
                          ? "border-red-500 bg-red-50"
                          : "border-gray-300 bg-gray-50"
                      }`}
                    />
                  </div>
                  {errors.message && (
                    <p className="mt-2 text-sm text-red-600 flex items-center">
                      <AlertCircle size={16} className="mr-1" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-primary cursor-pointer h-12  font-semibold"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </div>
                  ) : (
                    "Request a Quote"
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
