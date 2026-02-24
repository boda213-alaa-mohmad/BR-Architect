// import z from "zod";

// const FormSchema = z.object({
//   name: z.string(),
//   email: z.string(),
//   subject: z.string(),
//   comment: z.string(),
// });

"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    comment: "",
  });

  function handleSubmitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(form);
  }

  function handleSubmitName(event: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, name: event.target.value });
  }

  function handleSubmitEmail(event: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, email: event.target.value });
  }

  function handleSubmitSubject(event: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, subject: event.target.value });
  }

  function handleSubmitComment(event: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, comment: event.target.value });
  }

  return (
    <div className="contact">
      <h2 className="title">Contact</h2>
      <p>Lets get in touch and talk about your next project.</p>
      <form className="contact-form" onSubmit={handleSubmitForm}>
        <input
          type="text"
          placeholder="Name"
          required
          value={form.name}
          onChange={handleSubmitName}
        />
        <input
          type="Email"
          placeholder="Email"
          required
          value={form.email}
          onChange={handleSubmitEmail}
        />
        <input
          type="text"
          placeholder="Subject"
          required
          value={form.subject}
          onChange={handleSubmitSubject}
        />
        <input
          type="text"
          placeholder="Comment"
          required
          value={form.comment}
          onChange={handleSubmitComment}
        />

        <button type="submit">SEND MESSAGE</button>
      </form>
    </div>
  );
}

{
  /* <div style={{
  height: "300px"
}}>
  <Image
  
    src="https://www.w3schools.com/w3images/map.jpg"
    alt="a beautiful view"
  />
</div> */
}
