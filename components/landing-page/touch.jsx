"use client";
import { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import StickyButtons from "./sticky-buttons";

const Touch = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: "",
      phone: "",
      email: "",
    };

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
      isValid = false;
    } else if (
      formData.phone.length < 10 ||
      !Number.isInteger(Number(formData.phone))
    ) {
      newErrors.phone = "Please enter a valid phone number.";
      isValid = false;
    }

    if (formData.email.trim() && !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    setError(newErrors);
    setIsError(!isValid);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://dev.user.api.aceplus.in/web/get-in-touch",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: formData.name,
              phone: formData.phone,
              email: formData.email,
              platform: "web",
            }),
          }
        );

        if (response.ok) {
          setIsSuccess(true);
        } else {
          setIsError(true);
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <>
      {isLoading && (
        <Backdrop
          sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
          open={isLoading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
      <StickyButtons />
      <div className="container">
        <div className="touch-section-content">
          <div className="touch-section-content-div">
            {!isSuccess && (
              <div className="touch-section-content-form">
                <h2>Get in touch </h2>
                <div className="touch-section-content-form-input-div">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      onChange={handleChange}
                      value={formData.name}
                      className={error.name ? "error-input" : ""}
                    />
                    {error.name && <ErrorLabel message={error.name} />}
                  </div>
                  <div>
                    <div
                      className={`touch-section-content-form-input-phone ${
                        error.phone ? "error-input" : ""
                      }`}
                    >
                      <div>
                        <span>+91 </span>
                      </div>
                      <input
                        type="text"
                        maxLength={10}
                        name="phone"
                        placeholder="Phone/Whatsapp Number"
                        className="touch-section-content-form-input-phone-input"
                        onChange={handleChange}
                        value={formData.phone}
                      />
                    </div>
                    {error.phone && <ErrorLabel message={error.phone} />}
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address (Optional)"
                      className={`touch-section-content-form-input-email ${
                        error.email ? "error-input" : ""
                      }`}
                      onChange={handleChange}
                      value={formData.email}
                    />
                    {error.email && <ErrorLabel message={error.email} />}
                  </div>
                  <button onClick={handleSubmit} disabled={isLoading}>
                    Submit
                  </button>
                </div>
              </div>
            )}
            {isSuccess && (
              <div className="touch-form-success">
                <div className="touch-form-success-img">
                  <img src="/touch-success.svg" alt="success" />
                </div>
                <div className="touch-form-success-content">
                  <h2>Thank You !</h2>
                  <p>
                    Your response has been received. Our team will respond
                    shortly.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Touch;

export const ErrorLabel = ({ message }) => {
  return (
    <div className="error-label">
      <img src="/error.svg" alt="error" />
      <span>{message}</span>
    </div>
  );
};
