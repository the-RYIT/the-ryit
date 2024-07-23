import { useState, ChangeEvent, FormEvent } from "react";
import Input from "@/components/generalComponents/Input";
import Textarea from "@/components/generalComponents/TextArea";
import "./ContactForm.scss";

interface FormData {
  FirstName: string;
  LastName: string;
  Email: string;
  Phone: string;
  Address: string;
  message: string;
}


export const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    FirstName: "",
    LastName: "",
    Email: "",
    Phone: "",
    Address: "",
    message: "",
  });


  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    // Reset form data
    setFormData({
      FirstName: "",
      LastName: "",
      Email: "",
      Phone: "",
      Address: "",
      message: "",
    });
    const btn: HTMLButtonElement | null = document.querySelector('.submit-btn');
    if (btn) {
      btn.innerHTML = "SENT"
      setTimeout(() => {
        btn.innerHTML = "SEND";
      }, 2000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="formDesign">
      <div className="form-name">
        <Input
          type="text"
          name="FirstName"
          value={formData.FirstName}
          placeholder="Enter your first name"
          onChange={handleChange}
          label="First Name"
        />
        <Input
          type="text"
          name="LastName"
          value={formData.LastName}
          placeholder="Enter your last name"
          onChange={handleChange}
          label="Last Name"
        />
      </div>
      <div className="form-email">
        <Input
          type="email"
          name="Email"
          value={formData.Email}
          placeholder="Enter your email"
          onChange={handleChange}
          label="Email"
        />
      </div>
      <div className="form-phone">
        <Input
          type="text"
          name="Phone"
          value={formData.Phone}
          placeholder="Enter your phone number"
          onChange={handleChange}
          label="Phone"
        />
      </div>
      <div className="form-address">
        <Input
          type="text"
          name="Address"
          value={formData.Address}
          placeholder="Enter your address"
          onChange={handleChange}
          label="Address"
        />
      </div>
      <div className="form-message">
        <Textarea
          name="message"
          value={formData.message}
          placeholder="Type your message"
          onChange={handleChange}
          label="Message"
        />
      </div>
      <button type="submit" className="submit-btn">SEND</button>
    </form>
  );
};
