import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast as toastMessages } from "@/utils/constant";
import { fadeInUp, staggerContainer } from "@/component/MotionVariants";
import FieldBody from "@/component/FieldBody";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { contactSchema } from "@/utils/dataSchema";

export default function Contact() {
  const form = useRef();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const sendEmail = (data) => {
    console.log("form data", data);

    emailjs
      .send(
        "service_676idvo",
        "template_2eg4i0f",
        {
          name: data.fullname,
          email: data.email,
          subject: data.subject,
          message: data.message,
        },
        "aBAzWcICkbbkHX0yx"
      )
      .then(
        () => {
          toast.success(toastMessages.res);
          reset();
        },
        (error) => {
          toast.error(toastMessages.err);
          console.log("error", error.text);
        }
      );
  };

  return (
    <section className="py-20">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="mx-auto px-5 lg:px-20 lg:grid grid-cols-2 space-y-12 lg:space-y-0 gap-12 justify-center"
      >
        <motion.div
          variants={fadeInUp}
          className="flex flex-col justify-start gap-6"
        >
          <h2 className="text-7xl font-bold mb-6 uppercase">Let's connect</h2>
          <p className="text-gray-400 text-lg">
            Say hello at{" "}
            <a
              href="mailto:adefaratiifeoma@gmail.com?subject=Inquiry%20About%20Your%20Service&body=Hi%20there,%0D%0A%20please%20text%20me%20when%20free"
              className="border-b-2 border-[#d3e97a] cursor-pointer strong"
            >
              adefaratiifeoma@gmail.com
            </a>
          </p>
          <p className="text-gray-400 text-lg">
            For more info, here's{" "}
            <a
              href="Ecv.pdf"
              download="Esther_Cv"
              className="border-b-2 border-[#d3e97a] cursor-pointer strong"
            >
              my resume
            </a>
          </p>
          <div className="flex gap-4 items-center">
            <a
              href="https://www.linkedin.com/in/adefarati-toyosi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/link.svg" alt="linkedin" className="w-7" />
            </a>
            <a
              href="https://github.com/Adefarati22"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/git.svg" alt="github" className="w-7" />
            </a>
            <a
              href="https://www.instagram.com/adefaratie?igsh=MTg5c2gxbDNlMmxsYg=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/insta.svg" alt="instagram" className="w-7" />
            </a>
          </div>
        </motion.div>

        <motion.form
          ref={form}
          // eslint-disable-next-line react-hooks/refs
          onSubmit={handleSubmit(sendEmail)}
          variants={fadeInUp}
          className="grid gap-6"
        >
          <FieldBody
            fieldName="fullname"
            name="name"
            label="Full Name"
            type="text"
            placeholder="please enter full name"
            register={register}
            errors={errors}
            isSubmitting={isSubmitting}
          />

          <FieldBody
            fieldName="email"
            name="email"
            label="Email"
            type="email"
            placeholder="please enter email"
            register={register}
            errors={errors}
            isSubmitting={isSubmitting}
          />

          <FieldBody
            fieldName="subject"
            name="subject"
            label="Subject"
            type="text"
            placeholder="please enter subject"
            register={register}
            errors={errors}
            isSubmitting={isSubmitting}
          />
          <FieldBody
            fieldName="message"
            name="message"
            label="Message"
            type="textarea"
            placeholder="please enter your message"
            register={register}
            errors={errors}
            isSubmitting={isSubmitting}
          />

          <button
            type="submit"
            value="send"
            className="px-6 py-3 text-black font-semibold rounded-full bg-[#d3e97a] cursor-pointer hover:bg-[#b5cf4d]"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </motion.form>
      </motion.div>
    </section>
  );
}
