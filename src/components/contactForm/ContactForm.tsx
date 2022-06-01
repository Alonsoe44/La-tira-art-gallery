import { send } from "@emailjs/browser";
import { Field, Form, Formik } from "formik";
import { useTranslation } from "react-i18next";

interface ContactFormProps {
  sendAction: (value: string) => void;
}
function ContactForm({ sendAction }: ContactFormProps) {
  const { t } = useTranslation();

  return (
    <div className="md:w-1/2 w-full pt-28 xl:pt-none md:px-10 px-4">
      <Formik
        initialValues={{ userName: "", email: "", message: "" }}
        onSubmit={async (data) => {
          sendAction("loading");
          send(
            "service_jizjk8p",
            "template_86mjudn",
            {
              from_name: data.userName,
              message: data.message,
              email: data.email,
            },
            "s7afD_Rf_nZcjVQga"
          ).then(() => {
            sendAction("success");
          });
        }}
      >
        <Form className="flex flex-col md:w-4/5 w-full">
          <label htmlFor="userName" className="text-xl mb-3">
            {t("contactUsPage.labelOne")}
          </label>
          <Field
            name="userName"
            type="text"
            className="bg-grayInput rounded-sm h-12 w-full pl-3 mb-8"
          />
          <label htmlFor="userEmail" className="text-xl mb-3">
            {t("contactUsPage.labelTwo")}
            <Field
              name="email"
              type="email"
              className="bg-grayInput rounded-sm h-12 w-full pl-3 mb-8"
            />
          </label>
          <label htmlFor="userMessage" className="text-xl mb-3">
            {t("contactUsPage.labelThree")}
            <Field
              name="message"
              as="textarea"
              className="bg-grayInput rounded-sm h-36 w-full pl-3 mb-8"
            />
          </label>
          <button
            className="bg-accent w-40 text-primaryOposite h-10 rounded-sm"
            type="submit"
          >
            {t("contactUsPage.sendText")}
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default ContactForm;
