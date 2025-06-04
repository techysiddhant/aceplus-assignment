"use client";
import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const Connect = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({
    name: "",
    phone: "",
  });
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
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
          "https://dev.user.api.aceplus.in/web/consult-expert",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json, text/plain, */*",
            },
            body: JSON.stringify({
              full_name: formData.name,
              whatsapp_number: formData.phone,
            }),
          }
        );

        if (response.ok) {
          setIsSuccess(true);
          // Delay WhatsApp redirect by 2 seconds to show thank you message
          setTimeout(() => {
            window.open(
              `https://api.whatsapp.com/send/?phone=919007858855&text&type=phone_number&app_absent=0`,
              "_blank"
            );
          }, 2000);
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
      <div className="connect-section">
        <div className="container connect-section-container">
          <div className="connect-section-content-div">
            {!isSuccess && (
              <div className="connect-section-content">
                <div className="connect-section-content-logo">
                  <div className="connect-section-content-logo-img">
                    <img src="/logo.svg" alt="logo" />
                  </div>
                  <p>Tutor</p>
                </div>
                <div className="connect-section-content-wrapper">
                  <div className="connect-section-content-wrapper-item-1">
                    <p className="connect-section-content-wrapper-item-1-title">
                      Clear all your doubts with our{" "}
                      <span>Master Skill Coach!</span>
                    </p>
                    <div className="connect-section-content-wrapper-item-1-list">
                      <div className="connect-section-content-wrapper-item-1-list-item">
                        <img src="/brain.svg" alt="icon-1" />
                        <p>Expert Consultations</p>
                      </div>
                      <div className="connect-section-content-wrapper-item-1-list-item">
                        <img src="/prompt.svg" alt="icon-1" />
                        <p>Prompt Interaction & Guidance</p>
                      </div>
                      <div className="connect-section-content-wrapper-item-1-list-item">
                        <img src="/rocket.svg" alt="icon-1" />
                        <p>Guaranteed Satisfaction</p>
                      </div>
                    </div>
                  </div>
                  <div className="connect-section-content-wrapper-item-2">
                    <p>Connect with our Master Skill Coach</p>
                    <div className="connect-section-content-wrapper-input-div">
                      <div className="connect-section-content-wrapper-input-div-item-1">
                        <input
                          type="text"
                          name="name"
                          id=""
                          placeholder="Full Name"
                          className={error.name ? "error-input" : ""}
                          onChange={handleChange}
                          value={formData.name}
                        />
                        {error.name && <ErrorLabel message={error.name} />}
                      </div>
                      <div className="connect-section-content-wrapper-input-div-item-2">
                        <div
                          // className="connect-section-content-form-input-phone"
                          className={`connect-section-content-form-input-phone ${
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
                            className="connect-section-content-form-input-phone-input"
                            onChange={handleChange}
                            value={formData.phone}
                          />
                        </div>
                        {error.phone && <ErrorLabel message={error.phone} />}
                      </div>
                      <button
                        onClick={handleSubmit}
                        disabled={isLoading}
                        className="connect-section-content-wrapper-input-div-button"
                      >
                        Connect Via Whatsapp
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {isSuccess && (
              <div className=" connect-form-success">
                <div className="touch-form-success-img">
                  <img src="/touch-success.svg" alt="success" />
                </div>
                <div className="connect-form-success-content">
                  <h2>Thank You !</h2>
                  <p>
                    Your consultation request has been received. <br /> Our
                    expert will connect with you shortly via WhatsApp.
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

export default Connect;

export const ErrorLabel = ({ message }) => {
  return (
    <div className="error-label">
      <img src="/error.svg" alt="error" />
      <span>{message}</span>
    </div>
  );
};
