import { useState, ChangeEvent, FormEvent } from "react";
import Input from "@/components/generalComponents/Input";
import Textarea from "@/components/generalComponents/TextArea";
import * as Yup from "yup";
import "./ContactForm.scss";

// creating interface for Form in Contact Us page
interface FormData {
  FirstName: string;
  LastName: string;
  Email: string;
  Phone: string;
  Address: string;
  message: string;
}
interface ValidationError {
  path: string;
  message: string;
}

interface CustomError {
  inner: ValidationError[];
}

// Now creating the form validation for the Form using YUP
const validationSchema = Yup.object({
  FirstName: Yup.string()
    .required("First Name is required")
    .max(100, "You exceeded the chracter limit"),
  LastName: Yup.string()
    .required("Last Name is required")
    .max(100, "You exceeded the chracter limit"),
  Email: Yup.string()
    .required("Email is required")
    .email("Invalid Email Format")
    .max(100, "You exceeded the chracter limit"),
  Phone: Yup.string()
    .required("Phone Number is required")
    .matches(/^\d{10}$/, "Phone Number must be in 10 digits"),
  Address: Yup.string()
    .required("Address is required")
    .max(150, "You exceeded the chracter limit"),
  message: Yup.string()
    .required("message is required")
    .max(5000, "You exceeded the chracter limit"),
});

export const ContactForm = () => {
  // Create a state for errors
  const [error, setError] = useState<{ [key: string]: string }>({});
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

  const handleSubmit = async (e: FormEvent) => {
    try {
      e.preventDefault();
      // Handle form submission
      await validationSchema.validate(formData, { abortEarly: false });
      
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
      setError({}); 
      const btn: HTMLButtonElement | null =
        document.querySelector(".submit-btn");
      if (btn) {
        btn.innerHTML = "Successfully Submitted";
        setTimeout(() => {
          btn.innerHTML = "SEND";
        }, 2000);
      }
    } catch (error: any) {
      const newError: { [key: string]: string } = {};

      (error as CustomError).inner.forEach((err: ValidationError) => {
        newError[err.path] = err.message;
      });

      setError(newError)
      console.log(newError);
      
      
    }
  };

  return (
    <form onSubmit={handleSubmit} className="formDesign" >
      <div className="form-name">
        <Input
          type="text"
          name="FirstName"
          value={formData.FirstName}
          placeholder="Enter your first name"
          onChange={handleChange}
          label="First Name"
          errorMsg={error.FirstName}
        />
        <Input
          type="text"
          name="LastName"
          value={formData.LastName}
          placeholder="Enter your last name"
          onChange={handleChange}
          label="Last Name"
          errorMsg={error.LastName}
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
          errorMsg={error.Email}
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
          errorMsg={error.Phone}
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
          errorMsg={error.Address}
        />
      </div>
      <div className="form-message">
        <Textarea
          name="message"
          value={formData.message}
          placeholder="Type your message"
          onChange={handleChange}
          label="Message"
          errorMsg={error.message}
        />
      </div>
      <button type="submit" className="submit-btn">
        SEND
      </button>
    </form>
  );
};
