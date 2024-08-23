import React, { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,  // Import WhatsApp icon
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import SummaryApi from "../common";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [focused, setFocused] = useState({
    name: false,
    email: false,
    phone: false,
    message: false,
  });

  const [contactInfo, setContactInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        const response = await fetch(SummaryApi.showcontact.url, {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        if (data.success) {
          setContactInfo(data.data[0]); // Assuming API returns an array of contact info
        }
      } catch (err) {
        console.error("Failed to fetch contact info:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchContactInfo();
  }, []);

  const handleFocus = (field) => {
    setFocused((prev) => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field, value) => {
    if (!value) {
      setFocused((prev) => ({ ...prev, [field]: false }));
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(SummaryApi.userfeedback.url, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const jsonResponse = await response.json();
      if (jsonResponse.success) {
        toast.success(jsonResponse.message);
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else if (jsonResponse.error) {
        toast.error(jsonResponse.message);
      }
    } catch (err) {
      toast.error("Failed to submit feedback. Please try again later.");
    }
  };

  
  const getSocialIcon = (platform) => {
    switch (platform.toLowerCase()) {
      case "facebook":
        return <FaFacebookF />;
      case "twitter":
        return <FaTwitter />;
      case "instagram":
        return <FaInstagram />;
      case "linkedin":
        return <FaLinkedinIn />;
        case "whatsapp":
        return <FaWhatsapp/>;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto min-h-screen flex items-center justify-center p-8 bg-gray-100 relative overflow-hidden">
      <div className="absolute w-96 h-96 bg-teal-400 rounded-full opacity-30 -top-20 -right-20"></div>
      <div className="relative w-full max-w-4xl bg-white rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        <div className="p-8 bg-teal-500 text-white flex flex-col justify-between">
          <h3 className="text-2xl font-semibold mb-4">
            {contactInfo ? contactInfo.title : "Let's get in touch"}
          </h3>
          {isLoading ? (
            <p>Loading contact information...</p>
          ) : contactInfo ? (
            <>
              <p className="mb-8">{contactInfo.description}</p>
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <FaMapMarkerAlt className="mr-4" />
                  <Link to="#" target="_blank" rel="noopener noreferrer" className="text-white">
                    {contactInfo.address}
                  </Link>
                </div>
                <div className="flex items-center mb-4">
                  <FaEnvelope className="mr-4" />
                  <a href={`mailto:${contactInfo.email}`} className="text-white">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center mb-4">
                  <FaPhone className="mr-4" />
                  <a href={`tel:${contactInfo.phone}`} className="text-white">
                    {contactInfo.phone}
                  </a>
                </div>
              </div>
              <div>
                <p className="mb-2">Connect with us:</p>
                <div className="flex space-x-3">
                  {contactInfo.socialLinks?.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-teal-600 text-white"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {getSocialIcon(link.platform)}
                    </a>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <p>No contact information available.</p>
          )}
        </div>
        <div className="p-8 flex flex-col justify-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact us</h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            {["name", "email", "phone", "message"].map((field) => (
              <div
                key={field}
                className={`relative border-2 rounded transition-all duration-300 ${
                  focused[field] ? "border-teal-500" : "border-gray-300"
                }`}
              >
                {field === "message" ? (
                  <textarea
                    name={field}
                    className="w-full px-3 py-2 bg-transparent text-gray-800 focus:outline-none resize-none"
                    onFocus={() => handleFocus(field)}
                    onBlur={(e) => handleBlur(field, e.target.value)}
                    onChange={handleChange}
                    value={formData[field]}
                    rows="4"
                    required
                    placeholder={focused[field] ? "" : "Message"}
                  />
                ) : (
                  <input
                    type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                    name={field}
                    className="w-full px-3 py-2 bg-transparent text-gray-800 focus:outline-none"
                    onFocus={() => handleFocus(field)}
                    onBlur={(e) => handleBlur(field, e.target.value)}
                    onChange={handleChange}
                    value={formData[field]}
                    maxLength={field === "phone" ? 10 : undefined}
                    pattern={field === "phone" ? "[0-9]{10}" : undefined}
                    required
                    placeholder={focused[field] ? "" : field.charAt(0).toUpperCase() + field.slice(1)}
                  />
                )}
              </div>
            ))}
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-teal-500 hover:bg-teal-600 rounded-lg transition-all"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
