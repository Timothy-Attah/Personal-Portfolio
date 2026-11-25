'use client'

import {  Suspense, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import dynamic from "next/dynamic";
import useAlert from "@/hooks/useAlert";
import Alert from "@/components/Alert";
import Loader from "@/components/Loader";

const Canvas = dynamic(
  () => import("@react-three/fiber").then((mod) => mod.Canvas),
  { ssr: false },
);


const Fox = dynamic(() => import("@/models/Fox-opt"), {
  ssr: false,
});

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");
  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation("hit");

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: form.name,
          to_name: "Timothy",
          from_email: form.email,
          to_email: "timothyattah733@gmail.com",
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setIsLoading(false);
        showAlert({
          show: true,
          text: "Message sent successfully!",
          type: "success",
        });

        setTimeout(
          () => {
            hideAlert();
            setCurrentAnimation("idle");
            setForm({ name: "", email: "", message: "" });
          },
          [3000] as any,
        );
      })
      .catch((err) => {
        setIsLoading(false);
        setCurrentAnimation("idle");
        console.log(err);
        showAlert({
          show: true,
          text: "I didn't receive your message",
          type: "danger",
        });
      });
    console.log(form);
  };

  const handleFocus = () => setCurrentAnimation("walk");
  const handleBlur = () => setCurrentAnimation("idle");

  return (
    <section className=" relative flex lg:flex-row flex-col max-container mt-25">
      {alert.show && <Alert {...alert} />}
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text text-[foreground]">Get in Touch</h1>

        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-7 mt-14"
        >
          <label htmlFor="name" className=" text-[foreground] font-semibold">
            Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="John"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label htmlFor="name" className=" text-[foreground] font-semibold">
            Email
            <input
              type="email"
              name="email"
              className="input"
              placeholder="john@gmail.com"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <label htmlFor="name" className=" text-[foreground] font-semibold">
            Your Message
            <textarea
              name="message"
              rows={4}
              className="textarea"
              placeholder="Let me know how I can help you!"
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button
            type="submit"
            className="btn"
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      <div className=" lg:w-1/2 w-full lg:h-auto md:h-137.5 h-87.5">
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
          dpr={[1, 1.5]}
        >
          <directionalLight intensity={2.5} position={[0, 0, 1]} />
          <ambientLight intensity={0.5} />
          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.6, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
