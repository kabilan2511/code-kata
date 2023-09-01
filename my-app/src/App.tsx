import React, { useState } from "react";
import "./App.css";
import axios from "axios";

interface FormData {
  businessName: string;
  businessType: string;
  loanAmount: number;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
}

const App: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    businessName: "",
    businessType: "",
    loanAmount: 0,
    contactName: "",
    contactEmail: "",
    contactPhone: "",
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/submit-application",
        formData
      );
      console.log("Server response:", response.data);
    } catch (error) {
      console.error("Error submitting application:", error);
    }
    console.log("Form data:", formData);
  };

  const businessTypes = ["Retail", "Technology", "Hospitality", "Other"];

  return (
    <div className="loan-form">
      <h2 className="heading">Business Loan Application</h2>
      <form className="outline" onSubmit={handleSubmit}>
        <label>
          Business Name:
          <input
            type="text"
            name="businessName"
            value={formData.businessName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Business Type:
          <input
            type="text"
            name="businessType"
            value={formData.businessType}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Loan Amount:
          <input
            type="number"
            name="loanAmount"
            value={formData.loanAmount}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Contact Name:
          <input
            type="text"
            name="contactName"
            value={formData.contactName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Contact Email:
          <input
            type="email"
            name="contactEmail"
            value={formData.contactEmail}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Contact Phone:
          <input
            type="tel"
            name="contactPhone"
            value={formData.contactPhone}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Select Service Provider:
          <input
            type="dropdown"
            name="contactPhone"
            value={formData.contactPhone}
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="cars">Choose a car:</label>
        <select>
          <option></option>
        </select>
        <button className="submit" type="submit">
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default App;
